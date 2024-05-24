import clsx from "clsx";
import React from "react";

import DropdownContext, {
  useDropdownContext,
} from "@/components/dropdown/DropdownContext";
import useDropdown from "@/components/dropdown/useDropdown";
import useOutsideClick from "@/hooks/useOutsideClick";

/* 사용 방법
      <Dropdown type="genre">                                             // type = "genre" | "icon" | "text" 입니다 default = text
                                                                          // isMobile = boolean 입니다 default = false
        <Dropdown.Trigger>
          <div className="bg-blue-500 text-white">아무거나</div>            // 트리거 엘리먼트 만들어주시면 됩니다.
        </Dropdown.Trigger>
        <Dropdown.List className="right-0">                               // className으로 세부 위치 설정해주세요.
          {MEMU2.map((m) => (
            <Dropdown.Item
              key={m}
              onClick={() => console.log(m)}                              // 핸들러 이벤트 설정해주세요.
              isFocused={m === "전체"}                                     // focus의 경우 설정해주세요
            >
              {m}
            </Dropdown.Item>
          ))}
        </Dropdown.List>
      </Dropdown>
*/

interface DropdownTriggerProps {
  children: React.ReactNode;
}

interface DropdownItemProps {
  children: React.ReactNode;
  onClick: () => void;
  isFocused?: boolean;
}

interface DropdownListProps {
  children: React.ReactNode;
  className?: string;
}

interface DropdownMainProps {
  children: React.ReactNode;
  type?: "genre" | "icon" | "text";
  isMobile?: boolean;
}

function DropdownTrigger({ children }: DropdownTriggerProps) {
  const { toggleDropdown } = useDropdownContext();

  return (
    <div className="hover:cursor-pointer" onClick={toggleDropdown}>
      {children}
    </div>
  );
}

function DropdownItem({
  children,
  onClick,
  isFocused = false,
}: DropdownItemProps) {
  const { type, toggleDropdown, isMobile } = useDropdownContext();
  const handleClick = () => {
    onClick();
    toggleDropdown();
  };
  return (
    <button
      onClick={handleClick}
      type="button"
      className={clsx(
        isFocused && "bg-D2_Gray",
        isMobile ? "Text-s-Regular" : "Text-m-Regular",
        type === "genre"
          ? [isMobile ? "px-6 py-2" : "p-2"]
          : [type === "icon" ? "item-border p-3" : "item-border px-3 py-2"],
        `relative flex justify-center rounded-lg hover:bg-D2_Gray active:bg-D3_Gray`,
      )}
    >
      {children}
    </button>
  );
}

function DropdownList({ children, className }: DropdownListProps) {
  const { isOpen, type, isMobile } = useDropdownContext();

  if (!isOpen) return null;
  return (
    <div
      className={clsx(
        type === "genre"
          ? [
              "grid grid-cols-2 p-2",
              isMobile
                ? "min-w-[158px] gap-x-2 gap-y-1"
                : "min-w-[198px] gap-x-5 gap-y-3",
            ]
          : ["flex flex-col gap-2", isMobile ? "p-1" : "p-2"],
        `
  absolute whitespace-nowrap rounded-xl border border-D2_Gray bg-D1_Gray shadow-[0_4px_10px_0_rgba(0,0,0,0.3)] ${className}`,
      )}
    >
      {children}
    </div>
  );
}

function DropdownMain({
  children,
  type = "text",
  isMobile = false,
}: DropdownMainProps) {
  const { toggleDropdown, isOpen } = useDropdown();
  const ref = useOutsideClick(() => {
    if (isOpen) toggleDropdown();
  });

  return (
    <DropdownContext.Provider
      value={{ isOpen, toggleDropdown, type, isMobile }}
    >
      <div ref={ref} className="relative">
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

const Dropdown = Object.assign(DropdownMain, {
  Trigger: DropdownTrigger,
  List: DropdownList,
  Item: DropdownItem,
});

export default Dropdown;
