import { usePathname } from "next/navigation";
import React, { useState } from "react";

import Modal from "@/components/modal/_components";
import ROUTES from "@/constants/routes";

interface HeaderAuthButtonsProps {
  hasScrolledPast: boolean;
}

function HeaderAuthButtons({ hasScrolledPast }: HeaderAuthButtonsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <section className="hidden gap-4 Laptop:flex Laptop:gap-8">
      <button
        onClick={() => setIsOpen(true)}
        className={`h-10 flex-shrink-0 p-2 text-regular font-Medium ${pathname === ROUTES.DETAIL ? (hasScrolledPast ? "text-White" : "text-[rgba(255,255,255,0.6)]") : "text-White"}`}
      >
        로그인
      </button>

      <button
        onClick={() => setIsOpen(true)}
        className="flex-shrink-0 rounded-[8px] bg-Primary px-4 text-regular font-Medium text-White"
      >
        회원가입
      </button>

      {isOpen && (
        <Modal
          isAlertModal={false}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <Modal.Login
            onKakaoLogin={() => console.log("d")}
            onNaverLogin={() => console.log("d")}
          />
        </Modal>
      )}
    </section>
  );
}

export default HeaderAuthButtons;
