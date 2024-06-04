"use client";

import { useState } from "react";

import Placeholder from "@/app/my/_components/Placeholder";
import Button from "@/components/buttons/Button";
export default function Page() {
  const [isEditing, setIsEditing] = useState(false);
  const data = true;
  return (
    <div className="flex flex-col gap-3 px-5 Tablet:px-0">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center Text-m-Bold Tablet:Text-l-Bold">
          <span className="hidden Tablet:block">찜한 작품 20개</span>
          <span className="block Tablet:hidden">총 20개</span>
        </h2>
        <div className="flex gap-2 Text-m-Medium">
          <Button
            variant={"text"}
            onClick={() => console.log("sdf")}
            className="hidden text-Error hover:text-Error Tablet:flex"
          >
            삭제
          </Button>
          <Button
            variant={"text"}
            onClick={() => console.log("sdf")}
            className="hidden Tablet:flex"
          >
            선택 해제
          </Button>
          <Button
            className="Tablet:flex"
            variant={"text"}
            onClick={() => setIsEditing(true)}
          >
            {isEditing ? "완료" : "편집"}
          </Button>
        </div>
      </div>

      {data ? (
        <div className="grid grid-cols-2 gap-2 Tablet:grid-cols-3 Tablet:gap-x-5 Tablet:gap-y-4 Laptop:grid-cols-4 Laptop:gap-x-6 Laptop:gap-y-5">
          {Array(20)
            .fill("")
            .map((_, i) => (
              <button key={i} type="button">
                <div className="h-[230px] rounded-xl bg-Gray  Tablet:h-[288px] Laptop:h-[331px]" />
              </button>
            ))}
        </div>
      ) : (
        <div className="flex justify-center">
          <Placeholder type="rating" />
        </div>
      )}
      {isEditing && (
        <div className="fixed bottom-0 left-0 flex w-screen items-center border-t border-D2_Gray bg-D1_Gray py-[6px] pb-6 Text-m-Medium Tablet:hidden">
          <button type="button" className="flex-1 p-2 Text-m-Medium">
            선택 해제
          </button>
          <button type="button" className="flex-1 p-2 text-Error Text-m-Medium">
            삭제
          </button>
        </div>
      )}
    </div>
  );
}
