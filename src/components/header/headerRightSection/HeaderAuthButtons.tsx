import { usePathname } from "next/navigation";
import React, { useState } from "react";

import Button from "@/components/buttons/Button";
import Modal from "@/components/modal/modal";
import ROUTES from "@/constants/routes";
import useHandleClickAuthButton from "@/hooks/useHandleClickAuthButtons";

interface HeaderAuthButtonsProps {
  hasScrolledPast: boolean;
}

function HeaderAuthButtons({ hasScrolledPast }: HeaderAuthButtonsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const { handleClickAuthButton } = useHandleClickAuthButton();

  return (
    <section className="hidden gap-4 Laptop:flex Laptop:gap-8">
      <Button
        variant="text"
        onClick={() => setIsOpen(true)}
        className={`h-10 flex-shrink-0 p-2 text-regular font-Medium ${pathname.includes(ROUTES.DETAIL) ? (hasScrolledPast ? "text-White" : "text-[rgba(255,255,255,0.6)]") : "text-White"}`}
      >
        로그인
      </Button>

      <Button variant="orange" size="md" onClick={() => setIsOpen(true)}>
        회원가입
      </Button>

      {isOpen && (
        <Modal
          isAlertModal={false}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <Modal.Login
            onKakaoLogin={() => handleClickAuthButton("kakao")}
            onNaverLogin={() => handleClickAuthButton("naver")}
          />
        </Modal>
      )}
    </section>
  );
}

export default HeaderAuthButtons;
