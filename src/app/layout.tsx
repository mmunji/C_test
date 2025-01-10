import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import type { Metadata } from "next";

import Toast from "@/app/Toast";
import GoogleAnalytics from "@/components/googleanalytics/GoogleAnalytics";
import HeaderContainer from "@/components/header/HeaderContainer";
import ReactQueryProvier from "@/react-query/ReactQueryProvider";
import { pretendard } from "@/utils/fonts";
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_CLIENT_URL),
  title: "씨네톡 - 키워드 하나로 완성되는 영화 리뷰 탐색",
  description:
    "키워드로 간편하게 영화 리뷰를 작성하고, 원하는 영화를 빠르게 찾아볼 수 있는 영화 커뮤니티! 쉽고 빠른 검색으로 다양한 영화 리뷰를 만나보세요!",
  alternates: { canonical: "./" },

  verification: {
    google: "Uyr0KRU8qs3xU0rPHGx7ZUd-bDPlEdO1SvVUN-W4aIQ",
    other: {
      "naver-site-verification": "776fae7c2e074c64c9eec30e24427d088e336fca",
    },
  },
  openGraph: {
    images: [
      {
        url: "/images/og/Opengraph__Image.jpg",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "/images/og/Opengraph__Image.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="theme-color" content="#262626" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <meta
          name="viewport"
          content="initial-scale=1.0, user-scalable=no, maximum-scale=1, width=device-width"
        />
      </head>
      <body className={pretendard.variable}>
        <ReactQueryProvier>
          <HeaderContainer />
          {children}
          <div id="portal" />
          <Toast />
        </ReactQueryProvier>
        {process.env.REACT_APP_GA_TRACKING_ID ? (
          <GoogleAnalytics gaId={process.env.REACT_APP_GA_TRACKING_ID} />
        ) : null}
      </body>
    </html>
  );
}
