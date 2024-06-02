"use client";

import { Palette } from "color-thief-react";

import hexToRGBA from "../../../../utils/hexToRGBA";
import { usePaletteStore } from "../../_stores/usePaletteStore";
import DetailBannerBottom from "./DetailBannerBottom";

export default function DetailBannerSection() {
  const { gradientStyle, setGradientStyle } = usePaletteStore();

  return (
    <section className="relative mt-[-64px] h-[380px] w-full Tablet:h-[420zyx] Laptop:mt-[-80px] Laptop:h-[640px] Desktop:h-[816px]">
      <div
        className="flex h-full w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(38, 38, 38, 0.00) 0%, #262626 100%), url('/images/detail/detail-banner-example.png')",
        }}
      >
        <DetailBannerBottom />
      </div>

      <Palette
        src="/images/detail/detail-banner-example.png"
        crossOrigin="anonymous"
        format="hex"
        colorCount={2}
      >
        {({ data }) => {
          if (data && data.length >= 2) {
            const newGradientStyle = `linear-gradient(135deg, ${hexToRGBA(data[0], 0.5)}, ${hexToRGBA(data[1], 0.5)})`;

            if (gradientStyle !== newGradientStyle) {
              setGradientStyle(newGradientStyle);
            }

            return null;
          }
          return null;
        }}
      </Palette>
    </section>
  );
}
