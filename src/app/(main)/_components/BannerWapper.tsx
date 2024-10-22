import { movieAPIs } from "@/services/movie/movieAPIs";
import { delay } from "@/utils/fn";

import MainBanner from "./MainBanner";

export default async function BannerWapper() {
  await delay(155555000);
  const data = await movieAPIs.getMovieMainBanner();
  return (
    <div className="w-auto px-5 pt-2 Tablet:px-6 Laptop:px-[68px] Laptop:pt-9 Desktop:px-[180px]">
      <MainBanner data={data} />
    </div>
  );
}
