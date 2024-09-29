import Image from "next/image";

import Button from "@/components/buttons/Button";
import CommonTab from "@/components/commonTab/CommonTab";
import Dropdown from "@/components/dropdown/dropdown";

import { Filter } from "../../../../public/icons";

interface ActivityHeaderProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  activeFilter: Filter;
  setActiveFilter: React.Dispatch<React.SetStateAction<Filter>>;
}

const filterMap = { desc: "최신순", asc: "오래된순", like: "좋아요순" };

export default function ActivityHeader({
  activeTab,
  setActiveTab,
  tabs,
  activeFilter,
  setActiveFilter,
}: ActivityHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <CommonTab
        cb={() => setActiveFilter("desc")}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
      />
      <Dropdown>
        <Dropdown.Trigger>
          <Button variant={"textIconL"} className="Text-s-Medium">
            <Image alt="필터 아이콘" src={Filter} />
            <span>{filterMap[activeFilter]}</span>
          </Button>
        </Dropdown.Trigger>
        <Dropdown.List>
          <Dropdown.Item onClick={() => setActiveFilter("desc")}>
            최신순
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setActiveFilter("asc")}>
            오래된순
          </Dropdown.Item>
          {activeTab === tabs[0] && (
            <Dropdown.Item onClick={() => setActiveFilter("like")}>
              좋아요순
            </Dropdown.Item>
          )}
        </Dropdown.List>
      </Dropdown>
    </div>
  );
}
