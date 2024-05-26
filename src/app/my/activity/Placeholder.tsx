import Link from "next/link";

import ROUTES from "@/constants/routes";

interface Props {
  type: "rating" | "review";
}

export default function Placeholder({ type }: Props) {
  return (
    <div className="flex flex-col items-center gap-6 py-[120px]">
      <div className="text-Gray">
        <p className="text-m-bold">
          {type === "rating"
            ? "아직 영화를 평가한 적이 없어요."
            : "아직 톡을 작성한 적이 없어요."}
        </p>
        <p className="Text-s-Regular">영화에 대한 생각을 나눠보세요 :)</p>
      </div>
      <div>
        <Link
          href={ROUTES.MAIN}
          className="rounded-xl bg-Primary px-5 py-3 text-Silver Text-m-Medium"
        >
          {type === "rating" ? "평가 하러가기" : "톡 작성하러 가기"}
        </Link>
      </div>
    </div>
  );
}
