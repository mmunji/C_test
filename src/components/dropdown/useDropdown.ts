import { useState } from "react";

export default function useDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return { isOpen, toggleDropdown };
}
