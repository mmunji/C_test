export default function Footer() {
  return (
    <div className="flex flex-col gap-[52px] bg-Black px-[180px] py-[90px] text-white">
      <div className="flex flex-col items-center gap-[24px]">
        <h1 className="text-xl font-Bold">
          지금까지 총 <span className="text-Primary">600</span>개의 톡이
          쌓였어요!
        </h1>
        <div className="flex gap-[13px]">
          <input
            placeholder="씨네톡의 개선할 점 또는 좋은 아이디어가 있다면 편하게 피드백 해주세요 :)"
            className="w-[512px] rounded-xl border-2 border-Gray bg-transparent px-5 py-3 text-white "
          />
          <button className="text-Gray_Orange">보내기</button>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-5 text-Gray">
        <div className="flex gap-8">
          <span>버터구이오징어</span>
          <div className="border-r-2" />
          <div className="flex  gap-4">
            <span>문의</span>
            <span>카카오톡 1:1 오픈채팅방</span>
          </div>
        </div>
        <span>Copyright ⓒ 2024 cinetalk. All rights reserved</span>
      </div>
    </div>
  );
}
