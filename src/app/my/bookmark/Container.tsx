import BookmarkList from "@/app/my/bookmark/List";
import { myAPIs } from "@/services/my/myAPIs";

export default async function BookmarkContainer() {
  const movies = await myAPIs.getBookmark();

  return <BookmarkList movies={movies} />;
}
