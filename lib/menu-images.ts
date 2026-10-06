import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import type { MenuImageInfo } from "@/data/menu";

/**
 * Looks for the original menu images in /public/menu.
 *
 * Expected files:
 *   public/menu/food-menu.png
 *   public/menu/beverage-menu.png
 *
 * If a file is missing the menu still works — the "View Menu Images"
 * section simply stays hidden. Add the files and rebuild/restart the
 * dev server to show them.
 */

const FALLBACK_SIZE = { width: 1200, height: 1690 };

function readPngSize(buffer: Buffer) {
  // 8-byte signature + IHDR length/type, then width/height
  if (buffer.length < 24) return null;
  if (buffer.readUInt32BE(0) !== 0x89504e47) return null; // "\x89PNG"
  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  };
}

function readJpegSize(buffer: Buffer) {
  if (buffer.length < 4) return null;
  if (buffer.readUInt16BE(0) !== 0xffd8) return null; // SOI

  let offset = 2;
  while (offset + 9 < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }
    const marker = buffer[offset + 1];
    // SOF0–SOF15 excluding DHT (C4), JPG (C8), DAC (CC)
    if (
      marker >= 0xc0 &&
      marker <= 0xcf &&
      marker !== 0xc4 &&
      marker !== 0xc8 &&
      marker !== 0xcc
    ) {
      return {
        height: buffer.readUInt16BE(offset + 5),
        width: buffer.readUInt16BE(offset + 7),
      };
    }
    if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
      offset += 2;
      continue;
    }
    const length = buffer.readUInt16BE(offset + 2);
    offset += 2 + length;
  }
  return null;
}

function resolveImage(fileName: string, alt: string): MenuImageInfo | null {
  const filePath = path.join(process.cwd(), "public", "menu", fileName);

  try {
    const buffer = fs.readFileSync(filePath);
    const size = readPngSize(buffer) ?? readJpegSize(buffer);
    // The URL changes when an image is replaced, invalidating browser and
    // Next Image optimizer caches that would otherwise keep the old file.
    const version = createHash("sha1").update(buffer).digest("hex").slice(0, 12);

    return {
      src: `/menu/${fileName}?v=${version}`,
      width: size?.width ?? FALLBACK_SIZE.width,
      height: size?.height ?? FALLBACK_SIZE.height,
      alt,
    };
  } catch {
    return null;
  }
}

export interface MenuImages {
  food: MenuImageInfo | null;
  beverage: MenuImageInfo | null;
}

export function getMenuImages(): MenuImages {
  return {
    food: resolveImage("food-menu.png", "Original food menu from Legends Microbrewery"),
    beverage: resolveImage(
      "beverage-menu.png",
      "Original beverage menu from Legends Microbrewery"
    ),
  };
}
