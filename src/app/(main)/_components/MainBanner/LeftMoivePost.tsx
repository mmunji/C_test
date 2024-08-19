import PostCard from "../PostCard";

interface MovieBannerTypes {
  PostImg: string;
  keyword: string;
  MovieName: string;
  Rate: number;
}

export default function LeftMovePost({
  PostImg,
  keyword,
  MovieName,
  Rate,
}: MovieBannerTypes) {
  {
    /*
  1. 임시로 모바일 텍스트
  2. 나중에 테블릿 ,렙탑, 데탑 사즈로
*/
  }
  return (
    <div className="flex  flex-col gap-9 Tablet:justify-end">
      <div className="hidden Laptop:block ">
        <PostCard background={PostImg} />
      </div>
      <div className="flex flex-col gap-[181px]  Tablet:gap-3  Laptop:justify-between   Laptop:gap-5  Desktop:gap-5 ">
        <div className="flex flex-col gap-1  Laptop:flex-row Laptop:gap-4 Desktop:gap-4">
          <span className="Text-m-Bold Laptop:hidden Desktop:hidden">
            실시간 핫한 톡
          </span>
          <div className="flex items-center gap-4">
            <h1 className="line-clamp-1 Text-xl-Bold Laptop:Text-xxxl-Bold ">
              {MovieName}
            </h1>
          </div>
        </div>
        <div>
          <ul className="flex gap-9   Tablet:gap-9 Laptop:gap-12">
            <li className="flex flex-col gap-2  ">
              <h4 className="Laptop:Text-s-Mediuim Desktop:Text-s-Mediuim text-center Text-xs-Regular">
                평점
              </h4>
              <h1 className="Laptop:Text-I-Bold text-Primary  Text-s-Bold Laptop:Text-l-Bold">
                {Rate}
              </h1>
            </li>
            <li className="flex flex-col gap-2 ">
              <h4 className="text-center Text-xs-Regular ">Best 키워드</h4>
              <h1 className="text-center Text-m-Bold Laptop:Text-l-Bold">
                {keyword}
              </h1>
            </li>
            {/* <li className="flex flex-col gap-[8px]">
              <h4 className="text-center Text-xs-Regular ">누적 관객수</h4>
              <h1 className="Text-s-Bold Desktop:Text-l-Bold">0.0만명</h1>
            </li> */}
            <li className="flex flex-col gap-2">
              <h4 className="text-center Text-xs-Regular">장르</h4>
              <h1 className="text-center Text-m-Bold Laptop:Text-l-Bold">
                판타지
              </h1>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
