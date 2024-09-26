import Image from "next/image";

import { WithChildren } from "@/components/modal/_components/ModalMain";
import { REPORT_TYPE } from "@/components/modal/_components/ModalReport";
import { useModalContext } from "@/components/modal/ModalContext";

import { SquareCheckFillMd, SquareCheckMd } from "../../../../public/icons";

interface ModalButtonProps extends WithChildren {
  onClick: (type?: string, reason?: string) => void;
}
interface ModalCancelButtonProps extends WithChildren {}
interface ModalChcekboxProps extends WithChildren {}

export function ModalButton({ children, onClick }: ModalButtonProps) {
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
      className="w-full rounded-lg bg-Primary px-9 py-2 text-white Text-s-Medium hover:bg-Shade_1 active:bg-Shade_3 disabled:bg-D2_Gray disabled:text-Gray Tablet:rounded-xl Tablet:px-5 Tablet:py-3 Tablet:Text-m-Medium"
    >
      {children}
    </button>
  );
}

export function ModalCancelButton({ children }: ModalCancelButtonProps) {
  const { onClose } = useModalContext();
  return (
    <button
      onClick={onClose}
      className="w-full whitespace-nowrap rounded-lg border border-Gray bg-none px-9 py-2 text-white Text-s-Regular hover:border-Silver active:bg-D1_Gray Tablet:whitespace-normal Tablet:rounded-xl Tablet:px-5 Tablet:py-3 Tablet:Text-m-Medium"
    >
      {children}
    </button>
  );
}

export function ModalCheckbox({ children }: ModalChcekboxProps) {
  const { isChecked, toggleChceked } = useModalContext();

  return (
    <>
      <button type="button" id="checkbox" onClick={toggleChceked} className="">
        {isChecked ? (
          <Image
            src={SquareCheckFillMd}
            alt="checkbox"
            width={24}
            height={24}
          />
        ) : (
          <Image src={SquareCheckMd} alt="checkbox" width={24} height={24} />
        )}
      </button>
      <label htmlFor="checkbox" className="cursor-pointer">
        {children}
      </label>
    </>
  );
}
