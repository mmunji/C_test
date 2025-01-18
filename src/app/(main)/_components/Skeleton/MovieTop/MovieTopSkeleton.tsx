"use client";

import useDevice from "@/hooks/useDevice";

import PostCardSkeleton from "../PostCardSkeleton";
import DesktopMovieTop from "./DesktopMovieTop";
import MobileMovieTop from "./MobileMovieTop";
import TabletMovieTop from "./TabletMovieTop";

export default function MovieTopSkeleton() {
  return (
    <div>
      <div className="flex flex-col gap-4  ">
        <h2 className="Text-l-Bold Laptop:Text-xxl-Bold">영화 톡 TOP 10</h2>
        <div className="flex w-full gap-2 overflow-hidden Tablet:gap-0">
          <MobileMovieTop />
          <MobileMovieTop />
          <TabletMovieTop />
          <DesktopMovieTop />
        </div>
      </div>
    </div>
  );
}
