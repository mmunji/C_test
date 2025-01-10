import useMessage from "@/app/(main)/_hooks/useMessage";
import SpeechBubble from "@/components/speechBubble/SpeechBubble";

import MoviePosts from "./MoviePosts";

interface WatchMovieType {
  data: WatchMovie[] | null;
}

export default async function WatchedMoive({ data }: WatchMovieType) {
  const { message } = await useMessage("watch");

  return (
    <div className="relative flex flex-col gap-4 Tablet:gap-5">
      <div className="flex flex-col gap-1 text-center  Laptop:flex-row Laptop:gap-5 Laptop:text-left">
        <h2 className=" text-Silver Text-l-Bold  Laptop:Text-xxl-Bold">
          혹시 이 영화 보셨나요?
        </h2>
        <div className="hidden  Laptop:block">
          <SpeechBubble id={"WatchedMovie"} dir="left">
            {message}
          </SpeechBubble>
        </div>
        <span className=" text-L_Gray Text-m-Regular Laptop:hidden  ">
          간편하게 영화를 평가해보세요!
        </span>
      </div>
      {data && <MoviePosts WatchMovieData={data} />}
    </div>
  );
}
