import localFont from "next/font/local";

export const pretendard = localFont({
  src: [
    { path: "../../public/fonts/Pretendard-Bold.subset.woff2", weight: "700" },
    {
      path: "../../public/fonts/Pretendard-Medium.subset.woff2",
      weight: "500",
    },
    {
      path: "../../public/fonts/Pretendard-Regular.subset.woff2",
      weight: "400",
    },
  ],
  // src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
});
