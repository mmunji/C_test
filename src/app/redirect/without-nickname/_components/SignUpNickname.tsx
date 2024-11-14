import clsx from "clsx";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import useDebounce from "@/hooks/useDebounce";
import { useCheckNickname } from "@/services/auth/authQueries";
import { cn } from "@/utils/cn";
import { nicknameRegex } from "@/utils/regex";

interface SignUpNicknameProps {
  nickname: string;
  setNickname: Dispatch<SetStateAction<string>>;
  nickError: boolean;
  setNickError: Dispatch<SetStateAction<boolean>>;
  userInfo: UserInfo;
}

interface UserInfo {
  nickname: string;
  birthday: string;
  gender: string;
}

export default function SignUpNickname({
  nickname,
  setNickname,
  nickError,
  setNickError,
  userInfo,
}: SignUpNicknameProps) {
  const [nickFocused, setNickFocused] = useState(false);
  const [checkNickMessage, setCheckNickMessage] = useState("");
  const debouncedValue = useDebounce(nickname, 250);
  const { data } = useCheckNickname(debouncedValue);

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

  useEffect(() => {
    if (nickname === "") {
      setCheckNickMessage("");
      return;
    }

    if (!nickError) {
      if (!data?.data || userInfo.nickname === nickname) {
        setCheckNickMessage("멋진 닉네임이에요!");
      } else {
        setCheckNickMessage("이미 사용중인 닉네임이에요.");
      }
    }
  }, [nickError, data, userInfo.nickname, nickname]);

  const borderColorClass = nickError
    ? "border-Error"
    : data?.data && userInfo.nickname !== nickname
      ? "border-Error"
      : "border-Success";

  const textColorClass = nickError
    ? "text-Error"
    : data?.data && userInfo.nickname !== nickname
      ? "text-Error"
      : "text-Success";

  return (
    <section>
      <p className="text-White Text-xs-Regular">닉네임</p>
      <div className="relative mt-2">
        <input
          type="text"
          name="nickname"
          maxLength={10}
          onFocus={() => setNickFocused(true)}
          onBlur={() => setNickFocused(false)}
          value={nickname}
          onChange={handleChange}
          className={`h-12 w-full rounded-xl border-[1px] ${borderColorClass} bg-transparent px-5 py-3 outline-none Text-m-Medium`}
        />
        <div
          className={clsx(
            "absolute right-5 top-1/2 -translate-y-1/2 Text-m-Medium",
            textColorClass,
            nickname === "" && "text-Gray",
          )}
        >
          {!nickError &&
            checkNickMessage === "멋진 닉네임이에요!" &&
            nickname !== "" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15 10L13 12L11 14L9 12M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                  stroke="#2E7D31"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}

          {(checkNickMessage === "이미 사용중인 닉네임이에요." ||
            nickname === "" ||
            nickError) && <p className="text-Gray">{nickname.length}/10</p>}
        </div>
      </div>
      {nickError && nickname !== "" && (
        <p className="mt-2 text-Error Text-xs-Regular">
          닉네임은 1자 이상 10자 이하의 영문, 숫자, 한글만 가능해요.
        </p>
      )}
      {!nickError && nickname !== "" && (
        <p className={cn("mt-2 Text-xs-Regular", textColorClass)}>
          {checkNickMessage}
        </p>
      )}
    </section>
  );
}
