import KeyWords from "./KeyWords";
export default function RecentKeyword() {
  return (
    <div className="flex flex-col gap-[20px]">
      <h1 className="Desktop: Text-xxl-Bold Text-l-Bold Laptop:Text-xxl-Bold">
        지금 많이 언급되는 키워드
      </h1>
      <div className="flex flex-col gap-[24px] Laptop:flex-row Desktop:flex-row">
        <div className="Text-S-Bold flex gap-3 Laptop:flex-col Laptop:gap-5 Desktop:flex-col Desktop:gap-5">
          <div className="Text-S-Bold  rounded-xl bg-D1_Gray  px-5 py-2 text-center Laptop:w-[178px] Desktop:w-[240px]">
            키워드1
          </div>
          <div className="Text-S-Bold  rounded-xl bg-D1_Gray px-5 py-2 text-center Laptop:w-[178px] Desktop:w-[240px]">
            키워드2
          </div>
          <div className="Text-S-Bold  rounded-xl bg-D1_Gray px-5 py-2 text-center Laptop:w-[178px] Desktop:w-[240px]">
            키워드3
          </div>
        </div>
        <KeyWords />
      </div>
    </div>
  );
}
