import { motion } from "framer-motion";
import Image from "next/image";
import React, { ReactElement, useEffect, useRef, useState } from "react";

import ModalContext, { useModalContext } from "@/components/modal/ModalContext";
import Portal from "@/components/modal/portal";
import useModal from "@/components/modal/useModal";
import useOutsideClick from "@/hooks/useOutsideClick";

import {
  CaretDownMd,
  Checkbox,
  CheckboxFill,
  CloseLg,
  CloseSm,
  KakaoLogo,
  NaverLogo,
  Polygon,
} from "../../../public/icons";

interface WithChildren {
  children: React.ReactNode;
}
interface ModalMainProps extends WithChildren {
  isAlertModal: boolean;
  hasAnimation?: boolean;
  onClose: () => void;
}
interface ModalButtonProps extends WithChildren {
  onClick: (type?: string, reason?: string) => void;
}
interface ModalCancelButtonProps extends WithChildren {}
interface ModalChcekboxProps extends WithChildren {}
interface ModalReportProps {}
interface ModalLoginProps extends WithChildren {
  onKakaoLogin: () => void;
  onNaverLogin: () => void;
}
type LastSocialLogin = null | "kakao" | "naver";

const REPORT_TYPE = [
  "",
  "도배, 홍보 및 광고 행위",
  "거짓 정보 유포",
  "욕설, 비난, 정치 및 사회적 갈등 조장",
  "성적인 발언",
  "기타",
];

