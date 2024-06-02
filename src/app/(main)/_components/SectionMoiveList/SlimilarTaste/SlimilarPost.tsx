import PostCard from "../../PostCard";
import SlimilarMobilePost from "./SlimilarMobilePost";
import SlimilarUser from "./SlimilarUser";
export default function SlimilarPost() {
  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex flex-col gap-5 rounded-2xl bg-Black px-5 py-5 Laptop:hidden Desktop:hidden">
        <SlimilarMobilePost />
      </div>
      <div className=" hidden justify-between Laptop:flex Desktop:flex">
        <div className="flex gap-5 rounded-xl border-2 px-[12px]  py-[24px] Desktop:hidden">
          {Array(3)
            .fill(0)
            .map((_, index) => {
              return <SlimilarUser key={index} />;
            })}
        </div>
        <div className="gap-6 rounded-xl    py-[24px]   Laptop:hidden Desktop:flex">
          <SlimilarUser />
          <SlimilarUser />
          <SlimilarUser />
          <SlimilarUser />
        </div>
      </div>

      <div className="hidden flex-col gap-[16px] rounded-xl bg-D1_Gray p-[24px] text-white Laptop:flex Desktop:flex">
        <h1>닉네임님의 최근 톡 000개</h1>
        <div className="flex gap-[24px]">
          {Array(5)
            .fill(0)
            .map((_, index) => {
              return <PostCard key={index} />;
            })}
        </div>
      </div>
    </div>
  );
}
