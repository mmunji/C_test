"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Button from "@/components/buttons/Button";
import useDevice from "@/hooks/useDevice";

type NicknameSchemaType = z.infer<typeof NicknameSchema>;

const NicknameSchema = z.object({
  nickname: z
    .string()
    .regex(/^(?=.*[a-zA-Z0-9가-힣])[a-zA-Z0-9가-힣]{1,10}$/, ""),
});

let nickname = "영화쳐돌이";
export default function Account() {
  const {
    register,
    watch,
    clearErrors,
    setFocus,
    reset,
    formState: { errors },
  } = useForm<NicknameSchemaType>({
    resolver: zodResolver(NicknameSchema),
    mode: "onChange",
    defaultValues: { nickname },
  });
  const { isMobile } = useDevice();
  const [isEditingNickname, setIsEditingNickname] = useState(false);
  const handleNicknameChange = () => {
    if (isEditingNickname) {
      if (errors.nickname) {
        reset();
        clearErrors();
      } else if (nickname !== watch("nickname")) {
        nickname = watch("nickname");
      }
    }
    setIsEditingNickname((prev) => !prev);
  };

  useEffect(() => {
    if (isEditingNickname) setFocus("nickname");
  }, [isEditingNickname, setFocus]);

  return (
    <div className="flex flex-col gap-2 rounded-xl bg-D1_Gray px-4 py-2 Text-s-Medium Tablet:px-8 Tablet:py-4 Tablet:Text-m-Medium">
      <div className="flex">
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
                  autoComplete={"off"}
                  placeholder={nickname}
                  {...register("nickname")}
                  type="text"
                  className="w-[180px] rounded-lg bg-Black py-1 pl-3 pr-[50px] text-Silver outline-none Text-s-Medium placeholder:text-Gray Tablet:pl-4 Tablet:Text-m-Medium"
                />
                <span
                  className={`${errors.nickname ? "text-Error" : "text-Gray"} absolute bottom-1/2 right-2 translate-y-1/2 Text-xs-Regular`}
                >
                  {watch("nickname").length}/10
                </span>
              </div>
              {errors.nickname && errors.nickname.message && (
                <span className="flex text-Error Text-xs-Regular Tablet:items-center">
                  {errors.nickname.message}
                </span>
              )}
              {nickname !== watch("nickname") && !errors.nickname && (
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
          focus={!errors.nickname && isEditingNickname ? "1" : "none"}
          onClick={handleNicknameChange}
          size={
            !isMobile && isEditingNickname && !errors.nickname ? "md" : "none"
          }
          variant={
            !isMobile && isEditingNickname && !errors.nickname
              ? "orange"
              : "text"
          }
        >
          {isEditingNickname ? (errors.nickname ? "취소" : "완료") : "변경"}
        </Button>
      </div>
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
