export default function NoTalk() {
  return (
    <section className="mb-10 flex h-[320px] items-center justify-center Tablet:h-fit Tablet:pt-5">
      <div className="flex flex-col items-center gap-5 Tablet:gap-9">
        <section>
          <p className="text-center text-Gray Text-m-Bold Tablet:Text-l-Bold">
            작성된 톡이 없어요.
          </p>
          <p className="text-center text-Gray Text-m-Bold Tablet:Text-l-Bold">
            첫번째 톡의 주인공이 되어보세요!
          </p>
        </section>
        <button className="flex h-[29px] w-[86px] items-center justify-center rounded-lg bg-Primary text-Silver Text-s-Medium Tablet:h-12 Tablet:w-[180px] Tablet:Text-m-Medium">
          톡 작성하기
        </button>
      </div>
    </section>
  );
}
