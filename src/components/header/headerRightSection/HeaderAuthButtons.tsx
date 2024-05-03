import React from "react";

function HeaderAuthButtons() {
  return (
    <section className="flex gap-8">
      <button className="h-10 p-2 text-regular font-Medium text-White">
        로그인
      </button>

      <button className="rounded-[8px] bg-Primary px-4 text-regular font-Medium text-White">
        회원가입
      </button>
    </section>
  );
}

export default HeaderAuthButtons;
