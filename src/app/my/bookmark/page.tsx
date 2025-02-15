import { Suspense } from "react";

import { BookmarkSkeleton } from "@/app/my/_components/skeletons/Bookmark";
import BookmarkList from "@/app/my/bookmark/List";
import { myAPIs } from "@/services/my/myAPIs";

export default function Page() {
  const movies = myAPIs.getBookmark();
  return (
    <div className="flex flex-col gap-3 px-5 Tablet:px-0">
      <Suspense fallback={<BookmarkSkeleton />}>
        <BookmarkList promiseMovies={movies} />
      </Suspense>
    </div>
  );
}
