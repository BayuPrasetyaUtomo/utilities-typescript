import type { Video } from "@/types/index.ts";

const videos: Video[] = [
  {
    name: "Woman Using a Smartphone",
    source:
      "https://videos.pexels.com/video-files/8512972/8512972-uhd_2560_1440_30fps.mp4",
    dark: false,
    light: true,
    type: "application/octet-stream",
  },
    {
    name: "Aerial View of Forest Canopy at Sunset",
    source:
      "https://videos.pexels.com/video-files/28886533/12504647_2560_1440_30fps.mp4",
    dark: true,
    light: false,
    type: "application/octet-stream",
  },
];

export default videos;
