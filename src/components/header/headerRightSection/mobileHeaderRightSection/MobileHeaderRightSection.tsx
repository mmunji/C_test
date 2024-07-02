import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction, useState } from "react";

import Modal from "@/components/modal/_components";
import ROUTES from "@/constants/routes";
import useHandleClickAuthButton from "@/hooks/useHandleClickAuthButtons";
import useLoggedInStore from "@/stores/useLoggedIn";

import { SearchWhiter, User } from "../../../../../public/icons";
import MobileHeaderInputSection from "./MobileHeaderInputSection";
import MobileHeaderSearchDropdown from "./MobileHeaderSearchDropdown";

interface MobileHeaderRightSectionProps {
  clickSearchIcon: boolean;
  setClickSearchIcon: Dispatch<SetStateAction<boolean>>;
}

function MobileHeaderRightSection({
  clickSearchIcon,
  setClickSearchIcon,
}: MobileHeaderRightSectionProps) {
  const pathname = usePathname();
  const [inputFocused, setInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { loggedIn } = useLoggedInStore();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { handleClickAuthButton } = useHandleClickAuthButton();

  const handleClickUserIcon = () => {
    if (loggedIn) router.push(ROUTES.MY.default);
    else {
      setIsOpen(true);
    }
  };

  return (
    <section
      className={`${pathname === ROUTES.MAIN && "ml-auto"} flex w-fit items-center Laptop:hidden ${clickSearchIcon && "absolute left-0 flex h-full w-full gap-2 bg-BG pl-5 pr-4 Tablet:p-0"}`}
    >
      {clickSearchIcon ? (
        <MobileHeaderInputSection
          {...{
            inputFocused,
            inputValue,
            setInputValue,
            setInputFocused,
            setClickSearchIcon,
            clickSearchIcon,
          }}
        />
      ) : (
        <section className="flex Tablet:gap-4">
          <Image
            src={SearchWhiter}
            alt="검색"
            onClick={() => setClickSearchIcon(true)}
            className="m-2 cursor-pointer"
          />
          <Image
            src={User}
            alt="유저"
            onClick={handleClickUserIcon}
            className="m-2 cursor-pointer Laptop:hidden"
          />
        </section>
      )}
      {clickSearchIcon && (
        <MobileHeaderSearchDropdown
          inputValue={inputValue}
          inputFocused={inputFocused}
        />
      )}
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

export default MobileHeaderRightSection;
