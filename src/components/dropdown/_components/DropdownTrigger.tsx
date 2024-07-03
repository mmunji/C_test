import { useDropdownContext } from "@/components/dropdown/DropdownContext";

interface DropdownTriggerProps {
  children: React.ReactNode;
}

export default function DropdownTrigger({ children }: DropdownTriggerProps) {
  const { toggleDropdown } = useDropdownContext();

  return (
    <div className="hover:cursor-pointer" onClick={toggleDropdown}>
      {children}
    </div>
  );
}
