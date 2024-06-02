function BadgeTitle() {
  return (
    <>
      <div className="hidden items-center gap-1 Tablet:flex">
        <div className="flex flex-1 flex-col gap-1">
          <h2 className="Text-m-Bold Tablet:Text-l-Bold">내 뱃지</h2>
          <div className="flex items-center justify-between gap-2">
            <p className="text-Gray Text-s-Regular Tablet:Text-m-Medium">
              뱃지를 설정하면 닉네임 옆에 표시돼요.
            </p>
            <button
              type="button"
              className="p-2 Text-s-Medium Tablet:Text-m-Medium"
            >
              변경
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1 Tablet:hidden">
        <div className="flex flex-1 flex-col gap-1">
          <h2 className="Text-m-Bold Tablet:Text-l-Bold">내 뱃지</h2>
          <p className="text-Gray Text-s-Regular Tablet:Text-m-Medium">
            뱃지를 설정하면 닉네임 옆에 표시돼요.
          </p>
        </div>
        <div>
          <button
            type="button"
            className="p-2 Text-s-Medium Tablet:Text-m-Medium"
          >
            변경
          </button>
        </div>
      </div>
    </>
  );
}

export function BadgeItem() {
  return (
    <div className="flex h-[126px] flex-col items-center justify-center gap-3 rounded-xl badge-gradient Tablet:h-[162px] Tablet:gap-4">
      <div className="font-appleSDGothicNeo text-[32px]">👊</div>
      <div className="flex flex-col items-center gap-1">
        <p className="Text-s-Bold">액션가면</p>
        <div className="flex items-center gap-1">
          <span className="Text-xs-Regular">액션</span>
          <span className="text-Primary Text-xs-Bold">사용 중</span>
        </div>
      </div>
    </div>
  );
}

export default function Badge() {
  return (
    <section className="flex flex-col gap-4 p-5 Tablet:p-0">
      <BadgeTitle />
      <div className="grid grid-cols-3 gap-3 Tablet:grid-cols-4 Tablet:gap-5 Laptop:grid-cols-6 Laptop:gap-x-6 Laptop:gap-y-4">
        {Array(18)
          .fill("d")
          .map((_, i) => (
            <BadgeItem key={i} />
          ))}
      </div>
    </section>
  );
}
