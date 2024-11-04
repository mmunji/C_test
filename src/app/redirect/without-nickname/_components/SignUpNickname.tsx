import clsx from "clsx";
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
    if (value.length > 10) return;
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
      <div className="relative mt-2">
        <input
          type="text"
          name="nickname"
          maxLength={10}
          value={nickname}
          onChange={handleChange}
          className={`h-12 w-full rounded-xl border-[1px] ${nickError ? "border-Error" : "border-Gray"} bg-transparent px-5 py-3 outline-none Text-m-Medium`}
        />
        <div
          className={clsx(
            "absolute right-5 top-1/2 -translate-y-1/2 Text-m-Medium",
            nickError ? "text-Error" : "text-Gray",
          )}
        >
          {nickname.length}/10
        </div>
      </div>
      {nickError && (
        <p className="mt-2 text-Error Text-xs-Regular">
          닉네임은 1자 이상 10자 이하의 영문, 숫자, 한글만 가능합니다.
        </p>
      )}
    </section>
  );
}
