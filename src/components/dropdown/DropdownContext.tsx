import { createContext, useContext } from "react";

interface DropdownContextType {
  isOpen: boolean;
  toggleDropdown: () => void;
  type: "genre" | "icon" | "text";
}

const DropdownContext = createContext<DropdownContextType | null>(null);

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (context === null) {
    throw new Error(
      "useDropdownContext must be used within a DropdownProvider",
    );
  }
  return context;
};

export default DropdownContext;
