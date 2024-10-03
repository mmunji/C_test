import Image from "next/image";
import React, { useEffect, useState } from "react";

import Modal from "@/components/modal/modal";
import useDevice from "@/hooks/useDevice";
import useHandleClickAuthButton from "@/hooks/useHandleClickAuthButtons";
import useNeedLogin from "@/hooks/useNeedLogin";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import { useBookmarkMovie } from "@/services/movie/movieMutations";
import { useCheckBookmark } from "@/services/movie/movieQueries";
import useLoggedInStore from "@/stores/useLoggedIn";

import {
  EditPencilLineMd,
  EditPencilLineSm,
  HeartFillLg,
  HeartFillXl,
  HeartLineLg,
  HeartLineXl,
} from "../../../../../public/icons";
import { useCategoryTabStore } from "../../_stores/useCategoryTabStore";

interface DetailBannerBottomRightProps {
  movieId: number;
  movieDetailData: MovieDetailData;
}

export default function DetailBannerBottomRight({
  movieId,
  movieDetailData,
}: DetailBannerBottomRightProps) {
  const { smoothScroll } = useSmoothScroll();
  const { activeCategoryTab, setActiveCategoryTab } = useCategoryTabStore();
  const { device } = useDevice();
  const [clickedTalk, setClickedTalk] = useState(false);
  const { loggedIn } = useLoggedInStore();
  const { handleNeedLogin, isOpen, setIsOpen } = useNeedLogin();
  const { handleClickAuthButton } = useHandleClickAuthButton();

  const { mutate: bookmark } = useBookmarkMovie(movieId);
  const { data: checkBookmark } = useCheckBookmark(movieId);

  useEffect(() => {
    if (activeCategoryTab === "톡" && clickedTalk) {
      smoothScroll("my-talk");
    }

    return () => setClickedTalk(false);
  }, [activeCategoryTab, clickedTalk, smoothScroll]);

  const handleClickTalk = () => {
    setClickedTalk(true);
    if (device === "mobile" || device === "tablet") {
      setActiveCategoryTab("톡");
    }

    smoothScroll("my-talk");
  };

  const toggleBookmark = (movieId: number) => {
    if (handleNeedLogin()) return;

    bookmark(movieId);
  };

  return (
    <section className="absolute bottom-[-60px] flex translate-y-[100%] Tablet:bottom-[-41px] Laptop:static Laptop:translate-y-0">
      <section className="mt-auto flex items-center gap-10 Laptop:gap-5 Desktop:gap-8">
        {loggedIn && (
          <section>
            <p className="flex h-10 w-10 items-center justify-center text-Silver Text-l-Bold Laptop:h-12 Laptop:w-12 Laptop:text-xl Laptop:font-Medium Laptop:leading-[28px]">
              0.0
            </p>
            <p className="text-center text-L_Gray Text-xs-Regular Laptop:text-White Laptop:Text-s-Medium">
              내 평가
            </p>
          </section>
        )}
        <section
          onClick={() => toggleBookmark(movieId)}
          className="cursor-pointer"
        >
          <Image
            src={checkBookmark?.data.state ? HeartFillLg : HeartLineLg}
            alt="찜하기"
            className="m-1 h-8 w-8 Laptop:hidden"
          />
          <Image
            src={checkBookmark?.data.state ? HeartFillXl : HeartLineXl}
            alt="찜하기"
            className="hidden Laptop:block"
          />
          <p className="text-center text-L_Gray Text-xs-Regular Laptop:text-White Laptop:Text-s-Medium">
            찜 하기
          </p>
        </section>
        <section onClick={handleClickTalk} className="cursor-pointer">
          <Image
            src={EditPencilLineSm}
            alt="톡 작성"
            className="m-1 h-8 w-8 Laptop:hidden"
          />
          <Image
            src={EditPencilLineMd}
            alt="톡 작성"
            className="hidden Laptop:block"
          />
          <p className="text-center text-L_Gray Text-xs-Regular Laptop:text-White Laptop:Text-s-Medium">
            톡 작성
          </p>
        </section>
      </section>
      <Image
        src={movieDetailData.posterImg}
        alt="포스터"
        width={500}
        height={500}
        priority
        className="hidden rounded-[12px] Laptop:ml-6 Laptop:block Laptop:h-[258px] Laptop:w-[172px] Desktop:ml-9 Desktop:h-[360px] Desktop:w-60"
      />

      {isOpen && (
        <Modal isAlertModal={false} onClose={() => setIsOpen(false)}>
          <Modal.Login
            onKakaoLogin={() => handleClickAuthButton("kakao")}
            onNaverLogin={() => handleClickAuthButton("naver")}
          />
        </Modal>
      )}
    </section>
  );
}
