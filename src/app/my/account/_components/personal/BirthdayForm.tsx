import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useState } from "react";

import Button from "@/components/buttons/Button";
import useDevice from "@/hooks/useDevice";

dayjs.extend(customParseFormat);

interface Birthday {
  year: string;
  month: string;
  day: string;
}

let BIRTHDAY = { year: "2000", month: "11", day: "17" };
const today = dayjs();
const hundredYearsAgo = dayjs().subtract(100, "year");
export default function BirthdayForm() {
  const { isMobile } = useDevice();
  const [isEditingBirthday, setIsEditingBirthday] = useState(false);
  const [birthday, setBirthday] = useState<Birthday>(BIRTHDAY);
  const [birthdayError, setBirthdayError] = useState(false);

  const handleBirthdayChangeButtonClick = () => {
    if (birthdayError) {
      setBirthday(BIRTHDAY);
      setBirthdayError(false);
    } else {
      BIRTHDAY = birthday;
    }
    setIsEditingBirthday((prev) => !prev);
  };

  const handlePadBirthday = (field: keyof Birthday) => {
    if (!birthday[field].length) return;
    setBirthday((prev) => ({
      ...prev,
      [field]: birthday[field].padStart(2, "0"),
    }));
  };

  const handleBirthdayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (birthdayError) setBirthdayError(false);
    const { name, value } = e.target;
    const newValue = value.replace(/[^0-9.]/g, "");
    setBirthday((prev) => ({ ...prev, [name]: newValue }));
    validateBirthday(name as keyof Birthday, newValue);
  };

  const validateBirthday = (name: keyof Birthday, value: string) => {
    const userBirthday = `${name === "year" ? value : birthday.year}/${name === "month" ? value : birthday.month}/${name === "day" ? value : birthday.day}`;
    if (
      (name === "year" && +value < hundredYearsAgo.year()) ||
      dayjs(userBirthday).isAfter(today) ||
      dayjs(userBirthday).isBefore(hundredYearsAgo) ||
      !dayjs(
        userBirthday,
        ["YYYY/MM/DD", "YYYY/MM/D", "YYYY/M/DD"],
        true,
      ).isValid()
    ) {
      setBirthdayError(true);
    }
  };

  return (
    <div className="flex">
      <div className="flex flex-1 gap-5 Tablet:gap-1">
        <span className="flex h-[40px] w-12 items-center text-Gray_Orange Tablet:w-[120px]">
          생년월일
        </span>
        {isEditingBirthday ? (
          <div className="flex flex-col Tablet:flex-row Tablet:gap-2">
            <div className="flex h-10 items-center gap-1">
              <input
                placeholder="년도"
                type="string"
                maxLength={4}
                name="year"
                value={birthday.year}
                onChange={handleBirthdayChange}
                className="w-[57px] rounded-lg bg-Black px-3 py-1 text-center outline-none Text-s-Medium placeholder:text-Gray Tablet:w-[71px] Tablet:px-4 Tablet:Text-m-Medium"
              />
              <span className="mx-1 Text-s-Medium Tablet:Text-m-Medium">/</span>
              <input
                placeholder="월"
                type="string"
                maxLength={2}
                name="month"
                value={birthday.month}
                onChange={handleBirthdayChange}
                onBlur={() => handlePadBirthday("month")}
                className="w-[41px] rounded-lg bg-Black px-3 py-1 text-center outline-none Text-s-Medium placeholder:text-Gray Tablet:w-[52px] Tablet:px-4 Tablet:Text-m-Medium"
              />
              <span className="mx-1 Text-s-Medium Tablet:Text-m-Medium">/</span>
              <input
                placeholder="일"
                type="string"
                maxLength={2}
                name="day"
                value={birthday.day}
                onChange={handleBirthdayChange}
                onBlur={() => handlePadBirthday("day")}
                className="w-[41px] rounded-lg bg-Black px-3 py-1 text-center outline-none Text-s-Medium placeholder:text-Gray Tablet:w-[52px] Tablet:px-4 Tablet:Text-m-Medium"
              />
            </div>
            {birthdayError && (
              <span className="flex text-Error Text-xs-Regular Tablet:items-center">
                올바르게 입력해주세요.
              </span>
            )}
          </div>
        ) : (
          <span className="flex h-10 items-center">
            {birthday.year} / {birthday.month} / {birthday.day}
          </span>
        )}
      </div>
      <Button
        size={!isMobile && isEditingBirthday && !birthdayError ? "md" : "none"}
        focus={isEditingBirthday && !birthdayError ? "1" : "none"}
        variant={
          !isMobile && isEditingBirthday && !birthdayError ? "orange" : "text"
        }
        onClick={handleBirthdayChangeButtonClick}
      >
        {isEditingBirthday ? (birthdayError ? "취소" : "완료") : "변경"}
      </Button>
    </div>
  );
}
