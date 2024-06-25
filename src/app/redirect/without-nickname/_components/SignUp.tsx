import Image from "next/image";
import React, { useState } from "react";

import Button from "@/components/buttons/Button";

import SignUpBirth from "./SignUpBirth";
import SignUpGender from "./SignUpGender";
import SignUpNickname from "./SignUpNickname";
import SignUpTitle from "./SignUpTitle";

export default function SignUp() {
  const [birthValues, setBirthValues] = useState({
    year: "",
    month: "",
    day: "",
  });
  const [gender, setGender] = useState("");

  return (
    <div className="fixed inset-0 z-[99] min-h-[100vh] w-full overflow-y-auto bg-BG Tablet:flex Tablet:items-center">
      <div className="mx-5 flex h-full flex-col Tablet:mx-auto Tablet:h-[686px] Tablet:w-[504px] Tablet:rounded-xl Tablet:bg-D1_Gray Tablet:px-[72px] Tablet:py-[64px]">
        <Image
          src=""
          alt=""
          className="mx-auto hidden h-[50px] w-[158px] bg-[#a4a4a4] Tablet:block"
        />
        <div className="mt-11 Tablet:mt-[52px]">
          <SignUpTitle />
          <SignUpNickname />
          <SignUpBirth
            birthValues={birthValues}
            setBirthValues={setBirthValues}
          />
          <SignUpGender gender={gender} setGender={setGender} />
        </div>

        <Button
          size="lg"
          variant="orange"
          className="fixed bottom-0 left-0 w-full Tablet:static Tablet:mt-auto"
        >
          회원가입
        </Button>
      </div>
    </div>
  );
}
