// GitHub Pages' legacy build pipeline fails on paths containing "$" (used by
// Next.js's RSC prefetch payload files, e.g. .../__next.sluzby/$d$slug/__PAGE__.txt).
// These files only speed up client-side <Link> prefetching and aren't required
// for the static export to work, so we strip them after `next build --export`.
import { existsSync, readdirSync, rmSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = "out";

if (!existsSync(outDir)) {
  process.exit(0);
}

let removed = 0;

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const isMatch = entry.startsWith("__next") || entry.includes("$");
    if (isMatch) {
      rmSync(full, { recursive: true, force: true });
      removed++;
      continue;
    }
    if (statSync(full).isDirectory()) {
      walk(full);
    }
  }
}

walk(outDir);
console.log(`clean-gh-pages-artifacts: removed ${removed} path(s) containing "$" or "__next" prefix`);
