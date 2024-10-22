import { movieAPIs } from "@/services/movie/movieAPIs";
import { delay } from "@/utils/fn";

import Labtop_Posts from "./Browser/Labtop_Posts";
import Mobile_Posts from "./Browser/Mobile_Posts";
import Tablet_Posts from "./Browser/Tablet_Posts";
export default async function MoviePosts() {
  await delay(15000000);
  const data = await movieAPIs.getWatchMovie();

  return (
    <div>
      {/* Mobile */}
      <Mobile_Posts MovieWatchMovies={data} />
      {/* Tablet */}
      <Tablet_Posts MovieWatchMovies={data} />

      {/* Laptop , Desktop */}
      <Labtop_Posts MovieWatchMovies={data} />
    </div>
  );
}
