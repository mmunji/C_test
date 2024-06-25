import React from "react";

export default function SignUpNickname() {
  return (
    <section>
      <label className="text-White Text-xs-Regular">닉네임</label>
      <input
        type="text"
        className="mt-2 w-full rounded-xl border-[1px] border-Gray bg-transparent px-5 py-3 outline-none Text-m-Medium"
      />
    </section>
  );
}