function SocialAlert({
  lastSocialLogin,
  closeAlert,
}: {
  lastSocialLogin: LastSocialLogin;
  closeAlert: () => void;
}) {
  return (
    <div
      className={`absolute ${!lastSocialLogin ? "hidden" : "block"} bottom-[41px] left-1/2 -translate-x-1/2`}
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

function ModalLogin({ children, onKakaoLogin, onNaverLogin }: ModalLoginProps) {
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
function ModalTitleWrapper({ children }: WithChildren) {
  const { isAlertModal } = useModalContext();
  return (
    <div
      className={`flex w-[360px] flex-col items-center ${isAlertModal ? "gap-3" : "gap-2"}`}
    >
      {children}
    </div>
  );
}
function ModalTitle({ children }: WithChildren) {
  return <div className="text-Primary Text-xl-Bold">{children}</div>;
}
function ModalDescription({ children }: WithChildren) {
  return <div className="text-center Text-m-Medium">{children}</div>;
}
function ModalImg() {
  return <div className="h-[150px] w-[280px] bg-[#a4a4a4]" />;
}
function ModalButton({ children, onClick }: ModalButtonProps) {
  const { hasCheckbox, hasReport, isChecked, selectedIndex, detailedReason } =
    useModalContext();

  const checkDisabled = () => {
    if (hasCheckbox) return !isChecked;
    if (hasReport) {
      if (selectedIndex && selectedIndex < REPORT_TYPE.length - 1) return false;
      if (selectedIndex && detailedReason) return false;
      return true;
    }
    return false;
  };
  const handleClick = () => {
    if (hasReport) return onClick(REPORT_TYPE[selectedIndex], detailedReason);
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      disabled={checkDisabled()}
      className="w-full rounded-xl bg-Primary px-5 py-3 text-white Text-m-Medium hover:bg-Shade_1 active:bg-Shade_3 disabled:bg-D2_Gray disabled:text-Gray"
    >
      {children}
    </button>
  );
}
function ModalCancelButton({ children }: ModalCancelButtonProps) {
  const { onClose } = useModalContext();
  return (
    <button
      onClick={onClose}
      className="w-full rounded-xl border border-Gray bg-none px-5 py-3 text-white Text-m-Medium hover:border-Silver active:bg-D1_Gray"
    >
      {children}
    </button>
  );
}
function ModalCheckbox({ children }: ModalChcekboxProps) {
  const { isChecked, toggleChceked } = useModalContext();

  return (
    <>
      <button type="button" id="checkbox" onClick={toggleChceked} className="">
        {isChecked ? (
          <Image src={CheckboxFill} alt="checkbox" width={24} height={24} />
        ) : (
          <Image src={Checkbox} alt="checkbox" width={24} height={24} />
        )}
      </button>
      <label htmlFor="checkbox" className="cursor-pointer">
        {children}
      </label>
    </>
  );
}

function ModalReport({}: ModalReportProps) {
  const {
    selectedIndex,
    detailedReason,
    onDetailedReasonChange,
    onSelectedIndexChange,
    isDropdownOpen,
    setIsDropdownOpen,
  } = useModalContext();

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const ref = useOutsideClick(() => {
    if (isDropdownOpen) toggleDropdown();
  });
  const handleSelectedIndexChange = (index: number) => {
    onSelectedIndexChange(index);
    toggleDropdown();
  };
  const handleDropdownItemClick = (index: number) => {
    handleSelectedIndexChange(index);
    toggleDropdown();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      let index: number;
      switch (e.key) {
        case "Escape":
          setIsDropdownOpen(false);
          break;
        case "ArrowUp":
          index =
            !selectedIndex || selectedIndex === 1
              ? REPORT_TYPE.length - 1
              : selectedIndex - 1;
          onSelectedIndexChange(index);
          break;
        case "ArrowDown":
          index =
            selectedIndex === REPORT_TYPE.length - 1 ? 1 : selectedIndex + 1;
          onSelectedIndexChange(index);
          break;
        case "Enter":
          e.preventDefault();
          setIsDropdownOpen(false);
          break;
        default:
          break;
      }
    };

    if (isDropdownOpen) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isDropdownOpen, onSelectedIndexChange, selectedIndex, setIsDropdownOpen]);

  useEffect(() => {
    if (selectedIndex === REPORT_TYPE.length - 1) textareaRef.current?.focus();
  }, [selectedIndex]);

  return (
    <div className="flex w-[360px] flex-col gap-6">
      <div className="relative flex w-full flex-col gap-2">
        <label htmlFor="reportOption" className="pointer-events-none">
          신고 유형
        </label>
        <div
          ref={ref}
          id="reportOption"
          className={`${isDropdownOpen ? "border-Primary" : "border-Gray"} flex w-full cursor-pointer items-center overflow-hidden rounded-xl border `}
        >
          <button
            onClick={toggleDropdown}
            type="button"
            className="flex w-full items-center justify-center px-5 py-2"
          >
            <span
              className={`flex-1 text-left Text-m-Medium ${selectedIndex ? "text-Silver" : "text-Gray"}`}
            >
              {selectedIndex
                ? REPORT_TYPE[selectedIndex]
                : "신고 유형을 선택해주세요."}
            </span>
            <Image
              className="ml-2"
              alt="caret-down"
              src={CaretDownMd}
              width={24}
              height={24}
            />
          </button>
          {isDropdownOpen && (
            <div className="absolute left-0 top-[78px] flex w-[360px] flex-col gap-1 rounded-xl border border-D2_Gray bg-D1_Gray p-2 shadow-[0_4px_10px_0_rgba(0,0,0,0.3)]">
              {REPORT_TYPE.map((type, index) => {
                if (!index) return;
                return (
                  <button
                    className={`${selectedIndex === index ? "bg-D2_Gray" : "bg-none"} rounded-lg px-3 py-2 text-left Text-m-Regular hover:bg-D2_Gray active:bg-D3_Gray`}
                    onClick={() => handleDropdownItemClick(index)}
                    key={type}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="flex w-full flex-col gap-2">
        <label htmlFor="etc" className="Text-m-Medium">
          자세한 사유
        </label>
        <textarea
          ref={textareaRef}
          id="etc"
          value={detailedReason}
          onChange={onDetailedReasonChange}
          disabled={!selectedIndex}
          placeholder={
            !selectedIndex
              ? "신고 유형을 선택해주세요."
              : "자세한 사유를 작성해주세요."
          }
          className="h-[100px] resize-none rounded-xl bg-D2_Gray p-5 outline-none placeholder:text-Gray"
        />
      </div>
    </div>
  );
}

function ModalMain({
  children,
  onClose,
  isAlertModal,
  hasAnimation = true,
}: ModalMainProps) {
  const {
    isChecked,
    toggleChceked,
    detailedReason,
    selectedIndex,
    onDetailedReasonChange,
    onSelectedIndexChange,
    isDropdownOpen,
    setIsDropdownOpen,
  } = useModal();
  const hasLoginModal = useRef(false);
  const hasReportModal = useRef(false);
  const { buttons, checkbox, content } = React.Children.toArray(
    children,
  ).reduce<{
    buttons: ReactElement[];
    checkbox: ReactElement[];
    content: ReactElement[];
  }>(
    (acc, cur) => {
      if (React.isValidElement(cur)) {
        if (cur.type === Modal.Button || cur.type === Modal.CancelButton) {
          acc.buttons.push(cur);
        } else if (cur.type === Modal.Checkbox) {
          acc.checkbox.push(cur);
        } else if (cur.type === Modal.Report) {
          hasReportModal.current = true;
          acc.content.push(cur);
        } else if (cur.type === Modal.Login) {
          hasLoginModal.current = true;
          acc.content.push(cur);
        } else {
          acc.content.push(cur);
        }
      }
      return acc;
    },
    { buttons: [], checkbox: [], content: [] },
  );
  const ref = useOutsideClick(onClose);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        default:
          break;
      }
    };
    if (!isDropdownOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [onClose, isDropdownOpen]);

  return (
    <ModalContext.Provider
      value={{
        isAlertModal,
        onClose,
        isChecked,
        toggleChceked,
        hasCheckbox: !!checkbox.length,
        hasReport: hasReportModal.current,
        detailedReason,
        selectedIndex,
        onDetailedReasonChange,
        onSelectedIndexChange,
        isDropdownOpen,
        setIsDropdownOpen,
      }}
    >
      <Portal selector="portal">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: hasAnimation ? 0.2 : 0 }}
        >
          <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-black/40 backdrop-blur-[4px]">
            <div
              ref={ref}
              className={`${isAlertModal ? "gap-9 px-12 pb-10 pt-11" : hasLoginModal.current ? "px-10 py-16" : "gap-7 px-12 py-10"} z-10 flex flex-col items-center gap-7 rounded-xl bg-D1_Gray`}
            >
              {content}
              {checkbox.length > 0 && buttons.length > 0 && (
                <div className="flex w-[372px] flex-col items-center justify-center gap-5">
                  <div className="flex items-center gap-2">{checkbox}</div>
                  <div className="flex w-full gap-3">{buttons}</div>
                </div>
              )}

              {!checkbox.length && buttons.length > 0 && (
                <div className="flex w-[372px] gap-3">{buttons}</div>
              )}
            </div>
          </div>
        </motion.div>
      </Portal>
    </ModalContext.Provider>
  );
}

const Modal = Object.assign(ModalMain, {
  TitleWrapper: ModalTitleWrapper,
  Title: ModalTitle,
  Description: ModalDescription,
  Img: ModalImg,
  Button: ModalButton,
  CancelButton: ModalCancelButton,
  Checkbox: ModalCheckbox,
  Report: ModalReport,
  Login: ModalLogin,
});

export default Modal;
