export default function MovieCategory() {
  const category = [
    "전체",
    "액션",
    "모험",
    "범죄",
    "스릴러",
    "로맨스",
    "코미디",
    "판타지",
    "공포",
    "SF",
    "애니메이션",
    "다큐멘터리",
    "음악",
  ];
  return (
    <div className="absolute left-[350px] top-[700px] grid grid-cols-2 gap-[12px] rounded-xl bg-D1_Gray p-2 ">
      {category.map((title, index) => {
        return (
          <button key={index} className="px-[24px] py-[8px] hover:bg-D2_Gray">
            {title}
          </button>
        );
      })}
    </div>
  );
}
