import Image from "next/image";

import { StarFillMd, StarFillSm } from "@/../public/icons";
import useDevice from "@/hooks/useDevice";

import PostCard from "../PostCard";
interface MovieBannerTypes {
  PostImg: string;
  keyword: string;
  MovieName: string;
  Rate: number;
}

export default function LeftMovePost({
  PostImg,
  keyword,
  MovieName,
  Rate,
}: MovieBannerTypes) {
  {
    /*
  1. 임시로 모바일 텍스트
  2. 나중에 테블릿 ,렙탑, 데탑 사즈로
*/
  }
  const { device } = useDevice();
  return (
    <div className="flex  w-full flex-col gap-9 Tablet:w-[220px] Tablet:justify-end Laptop:w-[400px]">
      <div className="hidden Laptop:block ">
        <PostCard background={PostImg} />
      </div>
      <div className="flex flex-col gap-[181px]  Tablet:gap-3  Laptop:justify-between   Laptop:gap-5  ">
        <div className="flex flex-col gap-1  Laptop:flex-row Laptop:gap-4 ">
          <span className="Text-m-Bold Laptop:hidden ">실시간 핫한 톡</span>
          <div className="flex items-center gap-4">
            <h3 className="line-clamp-1 Text-xl-Bold Laptop:Text-xxxl-Bold ">
              {MovieName}
            </h3>
          </div>
        </div>
        <div>
          <ul className="flex gap-9   Tablet:gap-9 Laptop:gap-12">
            <li className="flex flex-col gap-2 text-Silver ">
              <h4 className="text-center Text-xs-Regular Laptop:Text-s-Medium">
                평점
              </h4>
              <div className=" h-[21px]text-center flex items-center text-Primary Text-s-Bold Laptop:gap-1 Laptop:Text-l-Bold">
                {device == "laptop" || device == "desktop" ? (
                  <Image src={StarFillMd} alt="star" className="h-6 w-6" />
                ) : (
                  <Image src={StarFillSm} alt="star" className="h-4 w-4" />
                )}
                <span className="flex items-center ">{Rate.toFixed(1)}</span>
              </div>
            </li>
            <li className="flex flex-col gap-2  text-Silver">
              <h4 className="text-center Text-xs-Regular Laptop:Text-s-Medium ">
                Best 키워드
              </h4>
              <h4 className="text-center Text-s-Bold Laptop:Text-l-Bold">
                {keyword == null ? "-" : keyword}
              </h4>
            </li>
            <li className="flex flex-col gap-2  text-Silver">
              <h4 className="text-center Text-xs-Regular Laptop:Text-s-Medium">
                장르
              </h4>
              <h4 className="text-center Text-s-Bold Laptop:Text-l-Bold">
                판타지
              </h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
