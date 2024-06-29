import React, { Dispatch, SetStateAction } from "react";

interface SignUpNicknameProps {
  nickname: string;
  setNickname: Dispatch<SetStateAction<string>>;
}

export default function SignUpNickname({
  nickname,
  setNickname,
}: SignUpNicknameProps) {
  return (
    <section>
      <p className="text-White Text-xs-Regular">닉네임</p>
      <input
        type="text"
        name="nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        className="mt-2 h-12 w-full rounded-xl border-[1px] border-Gray bg-transparent px-5 py-3 outline-none Text-m-Medium"
      />
    </section>
  );
}
