import Image from "next/image";
import React, { FormEvent, useState } from "react";

import Button from "@/components/buttons/Button";
import { authAPIS } from "@/services/auth/authAPIs";

import { FullLogo } from "../../../../../public/images";
import SignUpBirth from "./SignUpBirth";
import SignUpGender from "./SignUpGender";
import SignUpNickname from "./SignUpNickname";
import SignUpTitle from "./SignUpTitle";

interface SignUpProps {
  userInfo: UserInfo;
}

interface UserInfo {
  nickname: string;
  birthday: string;
  gender: string;
}

export default function SignUp({ userInfo }: SignUpProps) {
  const year = userInfo.birthday.split("").slice(0, 4).join("");
  const month = userInfo.birthday.split("").slice(5, 7).join("");
  const day = userInfo.birthday.split("").slice(8, 10).join("");

  const [nickname, setNickname] = useState(userInfo.nickname);
  const [birthValues, setBirthValues] = useState({
    year: year,
    month: month,
    day: day,
  });
  const [gender, setGender] = useState(userInfo.gender);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { year, month, day } = birthValues;
      const birthday = `${year}-${month}-${day}`;
      const { res, data } = await authAPIS.signUp(nickname, gender, birthday);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="fixed inset-0 z-[99] min-h-[100vh] w-full overflow-y-auto bg-BG Tablet:flex Tablet:items-center">
      <form
        onSubmit={handleSubmit}
        className="mx-5 flex h-full flex-col Tablet:mx-auto Tablet:h-[686px] Tablet:w-[504px] Tablet:rounded-xl Tablet:bg-D1_Gray Tablet:px-[72px] Tablet:py-[64px] Laptop:h-[545px] Laptop:w-[464px] Laptop:px-[52px] Laptop:py-10 Desktop:h-[686px] Desktop:w-[504px] Desktop:px-[72px] Desktop:py-[64px]"
      >
        <Image
          src={FullLogo}
          alt="logo"
          className="mx-auto hidden h-[34px] w-[204px] Tablet:block"
        />
        <div className="mt-11 Tablet:mt-[52px] Laptop:mt-8 Desktop:mt-[52px]">
          <SignUpTitle />
          <SignUpNickname nickname={nickname} setNickname={setNickname} />
          <SignUpBirth
            birthValues={birthValues}
            setBirthValues={setBirthValues}
          />
          <SignUpGender gender={gender} setGender={setGender} />
        </div>

        <Button
          type="submit"
          size="lg"
          variant="orange"
          className="fixed bottom-0 left-0 w-full Tablet:static Tablet:mt-auto"
        >
          회원가입
        </Button>
      </form>
    </div>
  );
}
