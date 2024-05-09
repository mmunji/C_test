import React from "react";

/** 사용 예시
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const ref = useOutsideClick(() => setIsDropdownOpen(false));

  return (
        <div className="relative" ref={ref}>
            < 버튼 >
          <Dropdown
            onClose={() => setIsDropdownOpen(false)}
            isOpen={isDropdownOpen}
            className=""
          >
            <Dropdown.Item onClick={() => console.log("수정")} isFocused>
              수정
            </Dropdown.Item>
            <Dropdown.Item onClick={() => console.log("삭제")}>
              삭제
            </Dropdown.Item>
            <Dropdown.Item onClick={() => console.log("삭제")}>
              삭제2
            </Dropdown.Item>
          </Dropdown>
        </div>
 */

interface DropdownItemProps {
  children: React.ReactNode;
  onClick: () => void; // 클릭 이벤트를 넘겨주세요.
  isGenre?: boolean; // 장르 드롭다운 사용 시 true로 설정해주세요.
  isFocused?: boolean; // 포커스된 아이템에게 true로 설정해주세요.
  hasIcon?: boolean; // svg를 사용하는 드롭다운의 경우 true로 설정해주세요.  (< hasIcon || isGenre || 기본 > 값으로 패딩이 적용됩니다.)
}
interface DropdownMainProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void; // 아이템 클릭 이벤트가 작동 후에 콜백으로 onClose 함수가 실행됩니다.
  isGenre?: boolean; // 장르 드롭다운 사용 시 true로 설정해주세요.
  className?: string; // "bottom-5 left-5" 등 추가하여 디테일한 위치를 설정할 수 있습니다.
}

function DropdownItem({
  children,
  onClick,
  isGenre = false,
  isFocused = false,
  hasIcon = false,
}: DropdownItemProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`relative ${isGenre ? "px-6 py-2" : hasIcon ? "p-3" : "px-3 py-2"} ${isFocused ? "bg-D2_Gray" : ""} ${!isGenre ? "item-border" : ""} flex justify-center rounded-lg hover:bg-D2_Gray active:bg-D3_Gray`}
    >
      {children}
    </button>
  );
}

function DropdownMain({
  children,
  className,
  isOpen,
  onClose,
  isGenre = false,
}: DropdownMainProps) {
  if (!isOpen) return null;
  return (
    <div
      className={`
      ${isGenre ? "grid min-w-[198px] grid-cols-2 gap-x-5 gap-y-3" : "flex flex-col gap-2"}
      absolute whitespace-nowrap rounded-xl border border-D2_Gray bg-D1_Gray p-2 shadow-[0_4px_10px_0_rgba(0,0,0,0.3)] ${className || ""}`}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const childElement = child as React.ReactElement;
          return React.cloneElement(childElement, {
            onClick: () => {
              child.props.onClick();
              onClose();
            },
          });
        }
        return child;
      })}
    </div>
  );
}

const Dropdown = Object.assign(DropdownMain, {
  Item: DropdownItem,
});

export default Dropdown;
