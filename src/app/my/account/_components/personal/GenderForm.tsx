import { useState } from "react";

import Button from "@/components/buttons/Button";
import useDevice from "@/hooks/useDevice";

type Gender = "남자" | "여자" | "기타";

const GENDERS: Gender[] = ["남자", "여자", "기타"];

export default function GenderForm() {
  const { isMobile } = useDevice();
  const [isEditingGender, setIsEditingGender] = useState(false);
  const [gender, setGender] = useState<Gender>("남자");

  return (
    <div className="flex items-center">
      <div className="flex flex-1 items-center gap-5 Tablet:gap-1">
        <span className="w-12 text-Gray_Orange Tablet:w-[120px]">성별</span>
        {isEditingGender ? (
          <div className="flex gap-2 Tablet:gap-3">
            {GENDERS.map((g) => (
              <Button
                onClick={() => setGender(g)}
                className="px-3 py-[6px] Text-s-Medium Tablet:px-4 Tablet:py-2 Tablet:Text-m-Medium"
                focus={gender === g ? "1" : "none"}
                key={g}
                variant={"line"}
                size={"sm"}
                type="button"
              >
                {g}
              </Button>
            ))}
          </div>
        ) : (
          <span className="">{gender}</span>
        )}
      </div>
      <Button
        size={!isMobile && isEditingGender ? "md" : "none"}
        focus={isMobile && isEditingGender ? "1" : "none"}
        variant={!isMobile && isEditingGender ? "orange" : "text"}
        onClick={() => setIsEditingGender((prev) => !prev)}
      >
        {isEditingGender ? "완료" : "변경"}
      </Button>
    </div>
  );
}
