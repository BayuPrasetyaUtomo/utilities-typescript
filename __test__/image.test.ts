import { assert, assertEquals, assertExists } from "jsr:@std/assert";

import getBrightness from "@/utilities/getBrightness.ts";
import getMimeType from "@/utilities/getMimeType.ts";
import validateMimeType from "@/utilities/validateMimeType.ts";
import images from "@/data/images.ts";
import convertToBuffer from "@/utilities/convertToBuffer.ts";
import { Buffer } from "node:buffer";

Deno.test({
  name: "convert remote image to buffer",
  fn: async () => {
    const response = await fetch(images[0].source);

    const buffer = await convertToBuffer(response);

    assert(buffer instanceof Buffer);
  },
});

Deno.test({
  name: "get image brightness value",
  fn: async () => {
    const response = await fetch(images[0].source);

    const brightness = await getBrightness(response);

    assertExists(brightness);
    assertEquals(typeof brightness === "number", true);
  },
});

Deno.test({
  name: "validate valid image mimetype",
  fn: async () => {
    const response = await fetch(images[0].source);

    const mimetype = getMimeType(response);

    // the mimetype should start with image
    const validImageMimeType = validateMimeType(mimetype);

    await response.body?.cancel();

    assertEquals(validImageMimeType, true);
  },
});

