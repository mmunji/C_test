"use client";
import React, { FormEvent, useEffect, useRef, useState } from "react";

import Button from "@/components/buttons/Button";
import useDevice from "@/hooks/useDevice";
import { nincknameRegex } from "@/utils/regex";

let NICKNAME = "영화쳐돌이";
export default function Account() {
  const [nickname, setNickname] = useState(NICKNAME);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const nicknameRef = useRef<HTMLInputElement>(null);
  const { isMobile } = useDevice();
  const [isEditingNickname, setIsEditingNickname] = useState(false);
  const handleNicknameSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEditingNickname) {
      if (error) {
        setError(false);
        setNickname(NICKNAME);
      } else if (NICKNAME !== nickname) {
        NICKNAME = nickname;
      }
    }
    setIsEditingNickname((prev) => !prev);
  };
  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { value, maxLength } = e.currentTarget;
    if (value.length > maxLength) setNickname(value.slice(0, maxLength));
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const isValid = nincknameRegex.test(value);
    setNickname(value);
    setError(!isValid);
  };

  useEffect(() => {
    if (isEditingNickname) nicknameRef.current?.focus();
  }, [isEditingNickname]);

  return (
    <div className="flex flex-col gap-2 rounded-xl bg-D1_Gray px-4 py-2 Text-s-Medium Tablet:px-8 Tablet:py-4 Tablet:Text-m-Medium">
      <form className="flex" onSubmit={handleNicknameSubmit}>
        <div className="flex flex-1 gap-5 Tablet:gap-1">
          <div className="flex h-10 items-center">
            <span className="w-12 text-Gray_Orange Tablet:w-[120px]">
              닉네임
            </span>
          </div>
          {isEditingNickname ? (
            <div className="flex flex-col Tablet:flex-row Tablet:gap-2">
              <div className="relative flex h-10 items-center">
                <input
                  value={nickname}
                  maxLength={10}
                  placeholder={nickname}
                  ref={nicknameRef}
                  onChange={handleNicknameChange}
                  onKeyUp={handleKeyUp}
                  type="text"
                  className="w-[180px] rounded-lg bg-Black py-1 pl-3 pr-[50px] text-Silver outline-none Text-s-Medium placeholder:text-Gray Tablet:pl-4 Tablet:Text-m-Medium"
                />
                <span
                  className={`${error ? "text-Error" : "text-Gray"} absolute bottom-1/2 right-2 translate-y-1/2 Text-xs-Regular`}
                >
                  {nickname.length}/10
                </span>
              </div>
              {error && errorMessage && (
                <span className="flex text-Error Text-xs-Regular Tablet:items-center">
                  {errorMessage}
                </span>
              )}
              {NICKNAME !== nickname && !error && (
                <span className="flex text-Success Text-xs-Regular Tablet:items-center">
                  멋진 닉네임이에요!
                </span>
              )}
            </div>
          ) : (
            <div className="flex h-10 items-center">
              <span className="">{nickname}</span>
            </div>
          )}
        </div>
        <Button
          type="submit"
          focus={!error && isEditingNickname ? "1" : "none"}
          size={!isMobile && isEditingNickname && !error ? "md" : "none"}
          variant={!isMobile && isEditingNickname && !error ? "orange" : "text"}
        >
          {isEditingNickname ? (error ? "취소" : "완료") : "변경"}
        </Button>
      </form>
      <div className="h-[1px] w-full bg-D2_Gray" />
      <div className="flex items-center">
        <div className="flex h-10 flex-1 items-center gap-5 Tablet:gap-1">
          <span className="w-12 text-Gray_Orange Tablet:w-[120px]">이메일</span>
          <span className="text-Gray">abcdef@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
