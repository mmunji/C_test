import clsx from "clsx";
import React, { Dispatch, SetStateAction } from "react";

import Button from "@/components/buttons/Button";

interface SignUpGenderProps {
  gender: string;
  setGender: Dispatch<SetStateAction<string>>;
}

export default function SignUpGender({ gender, setGender }: SignUpGenderProps) {
  return (
    <section className="mt-6 Tablet:mt-5">
      <p className="text-White Text-xs-Regular">성별</p>
      <section className="mt-1 flex gap-3">
        <Button
          onClick={() => setGender("M")}
          variant="line"
          size="md"
          className={clsx("w-full rounded-xl", gender === "M" && "bg-D2_Gray")}
        >
          남자
        </Button>
        <Button
          onClick={() => setGender("F")}
          variant="line"
          size="md"
          className={clsx("w-full rounded-xl", gender === "F" && "bg-D2_Gray")}
        >
          여자
        </Button>
        <Button
          onClick={() => setGender("E")}
          variant="line"
          size="md"
          className={clsx("w-full rounded-xl", gender === "E" && "bg-D2_Gray")}
        >
          기타
        </Button>
      </section>
    </section>
  );
}
