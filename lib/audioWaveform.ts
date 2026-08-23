/**
 * Client-only helper that decodes an audio file into a compact array of
 * amplitude peaks (0..1), used to draw a waveform UI without shipping the
 * full audio file to every visitor just to render a shape.
 *
 * Decoding happens once, in the admin's browser, at upload time — the
 * public-facing player only ever reads the small stored `peaks` array.
 */
export async function computeWaveformPeaks(
  file: File,
  barCount = 64
): Promise<number[]> {
  const AudioContextClass =
    (window as any).AudioContext ||
    (window as any).webkitAudioContext;

  if (!AudioContextClass) {
    return [];
  }

  // Decode at a low sample rate — we only need coarse amplitude peaks,
  // and this keeps memory use sane even for long (hour+) episodes.
  let context: AudioContext;
  try {
    context = new AudioContextClass({ sampleRate: 8000 });
  } catch {
    context = new AudioContextClass();
  }

  try {
    const arrayBuffer = await file.arrayBuffer();
    const audioBuffer = await context.decodeAudioData(arrayBuffer);
    const channelData = audioBuffer.getChannelData(0);

    const blockSize = Math.max(
      1,
      Math.floor(channelData.length / barCount)
    );

    const peaks: number[] = [];

    for (let i = 0; i < barCount; i++) {
      const start = i * blockSize;
      let sum = 0;
      let count = 0;

      for (
        let j = 0;
        j < blockSize && start + j < channelData.length;
        j++
      ) {
        sum += Math.abs(channelData[start + j]);
        count++;
      }

      peaks.push(count > 0 ? sum / count : 0);
    }

    const max = Math.max(...peaks, 0.0001);

    return peaks.map((value) =>
      Math.min(1, value / max)
    );
  } catch {
    // Undecodable / unsupported source — the card falls back to a
    // plain progress bar when no peaks are stored.
    return [];
  } finally {
    context.close().catch(() => {});
  }
}
