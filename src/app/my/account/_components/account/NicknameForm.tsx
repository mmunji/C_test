"use client";
import React, { useEffect, useRef, useState } from "react";
import { z } from "zod";

import { NicknameChangeButton } from "@/app/my/_components/buttons";
import { AccountFormLabel } from "@/app/my/_components/Labels";
import useDebounce from "@/hooks/useDebounce";
import { changeUserInfo, verifyNickname } from "@/services/my/actions";
import useMyInfoStore from "@/stores/useMyInfoStore";
import { nincknameRegex } from "@/utils/regex";
const nicknameSchema = z.object({
  nickname: z.string().regex(nincknameRegex),
});

interface AccountFormProps {
  nickname: string;
}

export default function AccountNicknameForm({ nickname }: AccountFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const nicknameRef = useRef<HTMLInputElement>(null);
  const [newNickname, setNewNickname] = useState(nickname);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);
  const debouncedNickname = useDebounce(newNickname, 500);
  const setMyInfo = useMyInfoStore((state) => state.setMyInfo);
  const reset = () => {
    setError(null);
    setNewNickname(nickname);
    setIsEditing(false);
  };

  const handleEscape = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") reset();
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewNickname(value);
    setError(null);
    const result = nicknameSchema.safeParse({ nickname: value });
    if (!result.success) return setError("닉네임이 올바르지 않습니다,");
  };

  const handleSubmit = async () => {
    if (error) return reset();
    setLoading(true);
    const result = await changeUserInfo(newNickname, "nickname");
    setMyInfo({ nickname: newNickname });
    setLoading(false);
    if (result.state) return setIsEditing(false);
    setError("이미 사용 중인 닉네임이에요.");
  };

  useEffect(() => {
    if (isEditing) nicknameRef.current?.focus();
  }, [isEditing]);

  useEffect(() => {
    const verify = async () => {
      if (error || nickname === debouncedNickname) return;
      const verified = await verifyNickname(debouncedNickname);
      if (verified) setError("이미 사용 중인 닉네임이에요.");
    };
    verify();
  }, [debouncedNickname, error, nickname]);
  return (
    <div className="flex">
      <div className="flex flex-1 gap-5 Tablet:gap-1">
        <AccountFormLabel>닉네임</AccountFormLabel>
        {isEditing ? (
          <div className="flex flex-col Tablet:flex-row Tablet:gap-2">
            <div className="relative flex h-10 items-center">
              <input
                value={newNickname}
                onChange={handleChange}
                maxLength={10}
                placeholder={nickname}
                ref={nicknameRef}
                onKeyDown={handleEscape}
                type="text"
                className="w-[180px] rounded-lg bg-Black py-1 pl-3 pr-[50px] text-Silver outline-none Text-s-Medium placeholder:text-Gray Tablet:pl-4 Tablet:Text-m-Medium"
              />
              <span
                className={`${error ? "text-Error" : "text-Gray"} absolute bottom-1/2 right-2 translate-y-1/2 Text-xs-Regular`}
              >
                {newNickname.length}/10
              </span>
            </div>
            {error ? (
              <span className="flex text-Error Text-xs-Regular Tablet:items-center">
                {error}
              </span>
            ) : (
              <span className="flex text-Success Text-xs-Regular Tablet:items-center">
                멋진 닉네임이에요!
              </span>
            )}
          </div>
        ) : (
          <div className="flex h-10 items-center">
            <span className="">{newNickname}</span>
          </div>
        )}
      </div>
      {isEditing ? (
        <NicknameChangeButton
          disabled={loading}
          error={!!error}
          isEditing={isEditing}
          onClick={handleSubmit}
        >
          {error ? "취소" : "완료"}
        </NicknameChangeButton>
      ) : (
        <NicknameChangeButton
          type="button"
          error={!!error}
          isEditing={isEditing}
          onClick={() => setIsEditing(true)}
        >
          변경
        </NicknameChangeButton>
      )}
    </div>
  );
}
