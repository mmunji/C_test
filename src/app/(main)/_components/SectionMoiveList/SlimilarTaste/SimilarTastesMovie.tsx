"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import SimilarTasteReviewers from "@/app/(main)/_components/SectionMoiveList/SlimilarTaste/SimilarTasteReviewers";
import useFilter from "@/app/(main)/_hooks/useFilter";
import useMessage from "@/app/(main)/_hooks/useMessage";
import useMovieSwiper from "@/app/(main)/_hooks/useMovieSwiper";
import Button from "@/components/buttons/Button";
import SpeechBubble from "@/components/speechBubble/SpeechBubble";

import {
  ChevronLeftMd,
  ChevronRightSilverMd,
} from "../../../../../../public/icons";
import SlimilarPost from "./SlimilarPost";

interface SimilarTastesMovieType {
  reviewUsers: MovieReviewRecommed[];
}

export default function SimilarTastesMovie({
  reviewUsers,
}: SimilarTastesMovieType) {
  const { Filter, ChangeFilter } = useFilter();
  const { swiper, setSwiper } = useMovieSwiper();
  const [content, setContent] = useState<{ title: string; message: string }>({
    title: "",
    message: "",
  });
  useEffect(() => {
    async function Message() {
      const { title, message } = await useMessage("similar");
      setContent({ title, message });
    }
    Message();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <div className=" relative flex   flex-col gap-5 Tablet:flex-row Tablet:items-center">
          <h2 className="Text-l-Bold Laptop:Text-xxl-Bold ">{content.title}</h2>
          <div className="absolute -bottom-11 block w-max Tablet:hidden">
            <SpeechBubble id={"SimilarTastesMovie"} dir="top">
              {content.message}
            </SpeechBubble>
          </div>
          <div className="hidden Tablet:block">
            <SpeechBubble id={"SimilarTastesMovie"} dir="left">
              {content.message}
            </SpeechBubble>
          </div>
        </div>
        {!(swiper?.isBeginning && swiper?.isEnd) && (
          <div className="hidden gap-1 Laptop:flex">
            <Button onClick={() => swiper?.slidePrev()} variant={"arrow2"}>
              <Image src={ChevronLeftMd} alt="이전" className="h-6 w-6 " />
            </Button>
            <Button onClick={() => swiper?.slideNext()} variant={"arrow2"}>
              <Image src={ChevronRightSilverMd} alt="다음" />
            </Button>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <SimilarTasteReviewers
          setSwiper={setSwiper}
          changePickNumber={ChangeFilter}
          pickUserNumber={Filter}
          reviewUsers={reviewUsers}
        />
        <SlimilarPost key={Filter} selectedReviewer={reviewUsers[Filter]} />
      </div>
    </div>
  );
}
