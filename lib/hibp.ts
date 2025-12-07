import crypto from 'crypto';

/**
 * Check whether a plaintext password appears in the HaveIBeenPwned Pwned Passwords dataset
 * using the k-Anonymity API.
 *
 * Returns: { pwned: boolean, count: number } where count is occurrences if found (0 if not).
 *
 * Usage: const { pwned, count } = await isPwned('password123');
 *
 * Notes:
 * - Uses global fetch (available in Node 18+, Next.js). If running in older Node,
 *   install node-fetch and uncomment the import at top:
 *     // import fetch from 'node-fetch';
 */
export async function isPwned(password: string): Promise<{ pwned: boolean; count: number }> {
  const sha1 = crypto.createHash('sha1').update(password).digest('hex').toUpperCase();
  const prefix = sha1.slice(0, 5);
  const suffix = sha1.slice(5);

  const url = `https://api.pwnedpasswords.com/range/${prefix}`;

  const res = await fetch(url, { method: 'GET' });
  if (!res.ok) {
    // HIBP failure: choose policy. Here we return not pwned so client can continue.
    // You can change to throw if you prefer fail-closed behavior.
    return { pwned: false, count: 0 };
  }

  const text = await res.text();
  const lines = text.split('\n');
  for (const line of lines) {
    const [hashSuffix, countStr] = line.trim().split(':');
    if (!hashSuffix) continue;
    if (hashSuffix.toUpperCase() === suffix) {
      const count = parseInt(countStr ?? '0', 10) || 0;
      return { pwned: true, count };
    }
  }

  return { pwned: false, count: 0 };
}
