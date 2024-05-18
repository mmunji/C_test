export default function RecentKeyword() {
  return (
    <div className="flex flex-col gap-[20px]">
      <h1 className="text-2xl  font-Bold">지금 많이 언급되는 키워드</h1>
      <div className="flex  gap-[24px]">
        <div className="flex flex-col gap-[24px]">
          <div className="w-[240px] rounded-xl  bg-D1_Gray py-[8px] text-center">
            키워드01
          </div>
          <div className="w-[240px]   py-[8px] text-center">키워드02</div>
          <div className="w-[240px] py-[8px] text-center">키워드03</div>
          <div className="w-[240px]  py-[8px] text-center">키워드04</div>
          <div className="w-[240px] py-[8px]  text-center">키워드05</div>
        </div>
        <div className="grid grid-cols-5 gap-[24px]">
          <div className="h-[157px] w-[240px] rounded-xl bg-D1_Gray"></div>
          <div className="h-[157px] w-[240px] rounded-xl bg-D1_Gray"></div>
          <div className="h-[157px] w-[240px] rounded-xl bg-D1_Gray"></div>
          <div className="h-[157px] w-[240px] rounded-xl bg-D1_Gray"></div>
          <div className="h-[157px] w-[240px] rounded-xl bg-D1_Gray"></div>
          <div className="h-[157px] w-[240px] rounded-xl bg-D1_Gray"></div>
          <div className="h-[157px] w-[240px] rounded-xl bg-D1_Gray"></div>
          <div className="h-[157px] w-[240px] rounded-xl bg-D1_Gray"></div>
          <div className="h-[157px] w-[240px] rounded-xl bg-D1_Gray"></div>
          <div className="h-[157px] w-[240px] rounded-xl bg-D1_Gray"></div>
        </div>
      </div>
    </div>
  );
}
