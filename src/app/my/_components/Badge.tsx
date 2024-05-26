function BadgeItem() {
  return (
    <div className="flex flex-col items-center gap-5 rounded-xl py-5 badge-gradient">
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
      <div className="flex items-center gap-1">
        <div className="flex flex-1 flex-col gap-1">
          <h2 className="Text-m-Bold">내 뱃지</h2>
          <p className="text-Gray Text-s-Regular">
            뱃지를 설정하면 닉네임 옆에 표시돼요.
          </p>
        </div>
        <div>
          <button type="button" className="p-2 Text-s-Medium">
            변경
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {Array(60)
          .fill("d")
          .map((badge, i) => (
            <BadgeItem key={badge + i} />
          ))}
      </div>
    </section>
  );
}
