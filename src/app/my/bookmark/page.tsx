import { Suspense } from "react";

import { BookmarkSkeleton } from "@/app/my/_components/skeletons/Bookmark";
import BookmarkContainer from "@/app/my/bookmark/Container";

export default async function Page() {
  return (
    <div className="flex flex-col gap-3 px-5 Tablet:px-0">
      <Suspense fallback={<BookmarkSkeleton />}>
        <BookmarkContainer />
      </Suspense>
    </div>
  );
}
