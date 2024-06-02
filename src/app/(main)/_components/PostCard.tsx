interface PostNumber {
  num?: number;
  onClick?: () => void;
}
export default function PostCard({ num, onClick }: PostNumber) {
  return (
    <div
      className="h-[358px] w-[238px] rounded-xl Tablet:h-[390px] Tablet:w-[260px] Laptop:h-[260px] Laptop:w-[174px] Desktop:h-[360px]  Desktop:w-[240px]"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%), url('/images/detail/detail-poster-example.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={onClick}
    >
      {num ? (
        <div className="Tablet:Text-I-Bold flex h-[30px] w-[30px] items-center justify-center rounded-bl-[12px] rounded-tl-[12px] bg-Primary Text-s-Bold">
          {num}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
