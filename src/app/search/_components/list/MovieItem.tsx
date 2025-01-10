import Image from "next/image";
import Link from "next/link";

import ROUTES from "@/constants/routes";
import { getTmdbPosterUrl } from "@/utils/image";

export default function MovieItem({ movie }: { movie: MovieResult }) {
  return (
    <Link
      href={`${ROUTES.DETAIL}/${movie.id}`}
      className="flex flex-col gap-1 Tablet:gap-2"
    >
      <div
        className={
          "group relative h-[230px] overflow-hidden rounded-lg Tablet:h-[341px] Tablet:rounded-xl Laptop:h-[260px] Desktop:h-[360px]"
        }
      >
        <Image
          unoptimized
          className="object-cover group-hover:opacity-70 group-hover:blur-[3px]"
          src={`${movie.poster_path ? getTmdbPosterUrl("w500", movie.poster_path) : "/images/ssikongi/PNG/NoImage.png"}`}
          alt={`${movie.title} 포스터`}
          fill
        />
        <div className="absolute z-[1] hidden px-5 py-7 text-Silver Text-m-Regular group-hover:flex Desktop:px-6 Desktop:py-8">
          <p className="line-clamp-[7] break-all Tablet:line-clamp-[11] Laptop:line-clamp-[8] Desktop:line-clamp-[12]">
            {movie.overview}
          </p>
        </div>
      </div>
      <p className="line-clamp-1 text-Gray_Orange Text-s-Medium Tablet:Text-m-Medium">
        {movie.title}
      </p>
    </Link>
  );
}
