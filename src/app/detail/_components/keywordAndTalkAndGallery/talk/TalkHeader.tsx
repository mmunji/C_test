import Image from "next/image";
import { useState } from "react";

import Dropdown from "@/components/dropdown/Dropdown";

import { Filter } from "../../../../../../public/icons";

export default function TalkHeader() {
  const filters = ["최신순", "좋아요순"];
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  return (
    <section className="relative mb-4 flex h-10 items-center justify-between Tablet:mb-6">
      <section className="flex items-center gap-[14px]">
        <p className="text-Silver Text-m-Bold Tablet:Text-l-Bold">웡카 TALK</p>
        <p className="text-Primary Text-m-Bold Tablet:Text-l-Bold">0,000</p>
      </section>

      <Dropdown>
        <Dropdown.Trigger>
          <section className="flex gap-1">
            <Image src={Filter} alt="필터" />
            <p className="select-none text-Gray_Orange Text-s-Medium Tablet:Text-m-Medium">
              {activeFilter}
            </p>
          </section>
        </Dropdown.Trigger>

        <Dropdown.List>
          {/* <Dropdown.List className="right-0 top-9 select-none"> */}
          {filters.map((filter) => (
            <Dropdown.Item key={filter} onClick={() => setActiveFilter(filter)}>
              {filter}
            </Dropdown.Item>
          ))}
        </Dropdown.List>
      </Dropdown>
    </section>
  );
}
