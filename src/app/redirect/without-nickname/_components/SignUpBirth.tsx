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
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const filteredValue = value.replace(/\D/g, "");
    setBirthValues((prev) => ({ ...prev, [name]: filteredValue }));
  };

  return (
    <section className="mt-6 Tablet:mt-8">
      <p className="text-White Text-xs-Regular">생년월일</p>
      <section className="mt-1 flex h-12 items-center gap-3">
        <section className="flex-grow-1 flex items-center gap-2">
          <input
            type="text"
            name="year"
            value={birthValues.year}
            onChange={(e) => handleChange(e)}
            maxLength={4}
            placeholder="YYYY"
            className="h-12 w-full rounded-xl border-[1px] border-Gray bg-transparent p-3 text-center outline-none Text-m-Medium placeholder:text-Gray"
          />
          <p className="text-Gray Text-m-Medium">년</p>
        </section>
        <section className="flex-grow-1 flex items-center gap-2">
          <input
            type="text"
            name="month"
            value={birthValues.month}
            onChange={(e) => handleChange(e)}
            maxLength={2}
            placeholder="MM"
            className="h-12 w-full rounded-xl border-[1px] border-Gray bg-transparent p-3 text-center outline-none Text-m-Medium placeholder:text-Gray"
          />
          <p className="text-Gray Text-m-Medium">월</p>
        </section>
        <section className="flex-grow-1 flex items-center gap-2">
          <input
            type="text"
            name="day"
            value={birthValues.day}
            onChange={(e) => handleChange(e)}
            maxLength={2}
            placeholder="DD"
            className="h-12 w-full rounded-xl border-[1px] border-Gray bg-transparent p-3 text-center outline-none Text-m-Medium placeholder:text-Gray"
          />
          <p className="text-Gray Text-m-Medium">일</p>
        </section>
      </section>
    </section>
  );
}
