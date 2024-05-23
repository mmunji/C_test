import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

import { WithChildren } from "@/components/modal/_components/ModalMain";
import { useModalContext } from "@/components/modal/ModalContext";

import {
  CloseLg,
  CloseSm,
  KakaoLogo,
  NaverLogo,
  Polygon,
} from "../../../../public/icons";

interface ModalLoginProps extends WithChildren {
  onKakaoLogin: () => void;
  onNaverLogin: () => void;
}
type LastSocialLogin = null | "kakao" | "naver";

function SocialAlert({
  lastSocialLogin,
  closeAlert,
}: {
  lastSocialLogin: LastSocialLogin;
  closeAlert: () => void;
}) {
  return (
    <div
      className={clsx(
        !lastSocialLogin ? "hidden" : "block",
        `absolute bottom-[41px] left-1/2 -translate-x-1/2`,
      )}
    >
      <div className="relative flex h-[34px] w-fit items-center rounded-lg bg-Shade_1 py-2 pl-3 pr-1">
        <span className="text-sm font-medium leading-[18px] text-Silver ">
          마지막에 로그인 했어요!
        </span>
        <button onClick={closeAlert} type="button">
          <Image src={CloseSm} alt="닫기" width={24} height={24} />
        </button>
        <Image
          src={Polygon}
          alt="polygon"
          width={20}
          height={21}
          className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
}

export function ModalLogin({
  children,
  onKakaoLogin,
  onNaverLogin,
}: ModalLoginProps) {
  const [lastSocialLogin, setLastSocialLogin] =
    useState<LastSocialLogin>("kakao");
  const { onClose } = useModalContext();
  const handleAlertClose = () => setLastSocialLogin(null);

  return (
    <div className="relative flex flex-col gap-7">
      <button
        type="button"
        onClick={onClose}
        className="absolute -right-6 -top-12 w-fit p-2"
      >
        <Image src={CloseLg} alt="닫기" width={24} height={24} />
      </button>
      <div className="flex justify-center">
        <div className="h-[50px] w-[158px] bg-[#a4a4a4]"></div>
      </div>
      <div className="flex flex-col items-center gap-9">
        <p>{children}</p>
        <div className="flex flex-col gap-6">
          <div className="relative">
            <button
              type="button"
              onClick={onKakaoLogin}
              className="flex h-12 w-[360px] items-center justify-center gap-4 rounded-xl bg-[#FEE500] text-[#000000d9] Text-m-Medium"
            >
              <Image src={KakaoLogo} alt="카카오" width={18} height={18} />
              카카오로 시작하기
            </button>
            {lastSocialLogin === "kakao" && (
              <SocialAlert
                closeAlert={handleAlertClose}
                lastSocialLogin={lastSocialLogin}
              />
            )}
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={onNaverLogin}
              className="flex h-12 w-[360px] items-center justify-center gap-4 rounded-xl bg-[#03C75A] text-White Text-m-Medium"
            >
              <Image src={NaverLogo} alt="네이버" width={18} height={18} />
              네이버로 시작하기
            </button>
            {lastSocialLogin === "naver" && (
              <SocialAlert
                closeAlert={handleAlertClose}
                lastSocialLogin={lastSocialLogin}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
