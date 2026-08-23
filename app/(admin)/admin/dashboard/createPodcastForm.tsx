"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { computeWaveformPeaks } from "@/lib/audioWaveform";
import "@/assets/styles/tiptap-editor.css";

const EditorClient = dynamic(() => import("@/components/editor/editor-client"), {
  ssr: false,
});

const publishOptions = ["draft", "published"] as const;
type PublishStatus = (typeof publishOptions)[number];
type Mode = "create" | "edit";

// Tiptap JSON doc for an empty description, used as the editor's initial content.
const EMPTY_DESCRIPTION: object = { type: "doc", content: [{ type: "paragraph" }] };

interface PodcastData {
  id?: string;
  title: string;
  description: object;
  image?: string | null;
  audioUrl?: string;
  waveform?: number[];
  publishedAt?: string;
  publishStatus: PublishStatus;
  accessCount?: number;
}

interface CreatePodcastFormProps {
  mode?: Mode;
  initialValues?: PodcastData & { id?: string | number };
  onSuccess?: () => void;
  onCancel?: () => void;
}

async function uploadFile(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("/api/podcasts/upload", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("File upload failed");
  }

  const { path } = await res.json();
  return path as string;
}

function toDateInputValue(value?: string | Date | null) {
  if (!value) return new Date().toISOString().slice(0, 10);
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return new Date().toISOString().slice(0, 10);
  return d.toISOString().slice(0, 10);
}

