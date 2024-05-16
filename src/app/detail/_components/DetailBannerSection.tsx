import React from "react";

function DetailBannerSection() {
  return (
    <section className="mt-[-64px] h-[300px] w-full Laptop:mt-[-80px] Laptop:h-[640px] Desktop:h-[816px]">
      <div
        className=" h-full w-full bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(38, 38, 38, 0.00) 0%, #262626 100%), url('/images/detail-banner-example.png')",
        }}
      ></div>
    </section>
  );
}

export default DetailBannerSection;
