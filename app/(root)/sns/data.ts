export const SNS_TYPES = [
  'sns',
  'news',
  'articles',
  'gallery',
] as const;

export type SnsType =
  (typeof SNS_TYPES)[number];

export function normalizeSnsType(
  value?: string | string[]
): SnsType {
  const candidate = Array.isArray(value)
    ? value[0]
    : value;

  return SNS_TYPES.includes(
    candidate as SnsType
  )
    ? (candidate as SnsType)
    : 'sns';
}

export const socialLinks = {
  facebook:
    'https://facebook.com/GoGirlsICTInitiative',

  youtube:
    'https://youtube.com/@GoGirlsICT',
} as const;