export default function CreatePodcastForm({
  mode,
  initialValues,
  onSuccess,
  onCancel,
}: CreatePodcastFormProps) {
  const router = useRouter();
  const resolvedMode: Mode = mode ?? (initialValues?.id ? "edit" : "create");

  const [form, setForm] = useState({
    title: initialValues?.title || "",
    description: initialValues?.description || EMPTY_DESCRIPTION,
    publishedAt: toDateInputValue(initialValues?.publishedAt),
    publishStatus: (initialValues?.publishStatus as PublishStatus) || "draft",
  });

  const [existingImage, setExistingImage] = useState<string | null>(
    initialValues?.image || null
  );
  const [existingAudio, setExistingAudio] = useState<string | null>(
    initialValues?.audioUrl || null
  );

  const [existingWaveform, setExistingWaveform] = useState<number[]>(
    initialValues?.waveform || []
  );

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [waveform, setWaveform] = useState<number[]>([]);
  const [analyzingAudio, setAnalyzingAudio] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (resolvedMode === "edit" && initialValues) {
      setForm({
        title: initialValues.title || "",
        description: initialValues.description || EMPTY_DESCRIPTION,
        publishedAt: toDateInputValue(initialValues.publishedAt),
        publishStatus: (initialValues.publishStatus as PublishStatus) || "draft",
      });
      setExistingImage(initialValues.image || null);
      setExistingAudio(initialValues.audioUrl || null);
      setExistingWaveform(initialValues.waveform || []);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resolvedMode, initialValues?.id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditorChange = (json: object) => {
    setForm((prev) => ({ ...prev, description: json }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleAudioChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setAudioFile(file);
    setWaveform([]);
    setAnalyzingAudio(true);

    try {
      const peaks = await computeWaveformPeaks(file);
      setWaveform(peaks);
    } finally {
      setAnalyzingAudio(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!existingAudio && !audioFile) {
      alert("Please attach an MP3 audio file for this podcast.");
      return;
    }

    setLoading(true);

    try {
      const imagePath = imageFile ? await uploadFile(imageFile) : existingImage;
      const audioPath = audioFile ? await uploadFile(audioFile) : existingAudio;

      const payload = {
        title: form.title.trim(),
        description: form.description,
        image: imagePath || null,
        audioUrl: audioPath,
        waveform: audioFile ? waveform : existingWaveform,
        publishedAt: new Date(form.publishedAt).toISOString(),
        publishStatus: form.publishStatus,
        accessCount: initialValues?.accessCount || 0,
      };

      let res;
      if (resolvedMode === "edit" && initialValues?.id) {
        res = await fetch(`/api/podcasts/${initialValues.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        res = await fetch("/api/podcasts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        const errorMessage =
          errorData?.error ||
          (resolvedMode === "edit" ? "Failed to update podcast" : "Failed to create podcast");
        throw new Error(errorMessage);
      }

      if (onSuccess) {
        onSuccess();
      } else {
        router.refresh();
        router.push("/admin");
      }
    } catch (err) {
      console.error("Error saving podcast:", err);
      alert(
        `There was an error ${resolvedMode === "edit" ? "updating" : "creating"} the podcast. Please try again.`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto space-y-6 p-6 bg-background rounded-xl shadow"
    >
      <h2 className="font-semibold text-xl mb-4">
        {resolvedMode === "edit" ? "Edit Podcast" : "Create New Podcast"}
      </h2>

      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input id="title" name="title" value={form.title} onChange={handleChange} required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <EditorClient
          key={initialValues?.id ?? "new-podcast"}
          content={form.description}
          onChange={handleEditorChange}
          showLinkUnlink
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="publishedAt">Date</Label>
        <Input
          id="publishedAt"
          name="publishedAt"
          type="date"
          value={form.publishedAt}
          onChange={handleChange}
          required
        />
      </div>

      {/* Existing illustration image (for edit) */}
      {existingImage && (
        <div className="space-y-2">
          <Label>Current Illustration</Label>
          <div className="flex items-center gap-3">
            <img
              src={existingImage}
              alt="Podcast illustration"
              className="h-16 w-16 rounded-lg object-cover border"
            />
            <Button
              type="button"
              size="sm"
              variant="destructive"
              className="text-xs"
              onClick={() => setExistingImage(null)}
            >
              Remove
            </Button>
          </div>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="image">Illustration Image (PNG, JPG, JPEG)</Label>
        <Input
          id="image"
          name="image"
          type="file"
          accept=".png,.jpg,.jpeg"
          onChange={handleImageChange}
        />
        <div className="text-xs text-muted-foreground">{imageFile?.name}</div>
      </div>

      {/* Existing audio (for edit) */}
      {existingAudio && (
        <div className="space-y-2">
          <Label>Current Audio</Label>
          <div className="flex items-center gap-2">
            <audio controls src={existingAudio} className="h-9 max-w-full" />
            <Button
              type="button"
              size="sm"
              variant="destructive"
              className="text-xs"
              onClick={() => setExistingAudio(null)}
            >
              Remove
            </Button>
          </div>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="audio">Audio File (MP3)</Label>
        <Input id="audio" name="audio" type="file" accept=".mp3" onChange={handleAudioChange} />
        <div className="text-xs text-muted-foreground">
          {analyzingAudio
            ? "Analyzing waveform..."
            : audioFile
            ? `${audioFile.name}${waveform.length ? " — waveform ready" : ""}`
            : null}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="publishStatus">Publish Status</Label>
        <select
          id="publishStatus"
          name="publishStatus"
          value={form.publishStatus}
          onChange={handleChange}
          className="w-full border border-input rounded-md p-2 text-sm bg-background text-foreground"
        >
          {publishOptions.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-3">
        <Button
          type="submit"
          disabled={loading || analyzingAudio}
          className="flex-1 bg-[#9f004d] hover:bg-[#7c003c] text-white"
        >
          {analyzingAudio
            ? "Analyzing waveform..."
            : loading
            ? resolvedMode === "edit"
              ? "Updating..."
              : "Creating..."
            : resolvedMode === "edit"
            ? "Update Podcast"
            : "Create Podcast"}
        </Button>
        {onCancel && (
          <Button
            type="button"
            variant="outline"
            className="flex-1 border-[#9f004d] text-[#9f004d] hover:bg-[#f5e3ec]"
            onClick={onCancel}
            disabled={loading || analyzingAudio}
          >
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
}
