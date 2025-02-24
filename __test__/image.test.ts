import { assert, assertEquals, assertExists } from "jsr:@std/assert";

import getBrightness from "@/utilities/getBrightness.ts";
import getMimeType from "@/utilities/getMimeType.ts";
import validateMimeType from "@/utilities/validateMimeType.ts";
import images from "@/data/images.ts";
import videos from "@/data/videos.ts";

Deno.test({
  name: "valid brightness",
  fn: async () => {
    const response = await fetch(images[0].source);

    const brightness = await getBrightness(response);

    assertEquals(typeof brightness === "number", true);
  },
});

Deno.test({
  name: "validate valid image mimetype",
  fn: async () => {
    const response = await fetch(images[0].source);

    const mimetype = await getMimeType(response);

    const validImageMimeType = validateMimeType(mimetype);

    await response.body?.cancel();

    assertEquals(validImageMimeType, true);
  },
});

Deno.test({
  name: "validate video mimetype",
  fn: async () => {
    const response = await fetch(videos[0].source);

    const mimetype = await getMimeType(response);

    const validImageMimeType = validateMimeType(mimetype);

    await response.body?.cancel();

    assertEquals(validImageMimeType, false);
  },
});
