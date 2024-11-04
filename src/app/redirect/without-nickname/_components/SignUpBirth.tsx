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
  birthError: boolean;
  setBirthError: Dispatch<SetStateAction<boolean>>;
}

export default function SignUpBirth({
  birthValues,
  setBirthValues,
  birthError,
  setBirthError,
}: SignUpBirthProps) {
  const today = dayjs();
  const hundredYearsAgo = today.subtract(100, "year");

  const validateBirthday = (year: string, month: string, day: string) => {
    if (!year || !month || !day) {
      setBirthError(true);
      return;
    }

    // month와 day를 두 자리로 패딩 처리
    const paddedMonth = month.padStart(2, "0");
    const paddedDay = day.padStart(2, "0");

    const isMonthValid =
      /^\d{2}$/.test(paddedMonth) && +paddedMonth >= 1 && +paddedMonth <= 12;
    const isDayValid =
      /^\d{2}$/.test(paddedDay) && +paddedDay >= 1 && +paddedDay <= 31;

    if (!isMonthValid || !isDayValid) {
      setBirthError(true);
      return;
    }

    const userBirthday = `${year}/${paddedMonth}/${paddedDay}`;

    if (
      dayjs(
        userBirthday,
        ["YYYY/MM/DD", "YYYY/MM/D", "YYYY/M/DD"],
        true,
      ).isValid() &&
      !dayjs(userBirthday).isAfter(today) &&
      !dayjs(userBirthday).isBefore(hundredYearsAgo)
    ) {
      setBirthError(false);
    } else {
      setBirthError(true);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const filteredValue = value.replace(/\D/g, "");
    setBirthValues((prev) => {
      const newBirthValues = { ...prev, [name]: filteredValue };
      const { year, month, day } = newBirthValues;
      validateBirthday(year, month, day);
      return newBirthValues;
    });
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "month" || name === "day") {
      const formattedValue = value.padStart(2, "0"); // 한 자리일 경우 앞에 0을 추가
      setBirthValues((prev) => ({
        ...prev,
        [name]: formattedValue,
      }));
    }
  };

  return (
    <section className="mt-6 Tablet:mt-7 Laptop:mt-5 Desktop:mt-7">
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
            className={`h-12 w-full rounded-xl border-[1px] ${birthError ? "border-red-500" : "border-Gray"} bg-transparent p-3 text-center outline-none Text-m-Medium placeholder:text-Gray`}
          />
          <p className="text-Gray Text-m-Medium">년</p>
        </section>
        <section className="flex-grow-1 flex items-center gap-2">
          <input
            type="text"
            name="month"
            value={birthValues.month}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={2}
            placeholder="MM"
            className={`h-12 w-full rounded-xl border-[1px] ${birthError ? "border-red-500" : "border-Gray"} bg-transparent p-3 text-center outline-none Text-m-Medium placeholder:text-Gray`}
          />
          <p className="text-Gray Text-m-Medium">월</p>
        </section>
        <section className="flex-grow-1 flex items-center gap-2">
          <input
            type="text"
            name="day"
            value={birthValues.day}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={2}
            placeholder="DD"
            className={`h-12 w-full rounded-xl border-[1px] ${birthError ? "border-red-500" : "border-Gray"} bg-transparent p-3 text-center outline-none Text-m-Medium placeholder:text-Gray`}
          />
          <p className="text-Gray Text-m-Medium">일</p>
        </section>
      </section>
      {birthError && (
        <p className="mt-2 text-red-500 Text-xs-Regular">
          올바른 생년월일을 입력하세요.
        </p>
      )}
    </section>
  );
}
