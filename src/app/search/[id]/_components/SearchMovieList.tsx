import Image from "next/image";

import SearchTitle from "@/app/search/[id]/_components/SearchTitle";

export default function SearchMovieList() {
  return (
    <div className="mt-1 flex flex-col gap-3 px-5">
      <SearchTitle category="영화" length={55} />
      <div className="grid grid-cols-2 gap-2">
        {Array(4)
          .fill("asd")
          .map((_, i) => (
            <Image
              className="rounded-lg object-fill Tablet:rounded-xl"
              key={i}
              src={"/images/detail/detail-poster-example.png"}
              alt="웡카"
              width={156}
              height={230}
            />
          ))}
      </div>
    </div>
  );
}
