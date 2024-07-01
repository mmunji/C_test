import clsx from "clsx";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { useModalContext } from "@/components/modal/ModalContext";
import useOutsideClick from "@/hooks/useOutsideClick";

import { CaretDownMd } from "../../../../public/icons";

export const REPORT_TYPE = [
  "",
  "도배, 홍보 및 광고 행위",
  "거짓 정보 유포",
  "욕설, 비난, 정치 및 사회적 갈등 조장",
  "성적인 발언",
  "기타",
];

export function ModalReport() {
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
          className={clsx(
            isDropdownOpen ? "border-Primary" : "border-Gray",
            `flex w-full cursor-pointer items-center overflow-hidden rounded-xl border `,
          )}
        >
          <button
            onClick={toggleDropdown}
            type="button"
            className="flex w-full items-center justify-center px-5 py-2"
          >
            <span
              className={clsx(
                selectedIndex ? "text-Silver" : "text-Gray",
                `flex-1 text-left Text-m-Medium`,
              )}
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
                    className={clsx(
                      selectedIndex === index ? "bg-D2_Gray" : "bg-none",
                      `rounded-lg px-3 py-2 text-left Text-m-Regular hover:bg-D2_Gray active:bg-D3_Gray`,
                    )}
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
