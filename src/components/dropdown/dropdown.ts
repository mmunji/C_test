import DropdownItem from "@/components/dropdown/_components/DropdownItem";
import DropdownList from "@/components/dropdown/_components/DropdownList";
import DropdownMain from "@/components/dropdown/_components/DropdownMain";
import DropdownTrigger from "@/components/dropdown/_components/DropdownTrigger";

const Dropdown = Object.assign(DropdownMain, {
  Trigger: DropdownTrigger,
  List: DropdownList,
  Item: DropdownItem,
});

export default Dropdown;
