import { mkdir, rename, unlink } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");
const source = path.join(publicDir, "profile.png");
const outputWebp = path.join(publicDir, "profile.webp");
const outputPng = path.join(publicDir, "profile.png");

const MAX_WIDTH = 800;
const WEBP_QUALITY = 82;

const image = sharp(source);
const metadata = await image.metadata();
const width = metadata.width ?? MAX_WIDTH;
const resizeWidth = Math.min(width, MAX_WIDTH);

await image
  .clone()
  .resize(resizeWidth, undefined, { withoutEnlargement: true })
  .webp({ quality: WEBP_QUALITY })
  .toFile(outputWebp);

await image
  .clone()
  .resize(resizeWidth, undefined, { withoutEnlargement: true })
  .png({ compressionLevel: 9, palette: true })
  .toFile(`${outputPng}.tmp`);

await unlink(outputPng);
await mkdir(publicDir, { recursive: true });
await rename(`${outputPng}.tmp`, outputPng);

const webpStats = await sharp(outputWebp).metadata();
const pngStats = await sharp(outputPng).metadata();

console.log(
  `Optimized profile: webp ${webpStats.width}x${webpStats.height}, png ${pngStats.width}x${pngStats.height}`,
);
