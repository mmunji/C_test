import {
  ChangeEvent,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

interface ModalContextType {
  isChecked: boolean;
  toggleChceked: () => void;
  hasCheckbox: boolean;
  hasReport: boolean;
  hasDescription: boolean;
  selectedIndex: number;
  onDetailedReasonChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  detailedReason: string;
  onSelectedIndexChange: (index: number) => void;
  onClose: () => void;
  isAlertModal: boolean;
  isDropdownOpen: boolean;
  setIsDropdownOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalContext = createContext<ModalContextType | null>(null);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (context === null) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
};

export default ModalContext;
