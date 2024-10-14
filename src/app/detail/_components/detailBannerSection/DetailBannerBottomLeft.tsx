import dayjs from "dayjs";
import Image from "next/image";

import { StarFillMd, TmdbMd } from "../../../../../public/icons";

interface DetailBannerBottomLeftProps {
  movieDetailData: MovieDetailData;
}

export default function DetailBannerBottomLeft({
  movieDetailData,
}: DetailBannerBottomLeftProps) {
  const yearOfReleaseDate = dayjs(movieDetailData.releaseDate).format("YYYY");

  const contentRating =
    movieDetailData.contentRating === "All"
      ? "전체관람가"
      : movieDetailData.contentRating === ""
        ? "관람가 심의 중"
        : movieDetailData.contentRating.includes("관람가")
          ? movieDetailData.contentRating
          : `${movieDetailData.contentRating}세 이상 관람가`;

  const genreDTOList = movieDetailData.genreDTOList;
  const genreText = genreDTOList.map((el) => el.name);
  const formattedGenreText = genreText.reduce((acc, cur) => {
    return `${acc}/${cur}`;
  });

  const status = movieDetailData.status === "Released" ? "개봉됨" : "미개봉";

  const movieInfo = [
    yearOfReleaseDate,
    `${movieDetailData.runningTime}분`,
    "00.0만명",
    contentRating,
    formattedGenreText,
  ];

  return (
    <section className="mt-auto flex flex-col gap-1">
      <section className="mb-2 flex flex-col-reverse items-center gap-1 Laptop:mb-0 Laptop:flex-row Laptop:gap-4">
        <h2 className="text-Silver Text-xl-Bold Laptop:Text-xxxl-Bold">
          {movieDetailData.title}
        </h2>
        <div className="flex items-center justify-center rounded-[35px] border-[1px] border-White px-3 py-1 Text-xs-Regular Laptop:h-10 Laptop:border-[2px] Laptop:px-4 Laptop:py-2 Laptop:Text-m-Medium">
          {status}
        </div>
      </section>

      <section className="flex flex-col items-center Laptop:mb-0 Laptop:flex-row Laptop:gap-6">
        <section className="mb-2 flex gap-6 Laptop:mb-0">
          <section className="flex items-center gap-1">
            <Image src={StarFillMd} alt="별점" />
            <p className="text-Primary Text-m-Bold Laptop:Text-xxl-Bold">
              {movieDetailData.cinetalkScore}
            </p>
          </section>

          <section className="flex items-center gap-1">
            <Image src={TmdbMd} alt="TMDB" />
            <p className="text-Silver Text-m-Bold Laptop:Text-xxl-Bold">
              {movieDetailData.tmdbScore}
            </p>
          </section>
        </section>

        <section
          className={`absolute bottom-[-2px] mb-5 flex translate-y-[200%] flex-wrap justify-center Tablet:bottom-[-4px] Tablet:w-fit Laptop:static Laptop:bottom-0 Laptop:mb-0 Laptop:translate-y-0 Laptop:flex-nowrap`}
        >
          {movieInfo.map((info, i) => (
            <p
              key={i}
              className={`group relative px-3 text-L_Gray Text-xs-Regular last:absolute last:bottom-[-21px] Tablet:last:relative Tablet:last:bottom-0 Laptop:px-[10px] Laptop:text-Silver Laptop:Text-m-Medium ${i === 0 && "pl-0"} last:after:border-none`}
            >
              {info}
              {i !== movieInfo.length - 1 && (
                <span
                  className={`absolute ${i === movieInfo.length - 2 && "hidden Tablet:block"} right-0 top-1/2 h-3 w-[1px] translate-y-[-50%] transform bg-D3_Gray after:content-[''] Laptop:bg-Silver`}
                />
              )}
            </p>
          ))}
          {/* <p
            className={`px-3 text-L_Gray Text-xs-Regular last:after:border-none Laptop:px-[10px] Laptop:text-Silver Laptop:Text-m-Medium`}
          >
            {formattedGenreText}
          </p> */}
        </section>
      </section>
    </section>
  );
}
