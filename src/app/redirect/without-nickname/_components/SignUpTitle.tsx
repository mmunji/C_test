import React from "react";

export default function SignUpTitle() {
  return (
    <>
      <h1 className="mb-[52px] leading-[140%] Text-xl-Bold Tablet:hidden Laptop:mb-6 Desktop:mb-[52px]">
        멋진 닉네임과
        <br /> 간단한 정보를 입력해주세요.
      </h1>
      <h1 className="mb-[52px] hidden text-center leading-[140%] Text-xxl-Bold Tablet:block Laptop:mb-6 Laptop:Text-xl-Bold Desktop:mb-[52px] Desktop:Text-xxl-Bold">
        멋진 닉네임을 정해주세요.
      </h1>
    </>
  );
}
