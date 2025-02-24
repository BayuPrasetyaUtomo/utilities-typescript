const getMimeType = (file: File | Response): string => {
  let mimetype = "";
  try {
    if (file instanceof File) {
      mimetype = file.type;
    } else {
      mimetype = file.headers.get("Content-Type") ?? "";
    }
  } catch (error) {
    console.error(error);
  }
  return mimetype;
};

export default getMimeType;
