import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'out');

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const fullPath = path.join(dir, entry.name);
      return entry.isDirectory() ? walk(fullPath) : fullPath;
    }),
  );
  return files.flat();
}

function relativePrefix(htmlPath) {
  const routeDir = path.dirname(path.relative(outDir, htmlPath));
  if (routeDir === '.') return './';
  const depth = routeDir.split(path.sep).filter(Boolean).length;
  return '../'.repeat(depth);
}

function rewriteHtml(html, prefix) {
  const routes = ['women', 'men', 'kids', 'contact'];

  let nextHtml = html
    .replaceAll('href="./_next/', `href="${prefix}_next/`)
    .replaceAll('src="./_next/', `src="${prefix}_next/`)
    .replaceAll('href="/_next/', `href="${prefix}_next/`)
    .replaceAll('src="/_next/', `src="${prefix}_next/`)
    .replaceAll('href="/icon.svg', `href="${prefix}icon.svg`)
    .replaceAll('href="/"', `href="${prefix}"`);

  for (const route of routes) {
    nextHtml = nextHtml.replaceAll(`href="/${route}/"`, `href="${prefix}${route}/"`);
  }

  return nextHtml;
}

const htmlFiles = (await walk(outDir)).filter((file) => file.endsWith('.html'));

await Promise.all(
  htmlFiles.map(async (file) => {
    const html = await readFile(file, 'utf8');
    await writeFile(file, rewriteHtml(html, relativePrefix(file)));
  }),
);

console.log(`Rewrote portable paths in ${htmlFiles.length} exported HTML files.`);
