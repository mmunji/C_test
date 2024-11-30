"use client";

import { useEffect, useState } from "react";

import useHandleClickAuthButton from "@/hooks/useHandleClickAuthButtons";
import useInput from "@/hooks/useInput";
import { tokenManager } from "@/services/auth/tokenManager";
import { movieAPIs } from "@/services/movie/movieAPIs";
import { useToastActions } from "@/stores/useToast";

import Button from "../buttons/Button";
import Modal from "../modal/modal";

export default function Footer() {
  const [FeedbackPost, setFeedBackPost, handlesetValue] = useInput("");
  const [Commnets, setCommnets] = useState(0);
  const { add } = useToastActions();
  const [isOpen, setIsOpen] = useState(false);
  const { handleClickAuthButton } = useHandleClickAuthButton();
  const UserCheck = () => {
    const token = tokenManager.getToken();
    if (!token) {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        // 실제 API 호출로 `movieAPIs.getHidingPiece`를 대체합니다.
        const response = await movieAPIs.getMovieReviewComments();
        setCommnets(response);
      } catch (error) {
        console.error("영화를 가져오는 중 오류 발생:", error);
      }
    };

    fetchMovie();
  }, []);
  const FeedBackSubmit = async () => {
    const result = await movieAPIs.postFeedBack(FeedbackPost);
    if (result.state) {
      add("피드백 완료! 소중한 의견 감사합니다 🦑");
      handlesetValue("");
    }
  };
  return (
    <div className="flex flex-col gap-7 bg-Black px-7 py-11 text-white Tablet:gap-[52px] Tablet:px-9 Laptop:px-[64px] Laptop:py-[90px] Desktop:gap-[52px] Desktop:px-[180px]">
      <div className="flex flex-col items-center gap-[24px]">
        <h1 className=" text-Silver  Text-m-Bold Laptop:Text-xl-Bold">
          지금까지 총<span className="text-Primary"> {Commnets} </span> 개의
          톡이 쌓였어요!
        </h1>
        <div className="flex w-full  justify-between gap-2  rounded-xl bg-D1_Gray py-2 pl-4 pr-3 Text-s-Regular  Laptop:w-[512px]">
          <input
            placeholder="개선할 점이 있나요? 피드백 해주세요 ;)"
            className="min-w-0  flex-grow overflow-hidden bg-transparent  text-white Text-s-Regular placeholder:text-ellipsis  placeholder:text-Gray focus:outline-none Laptop:Text-m-Regular"
            value={FeedbackPost}
            onChange={setFeedBackPost}
            onClick={UserCheck}
          />
          <Button
            size={"sm"}
            variant={"orange"}
            disabled={!FeedbackPost}
            onClick={FeedBackSubmit}
            className="flex-shrink-0"
          >
            보내기
          </Button>
        </div>
      </div>
      {isOpen && (
        <Modal isAlertModal={false} onClose={() => setIsOpen(false)}>
          <Modal.Login
            onKakaoLogin={() => handleClickAuthButton("kakao")}
            onNaverLogin={() => handleClickAuthButton("naver")}
          />
        </Modal>
      )}
      <hr className="border-Gray" />
      <div className="flex flex-col gap-1 text-Gray Tablet:gap-5">
        <div className="flex items-center  gap-4 Text-s-Bold">
          <span>문의</span>
          <a
            className="inline-block py-2 underline Text-s-Regular"
            href="http://pf.kakao.com/_xmWUxmG"
            target="_blank"
          >
            씨네톡 카카오톡 채널
          </a>
        </div>

        <div className="flex flex-col gap-1  Tablet:flex-row Tablet:gap-5">
          <span className="Text-s-Bold">버터구이오징어</span>
          <div className="border-r-[1px] border-Gray" />
          <div className="flex  gap-5 ">
            <span className="Text-s-Bold">Front-End</span>
            <div className="flex gap-3 Text-s-Medium">
              <span>김범수</span>
              <span>이상원</span>
              <span>전병규</span>
            </div>
          </div>
          <div className="border-r-[1px] border-Gray" />
          <div className="flex gap-5">
            <span className="Text-s-Bold">Back-End</span>
            <div className="flex gap-3 Text-s-Medium">
              <span>김태욱</span>
              <span>정동훈</span>
            </div>
          </div>
          <div className="border-r-[1px] border-Gray" />
          <div className="flex gap-5">
            <span className="Text-s-Bold">UXUI</span>
            <div className="flex gap-3 Text-s-Medium">
              <span>김호산나</span>
            </div>
          </div>
        </div>
        <span className="Text-s-Medium">
          Copyright ⓒ 2024 cinetalk. All rights reserved
        </span>
      </div>
    </div>
  );
}
