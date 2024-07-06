import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction, useState } from "react";

import Modal from "@/components/modal/modal";
import ROUTES from "@/constants/routes";
import useHandleClickAuthButton from "@/hooks/useHandleClickAuthButtons";
import useSearchMovies from "@/hooks/useSearchMovies";
import useLoggedInStore from "@/stores/useLoggedIn";

import { House, SearchWhiter, User } from "../../../../../public/icons";
import MobileHeaderInputSection from "./MobileHeaderInputSection";
import MobileHeaderSearchDropdown from "./MobileHeaderSearchDropdown";

interface MobileHeaderRightSectionProps {
  clickSearchIcon: boolean;
  setClickSearchIcon: Dispatch<SetStateAction<boolean>>;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}

function MobileHeaderRightSection({
  clickSearchIcon,
  setClickSearchIcon,
  inputValue,
  setInputValue,
}: MobileHeaderRightSectionProps) {
  const pathname = usePathname();
  const [inputFocused, setInputFocused] = useState(false);
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

  useSearchMovies(inputValue);

  return (
    <>
      <section
        className={`${pathname === ROUTES.MAIN && "ml-auto"} ${pathname.includes(ROUTES.MY.default) && "hidden Tablet:block"} flex w-fit items-center Laptop:hidden ${clickSearchIcon && "absolute left-0 flex h-full w-full gap-2 bg-BG pl-5 pr-4 Tablet:p-0"}`}
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
              className={`m-2 ${pathname.includes(ROUTES.DETAIL) && "hidden Tablet:block"} cursor-pointer`}
            />
            <Image
              src={House}
              alt="홈"
              onClick={() => router.push(ROUTES.MAIN)}
              className={`m-2 ${!pathname.includes(ROUTES.DETAIL) && "hidden"} cursor-pointer Tablet:hidden`}
            />

            <Image
              src={User}
              alt="유저"
              onClick={handleClickUserIcon}
              className={`m-2 ${pathname.includes(ROUTES.MY.default) && "hidden"} cursor-pointer Laptop:hidden`}
            />
          </section>
        )}
        {clickSearchIcon && (
          <MobileHeaderSearchDropdown
            {...{
              inputValue,
              inputFocused,
              setClickSearchIcon,
              setInputValue,
            }}
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

      <Image
        src={House}
        alt="home"
        onClick={() => router.push(ROUTES.MAIN)}
        className={`${!pathname.includes(ROUTES.MY.default) && "hidden"} mr-2 cursor-pointer Tablet:hidden`}
      />
    </>
  );
}

export default MobileHeaderRightSection;
