import clsx from "clsx";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

import useDebounce from "@/hooks/useDebounce";
import { useCheckNickname } from "@/services/auth/authQueries";
import { cn } from "@/utils/cn";
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
    if (!nickError) {
      if (!data?.data) {
        setCheckNickMessage("멋진 닉네임이에요!");
      } else {
        setCheckNickMessage("이미 사용중인 닉네임이에요.");
      }
    }
  }, [nickError, data]);

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
          className={`h-12 w-full rounded-xl border-[1px] ${nickname === "" && nickFocused && "border-Tint_1"} ${nickname === "" && "border-Gray"} ${!data?.data && nickname !== "" && !nickError && "border-Success"} ${(data?.data || nickError) && "border-Error"} bg-transparent px-5 py-3 outline-none Text-m-Medium`}
        />
        <div
          className={clsx(
            "absolute right-5 top-1/2 -translate-y-1/2 Text-m-Medium",
            nickError || data?.data ? "text-Error" : "text-Gray",
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
            nickError) && <p>{nickname.length}/10</p>}
        </div>
      </div>
      {nickError && nickname !== "" && (
        <p className="mt-2 text-Error Text-xs-Regular">
          닉네임은 1자 이상 10자 이하의 영문, 숫자, 한글만 가능합니다.
        </p>
      )}
      {!nickError && nickname !== "" && (
        <p
          className={cn(
            "mt-2 Text-xs-Regular",
            data?.data ? "text-Error" : "text-Success",
          )}
        >
          {checkNickMessage}
        </p>
      )}
    </section>
  );
}
