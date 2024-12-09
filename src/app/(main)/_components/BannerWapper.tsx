import { movieAPIs } from "@/services/movie/movieAPIs";
import { delay } from "@/utils/fn";

import MainBanner from "./MainBanner";

export default async function BannerWapper() {
  const data = await movieAPIs.getMovieMainBanner();
  return (
    <div className="mx-5 Tablet:mx-6 Laptop:mx-[64px] Desktop:mx-0">
      <div className="mx-auto pt-2   Laptop:pt-9 Desktop:max-w-[1560px] ">
        <MainBanner data={data} />
      </div>
    </div>
  );
}
