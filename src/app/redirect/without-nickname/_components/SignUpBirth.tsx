import dayjs from "dayjs";
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

interface BirthValues {
  year: string;
  month: string;
  day: string;
}

interface SignUpBirthProps {
  birthValues: BirthValues;
  setBirthValues: Dispatch<SetStateAction<BirthValues>>;
}

export default function SignUpBirth({
  birthValues,
  setBirthValues,
}: SignUpBirthProps) {
  const [error, setError] = useState(false);
  const today = dayjs();
  const hundredYearsAgo = today.subtract(100, "year");

  const validateBirthday = (name: keyof BirthValues, value: string) => {
    const userBirthday = `${name === "year" ? value : birthValues.year}/${name === "month" ? value : birthValues.month}/${name === "day" ? value : birthValues.day}`;

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
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const filteredValue = value.replace(/\D/g, "");
    setBirthValues((prev) => {
      const newBirthValues = { ...prev, [name]: filteredValue };
      validateBirthday(name as keyof BirthValues, filteredValue);
      return newBirthValues;
    });
  };

  return (
    <section className="mt-6 Tablet:mt-8 Laptop:mt-7 Desktop:mt-8">
      <p className="text-White Text-xs-Regular">생년월일</p>
      <section className="mt-1 flex h-12 items-center gap-3">
        <section className="flex-grow-1 flex items-center gap-2">
          <input
            type="text"
            name="year"
            value={birthValues.year}
            onChange={handleChange}
            maxLength={4}
            placeholder="YYYY"
            className={`h-12 w-full rounded-xl border-[1px] ${error ? "border-red-500" : "border-Gray"} bg-transparent p-3 text-center outline-none Text-m-Medium placeholder:text-Gray`}
          />
          <p className="text-Gray Text-m-Medium">년</p>
        </section>
        <section className="flex-grow-1 flex items-center gap-2">
          <input
            type="text"
            name="month"
            value={birthValues.month}
            onChange={handleChange}
            maxLength={2}
            placeholder="MM"
            className={`h-12 w-full rounded-xl border-[1px] ${error ? "border-red-500" : "border-Gray"} bg-transparent p-3 text-center outline-none Text-m-Medium placeholder:text-Gray`}
          />
          <p className="text-Gray Text-m-Medium">월</p>
        </section>
        <section className="flex-grow-1 flex items-center gap-2">
          <input
            type="text"
            name="day"
            value={birthValues.day}
            onChange={handleChange}
            maxLength={2}
            placeholder="DD"
            className={`h-12 w-full rounded-xl border-[1px] ${error ? "border-red-500" : "border-Gray"} bg-transparent p-3 text-center outline-none Text-m-Medium placeholder:text-Gray`}
          />
          <p className="text-Gray Text-m-Medium">일</p>
        </section>
      </section>
      {error && (
        <p className="mt-2 text-red-500 Text-xs-Regular">
          올바른 생년월일을 입력하세요.
        </p>
      )}
    </section>
  );
}
