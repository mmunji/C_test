import Image from "next/image";

import { useModalContext } from "@/components/modal/ModalContext";

import { SquareCheckFillMd, SquareCheckMd } from "../../../../public/icons";

interface ModalButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

export function ModalButton({ children, onClick, disabled }: ModalButtonProps) {
  const { isChecked, hasCheckbox } = useModalContext();
  return (
    <button
      onClick={onClick}
      disabled={hasCheckbox ? !isChecked : disabled}
      className="w-full rounded-xl bg-Primary px-5 py-3 text-white Text-s-Medium hover:bg-Shade_1 active:bg-Shade_3 disabled:bg-D2_Gray disabled:text-Gray Tablet:Text-m-Medium"
    >
      {children}
    </button>
  );
}

export function ModalCancelButton({ children }: { children: React.ReactNode }) {
  const { onClose } = useModalContext();
  return (
    <button
      onClick={onClose}
      className="w-full whitespace-nowrap rounded-xl border border-Gray bg-none px-5 py-3 text-white Text-s-Medium hover:border-Silver active:bg-D1_Gray Tablet:whitespace-normal Tablet:Text-m-Medium"
    >
      {children}
    </button>
  );
}

export function ModalCheckbox({ children }: { children: React.ReactNode }) {
  const { isChecked, toggleCheckbox } = useModalContext();

  return (
    <>
      <button type="button" id="checkbox" onClick={toggleCheckbox}>
        {isChecked ? (
          <Image
            src={SquareCheckFillMd}
            alt="active checkbox"
            width={24}
            height={24}
          />
        ) : (
          <Image
            src={SquareCheckMd}
            alt="inactive checkbox"
            width={24}
            height={24}
          />
        )}
      </button>
      <label htmlFor="checkbox" className="cursor-pointer">
        {children}
      </label>
    </>
  );
}
