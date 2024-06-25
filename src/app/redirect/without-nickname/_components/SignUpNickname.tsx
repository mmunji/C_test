import React from "react";

export default function SignUpNickname() {
  return (
    <section>
      <p className="text-White Text-xs-Regular">닉네임</p>
      <input
        type="text"
        className="mt-2 h-12 w-full rounded-xl border-[1px] border-Gray bg-transparent px-5 py-3 outline-none Text-m-Medium"
      />
    </section>
  );
}
