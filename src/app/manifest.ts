import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "씨네톡 - 키워드 하나로 완성되는 영화 리뷰 탐색",
    short_name: "씨네톡",
    description:
      "키워드로 간편하게 영화 리뷰를 작성하고, 원하는 영화를 빠르게 찾아볼 수 있는 영화 커뮤니티! 쉽고 빠른 검색으로 다양한 영화 리뷰를 만나보세요!",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/images/cinetalk_logo/PNG/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/cinetalk_logo/PNG/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
