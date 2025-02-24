import sharp from "sharp";
import convertToBuffer from "@/utilities/convertToBuffer.ts";

const getBrightness = async (file: File | Response) => {
  try {
    const buffer = await convertToBuffer(file);

    const image = sharp(buffer);

    const stats = await image.stats();

    // Calculate average brightness across all channels
    const brightness = stats.channels.reduce((sum, channel) => {
      return sum + channel.mean;
    }, 0) / stats.channels.length;

    return brightness;
  } catch (error) {
    console.error(error);
  }
};

export default getBrightness;
