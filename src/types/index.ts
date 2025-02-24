interface Image {
  name?: string;
  source: string;
  dark?: boolean;
  light?: boolean;
  type?: string;
  // TODO: convert to human readable format
  size?: number | string; // in bytes
}

interface Video extends Image {}

export type { Image, Video };
