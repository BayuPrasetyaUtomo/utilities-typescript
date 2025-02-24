import { Buffer } from "node:buffer";

const convertToBuffer = async (
  file: File | Response,
): Promise<Buffer | undefined> => {
  try {
    // Convert the file to an ArrayBuffer
    const arrayBuffer = await file.arrayBuffer();

    // Convert ArrayBuffer to Buffer
    return Buffer.from(arrayBuffer);
  } catch (error) {
    console.error(error);
  }
};

export default convertToBuffer;
