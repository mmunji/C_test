import { useCallback, useState } from "react";

export default function useDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = useCallback(() => setIsOpen((prev) => !prev), []);

  return { isOpen, toggleDropdown };
}
