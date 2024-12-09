import { Suspense } from "react";

import Footer from "../../components/footer/Footer";
import BannerWapper from "./_components/BannerWapper";
import Banner from "./_components/MainSkeleton/Skeleton";
import SectionMoiveList from "./_components/SectionMoiveList";
export default function Main() {
  return (
    <div className="bg-BG">
      <div>
        <Suspense fallback={<Banner />}>
          <BannerWapper />
        </Suspense>
      </div>
      <SectionMoiveList />
      <Footer />
    </div>
  );
}
