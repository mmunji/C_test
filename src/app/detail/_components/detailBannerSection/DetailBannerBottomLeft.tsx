import Image from "next/image";
import React from "react";

import { Star, TMDB } from "../../../../../public/icons";
import { movieInfo } from "./fakeData";

export default function DetailBannerBottomLeft() {
  return (
    <section className="mt-auto flex flex-col gap-1">
      <section className="flex items-center Laptop:gap-4">
        <h2 className="Text-xxxl-Bold text-Silver">웡카</h2>
        <div className="Text-m-Medium flex items-center justify-center rounded-[35px] border-[2px] border-White px-4 py-2">
          상영중
        </div>
      </section>

      <section className="flex items-center gap-6">
        <section className="flex items-center gap-1">
          <Image src={Star} alt="별점" />
          <p className="Text-xxl-Bold text-Primary">0.0</p>
        </section>

        <section className="flex gap-1">
          <Image src={TMDB} alt="TMDB" />
          <p className="Text-xxl-Bold text-Silver">0.0</p>
        </section>

        <section className="flex">
          {movieInfo.map((info, i) => (
            <p
              key={i}
              className={`Text-m-Medium group relative px-[10px] text-Silver ${i === 0 && "pl-0"} last:after:border-none`}
            >
              {info}
              {i !== movieInfo.length - 1 && (
                <span className="absolute right-0 top-1/2 h-3 w-[1px] translate-y-[-50%] transform bg-white after:content-['']" />
              )}
            </p>
          ))}
        </section>
      </section>
    </section>
  );
}
