"use client";

import { useState } from "react";

export default function Page() {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="flex flex-col gap-3 px-5 Tablet:px-0">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center Text-m-Bold Tablet:Text-l-Bold">
          <span className="hidden Tablet:block">찜한 작품 20개</span>
          <span className="block Tablet:hidden">총 20개</span>
        </h2>
        {isEditing ? (
          <div className="flex gap-2 Text-m-Medium">
            <button
              type="button"
              className="hidden p-2 text-Error Tablet:block"
            >
              삭제
            </button>
            <button
              type="button"
              className="hidden p-2 text-Gray_Orange Tablet:block"
            >
              선택 해제
            </button>
            <button
              onClick={() => setIsEditing(false)}
              type="button"
              className="p-2 text-Gray_Orange"
            >
              완료
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            type="button"
            className="p-2 text-Gray_Orange Text-m-Medium"
          >
            편집
          </button>
        )}
      </div>
      <div className="grid grid-cols-2 gap-2 Tablet:grid-cols-3 Tablet:gap-x-5 Tablet:gap-y-4 Laptop:grid-cols-4 Laptop:gap-x-6 Laptop:gap-y-5">
        {Array(20)
          .fill("")
          .map((_, i) => (
            <button key={i} type="button">
              <div className="h-[230px] rounded-xl bg-Gray  Tablet:h-[288px] Laptop:h-[331px]" />
            </button>
          ))}
      </div>
      {isEditing && (
        <div className="fixed bottom-0 left-0 flex w-screen items-center border-t border-D2_Gray bg-D1_Gray py-[6px] pb-6 Text-m-Medium Tablet:hidden">
          <button type="button" className="flex-1 p-2">
            선택 해제
          </button>
          <button type="button" className="flex-1 p-2 text-Error">
            삭제
          </button>
        </div>
      )}
    </div>
  );
}
