"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import Button from "@/components/buttons/Button";
import { updateBadge } from "@/services/my/actions";
import { cn } from "@/utils/cn";

interface BadgeTitleProps {
  toggleEditing: () => void;
  isEditing: boolean;
  hasBadge: boolean;
  selectedBadgeIds: number[];
}

export default function BadgeTitle({
  hasBadge,
  isEditing,
  toggleEditing,
  selectedBadgeIds,
}: BadgeTitleProps) {
  const [loading, setLoading] = useState(false);
  const isDisabled = selectedBadgeIds.length > 3;
  const getButtonText = () => {
    if (isEditing) {
      if (isDisabled) {
        return (
          <>
            너무 많아요{" "}
            <span className="text-Error">{selectedBadgeIds.length}/3</span>
          </>
        );
      }
      return `완료 ${selectedBadgeIds.length}/3`;
    }
    return "변경";
  };
  const handleSubmit = async () => {
    if (!isDisabled && isEditing) {
      setLoading(true);
      await updateBadge(selectedBadgeIds);
      setLoading(false);
    }
  };
  return (
    <div className="relative flex w-full items-end gap-1">
      <div className="flex flex-1 flex-col gap-1">
        <h2 className="Text-m-Bold Tablet:Text-l-Bold">내 뱃지</h2>
        <div className="flex items-center justify-between gap-2">
          <p className="text-L_Gray Text-s-Regular Tablet:Text-m-Medium">
            뱃지는 닉네임 옆에 표시돼요.
          </p>
        </div>
      </div>
      <div>
        {!hasBadge ? (
          <>
            <Button
              className="hidden Tablet:block"
              disabled={true}
              size={"md"}
              variant="grey"
            >
              톡을 작성해 뱃지를 모아보세요
            </Button>
            <Button className="block Tablet:hidden" variant="text">
              편집
            </Button>
          </>
        ) : (
          <>
            <Button
              className="hidden disabled:text-Silver Tablet:block"
              disabled={(isEditing && isDisabled) || loading}
              size={"md"}
              onClick={() => {
                toggleEditing();
                handleSubmit();
              }}
              variant={isEditing ? "orange" : "text"}
            >
              {getButtonText()}
            </Button>
            <Button
              className={`Tablet:hidden ${isEditing ? "hidden" : "block"}`}
              size={"md"}
              onClick={() => {
                toggleEditing();
                handleSubmit();
              }}
              variant={"text"}
            >
              편집
            </Button>
          </>
        )}
      </div>
      <AnimatePresence>
        {isEditing && (
          <motion.div
            className="fixed z-50 w-[calc(100%-40px)]"
            initial={{ bottom: "-160px" }}
            animate={{
              bottom: 40,
              transition: {
                type: "spring",
                duration: 0.25,
                damping: 20,
                mass: 1,
                stiffness: 177.8,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.2,
                damping: 60,
                mass: 1,
                stiffness: 1600,
              },
            }}
          >
            <div
              className={cn(
                isDisabled ? "bg-D1_Error" : "bg-D1_Gray",
                `flex h-14 items-center justify-between rounded-xl px-4 py-2 shadow-[0_4px_10px_0_rgba(0,0,0,0.3)] Tablet:hidden`,
              )}
            >
              <span>
                {isDisabled
                  ? "뱃지는 3개까지만 선택 가능 해요 :("
                  : "아직 뱃지가 저장 되지 않았어요."}
              </span>
              <Button
                onClick={() => {
                  toggleEditing();
                  handleSubmit();
                }}
                size={"sm"}
                variant={"orange"}
                disabled={isDisabled}
              >
                저장
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
