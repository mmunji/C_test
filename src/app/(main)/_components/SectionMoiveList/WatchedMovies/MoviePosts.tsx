import Laptop_Posts from "./Browser/Laptop_Posts";
import Mobile_Posts from "./Browser/Mobile_Posts";
import Tablet_Posts from "./Browser/Tablet_Posts";
interface WatchMovieDataType {
  WatchMovieData: WatchMovie[];
}
export default function MoviePosts({ WatchMovieData }: WatchMovieDataType) {
  return (
    <div>
      {/* Mobile */}
      <Mobile_Posts MovieWatchMovies={WatchMovieData} />
      {/* Tablet */}
      <Tablet_Posts MovieWatchMovies={WatchMovieData} />
      {/* Laptop, Desktop */}
      <Laptop_Posts MovieWatchMovies={WatchMovieData} />
    </div>
  );
}
