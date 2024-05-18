import PostCard from "../PostCard";

export default function LeftMovePost() {
  return (
    <div className="flex  flex-col gap-9 border-2">
      <PostCard />
      <div className="flex flex-col gap-5">
        <div className="flex gap-4">
          <h1 className=" text-3xl font-Bold">윙카</h1>
          <div className="font-regular flex items-center justify-center rounded-[35px] border-[1px] px-[12px]  py-[4px]">
            상영중
          </div>
        </div>
        <div>
          <ul className="flex gap-[48px]">
            <li className="flex flex-col gap-[8px]">
              <h4 className="text-center text-xs">평점</h4>
              <h1 className=" text-md font-Bold text-Primary">0.0</h1>
            </li>
            <li className="flex flex-col gap-[8px]">
              <h4 className="text-center text-xs">Best키워드</h4>
              <h1 className="text-md">초코릿향</h1>
            </li>
            <li className="flex flex-col gap-[8px]">
              <h4 className="text-center text-xs ">누적 관객수</h4>
              <h1 className="text-md">0.0만명</h1>
            </li>
            <li className="flex flex-col gap-[8px]">
              <h4 className="text-center text-xs">장르</h4>
              <h1 className="text-md">0.0판타지</h1>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
