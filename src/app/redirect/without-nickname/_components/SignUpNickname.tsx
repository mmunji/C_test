import React, { Dispatch, SetStateAction, useState } from "react";

import { nicknameRegex } from "@/utils/regex";

interface SignUpNicknameProps {
  nickname: string;
  setNickname: Dispatch<SetStateAction<string>>;
  nickError: boolean;
  setNickError: Dispatch<SetStateAction<boolean>>;
}

export default function SignUpNickname({
  nickname,
  setNickname,
  nickError,
  setNickError,
}: SignUpNicknameProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNickname(value);

    if (nicknameRegex.test(value)) {
      setNickError(false);
    } else {
      setNickError(true);
    }
  };

  return (
    <section>
      <p className="text-White Text-xs-Regular">닉네임</p>
      <input
        type="text"
        name="nickname"
        value={nickname}
        onChange={handleChange}
        className={`mt-2 h-12 w-full rounded-xl border-[1px] ${nickError ? "border-red-500" : "border-Gray"} bg-transparent px-5 py-3 outline-none Text-m-Medium`}
      />
      {nickError && (
        <p className="mt-2 text-red-500 Text-xs-Regular">
          닉네임은 1자 이상 10자 이하의 영문, 숫자, 한글만 가능합니다.
        </p>
      )}
    </section>
  );
}
