import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    // Prisma's generated client lives under lib/generated/prisma (a custom
    // output path, not the default node_modules/.prisma/client ESLint
    // already knows to skip) — it's vendor code, not ours to lint.
    // .claude/worktrees holds separate git worktrees (other branches/agent
    // sessions) checked out inside this repo — a plain `eslint .` sweep
    // would otherwise recurse into and double-lint those separate checkouts.
    ignores: ["lib/generated/**", ".claude/worktrees/**", ".next/**"],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
