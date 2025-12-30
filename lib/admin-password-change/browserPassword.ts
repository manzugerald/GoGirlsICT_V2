// A browser-safe password generator using the Web Crypto API.
// Place this file at: lib/admin-password-change/browserPassword.ts

export function generateBrowserPassword(length = 12) {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const specials = '!@#$%^&*()-_=+[]{}|;:,.<>?/~`';
  const all = upper + lower + numbers + specials;

  const randIndex = (n: number) => {
    const arr = window.crypto.getRandomValues(new Uint32Array(1));
    return arr[0] % n;
  };

  let pwd = '';
  // ensure at least one char from each required class
  pwd += upper[randIndex(upper.length)];
  pwd += lower[randIndex(lower.length)];
  pwd += numbers[randIndex(numbers.length)];
  pwd += specials[randIndex(specials.length)];

  // fill the rest
  for (let i = pwd.length; i < length; i++) {
    pwd += all[randIndex(all.length)];
  }

  // shuffle using Fisher-Yates with WebCrypto randomness
  const arr = pwd.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    const j = window.crypto.getRandomValues(new Uint32Array(1))[0] % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr.join('');
}
