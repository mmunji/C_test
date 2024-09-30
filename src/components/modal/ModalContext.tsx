import { createContext, useContext } from "react";

interface ModalContextType {
  isChecked: boolean;
  hasCheckbox: boolean;
  toggleCheckbox: () => void;
  onClose: () => void;
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
