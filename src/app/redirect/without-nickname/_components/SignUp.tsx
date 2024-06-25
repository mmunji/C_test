import React from "react";

import Button from "@/components/buttons/Button";

import SignUpBirth from "./SignUpBirth";
import SignUpGender from "./SignUpGender";
import SignUpNickname from "./SignUpNickname";

export default function SignUp() {
  return (
    <div className="fixed inset-0 z-[99] min-h-[100vh] w-full bg-BG Tablet:flex Tablet:items-center">
      <div className="mx-5 h-full Tablet:mx-auto Tablet:h-[686px] Tablet:w-[504px] Tablet:rounded-xl Tablet:bg-D1_Gray Tablet:px-[72px] Tablet:py-[64px]">
        <div className="mt-11">
          <h1 className="mb-[52px] Text-xl-Bold">
            멋진 닉네임과
            <br /> 간단한 정보를 입력해주세요.
          </h1>
          <SignUpNickname />
          <SignUpBirth />
          <SignUpGender />
        </div>
        <Button
          size="lg"
          variant="orange"
          className="fixed bottom-0 left-0 w-full"
        >
          회원가입
        </Button>
      </div>
    </div>
  );
}
