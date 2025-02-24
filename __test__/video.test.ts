import getMimeType from "@/utilities/getMimeType.ts";
import validateMimeType from "@/utilities/validateMimeType.ts";
import videos from "@/data/videos.ts";
import { assertEquals } from "jsr:@std/assert";

Deno.test({
  name: "validate video mimetype",
  fn: async () => {
    const response = await fetch(videos[0].source);

    const mimetype = getMimeType(response);

    // it should return false
    const validImageMimeType = validateMimeType(mimetype);

    assertEquals(validImageMimeType, false);
    
    await response.body?.cancel();
  },
});
