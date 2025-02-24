// TODO: make it more robust
const validateMimeType = (
  mimetype: string,
  allowedMimeType = "image",
): boolean => {
  if (mimetype.startsWith(allowedMimeType)) return true;

  return false;
};

export default validateMimeType;