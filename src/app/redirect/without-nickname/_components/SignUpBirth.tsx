import React from "react";

export default function SignUpBirth() {
  return (
    <section className="mt-6 Tablet:mt-8">
      <label className="text-White Text-xs-Regular">생년월일</label>
      <section className="flex items-center gap-3">
        <section className="flex-grow-1 flex items-center gap-2">
          <input
            type="text"
            maxLength={4}
            placeholder="YYYY"
            className="w-full rounded-xl border-[1px] border-Gray bg-transparent p-3 text-center outline-none placeholder:text-Gray"
          />
          <p>년</p>
        </section>
        <section className="flex-grow-1 flex items-center gap-2">
          <input
            type="text"
            maxLength={2}
            placeholder="MM"
            className="w-full rounded-xl border-[1px] border-Gray bg-transparent p-3 text-center outline-none placeholder:text-Gray"
          />
          <p>월</p>
        </section>
        <section className="flex-grow-1 flex items-center gap-2">
          <input
            type="text"
            maxLength={2}
            placeholder="DD"
            className="w-full rounded-xl border-[1px] border-Gray bg-transparent p-3 text-center outline-none placeholder:text-Gray"
          />
          <p>일</p>
        </section>
      </section>
    </section>
  );
}
