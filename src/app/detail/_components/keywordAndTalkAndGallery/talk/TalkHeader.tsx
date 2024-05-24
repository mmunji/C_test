import Image from "next/image";
import { useState } from "react";

import Dropdown from "@/components/dropdown";

import { TalkFilter } from "../../../../../../public/icons";

export default function TalkHeader() {
  const filters = ["좋아요순", "최신순"];
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  return (
    <section className="mb-4 flex h-10 items-center justify-between Tablet:mb-6">
      <section className="flex items-center gap-[14px]">
        <p className="text-Silver Text-m-Bold Tablet:Text-l-Bold">웡카 TALK</p>
        <p className="text-Primary Text-m-Bold Tablet:Text-l-Bold">0,000</p>
      </section>

      <Dropdown>
        <Dropdown.Trigger>
          <section className="flex gap-1">
            <Image src={TalkFilter} alt="필터" />
            <p className="text-Gray_Orange Text-s-Medium">{activeFilter}</p>
          </section>
        </Dropdown.Trigger>

        <Dropdown.List className="right-0 top-11">
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
