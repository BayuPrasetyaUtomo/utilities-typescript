import getBrightness from "@/utilities/getBrightness.ts";

const getIsDarkImage = async (
  file: File | Response,
  threshold = 100,
): Promise<boolean> => {
  const brightness = await getBrightness(file);

  if (brightness) {
    return brightness < threshold;
  }

  return false;
};

export default getIsDarkImage;
