"use client";

import { Palette } from "color-thief-react";

import hexToRGBA from "../../../../utils/hexToRGBA";
import { usePaletteStore } from "../../_stores/usePaletteStore";
import DetailBannerBottom from "./DetailBannerBottom";

interface DetailBannerSectionProps {
  movieDetailData: MovieDetailData;
}

export default function DetailBannerSection({
  movieDetailData,
}: DetailBannerSectionProps) {
  const { gradientStyle, setGradientStyle } = usePaletteStore();
  const posterImage = movieDetailData.posterImg;
  const backgroundImage = movieDetailData.backGroundImg;

  return (
    <section className="relative mt-[-64px] h-[380px] w-full Tablet:h-[420zyx] Laptop:mt-[-80px] Laptop:h-[640px] Desktop:h-[816px]">
      <div
        className="flex h-full w-full bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(38, 38, 38, 0.00) 0%, #262626 100%), url('${backgroundImage}')`,
        }}
      >
        <DetailBannerBottom movieDetailData={movieDetailData} />
      </div>

      <Palette
        src={posterImage}
        crossOrigin="anonymous"
        format="hex"
        colorCount={2}
      >
        {({ data }) => {
          if (data && data.length >= 2) {
            const newGradientStyle = `linear-gradient(135deg, ${hexToRGBA(data[0], 0.5)}, ${hexToRGBA(data[1], 0.5)})`;

            if (gradientStyle !== newGradientStyle) {
              setTimeout(() => {
                setGradientStyle(newGradientStyle);
              }, 0);
            }

            return null;
          }
          return null;
        }}
      </Palette>
    </section>
  );
}
