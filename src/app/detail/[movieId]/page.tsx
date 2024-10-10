import React, { Suspense } from "react";

import DetailPage from "../_components/DetailPage";
import DetailPageSkeleton from "../_components/skeleton/DetailPageSkeleton";

function page({ params }: { params: { movieId: string } }) {
  return (
    <Suspense fallback={<DetailPageSkeleton />}>
      <DetailPage params={params} />
    </Suspense>
  );
}

export default page;
