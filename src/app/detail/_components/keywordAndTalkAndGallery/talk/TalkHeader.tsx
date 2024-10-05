import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

import useTotalTalksStore from "@/app/detail/_stores/useTotalTalksStore";
import Button from "@/components/buttons/Button";
import Dropdown from "@/components/dropdown/dropdown";

import { Filter } from "../../../../../../public/icons";

interface TalkHeaderProps {
  title: string;
  activeFilter: string;
  filters: string[];
  setActiveFilter: Dispatch<SetStateAction<string>>;
}

export default function TalkHeader({
  title,
  activeFilter,
  filters,
  setActiveFilter,
}: TalkHeaderProps) {
  const { totalTalks } = useTotalTalksStore();

  return (
    <section className="relative mb-4 flex h-10 items-center justify-between Tablet:mb-6">
      <section className="flex items-center gap-[14px]">
        <p className="text-Silver Text-m-Bold Tablet:Text-l-Bold">
          {title} TALK
        </p>
        <p className="text-Primary Text-m-Bold Tablet:Text-l-Bold">
          {totalTalks.toLocaleString()}
        </p>
      </section>

      <Dropdown>
        <Dropdown.Trigger>
          <Button variant={"textIconL"} className="Text-s-Medium">
            <Image alt="필터" src={Filter} />
            <span>{activeFilter}</span>
          </Button>
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
