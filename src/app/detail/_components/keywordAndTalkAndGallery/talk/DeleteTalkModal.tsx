import React, { Dispatch, SetStateAction } from "react";

import Button from "@/components/buttons/Button";
import LoadingSpinner from "@/components/loadingSpinner/LoadingSpinner";

interface DeleteTalkModalProps {
  setOpenDeleteModal: Dispatch<SetStateAction<boolean>>;
  onClick: () => void;
  isPending: boolean;
}

export default function DeleteTalkModal({
  setOpenDeleteModal,
  onClick,
  isPending,
}: DeleteTalkModalProps) {
  return (
    <div>
      <div className="fixed inset-0 z-20 h-screen w-screen bg-black/40 backdrop-blur-[3px]" />
      <div className="fixed left-1/2 top-1/2 z-30 flex h-[145px] w-[272px] -translate-x-1/2 -translate-y-1/2 flex-col rounded-xl bg-BG px-6 pb-5 pt-6 Tablet:h-[234px] Tablet:w-[468px] Tablet:px-12 Tablet:pb-10 Tablet:pt-11">
        <p className="py-3 text-center text-Primary Text-m-Bold Tablet:py-4 Tablet:Text-xl-Bold">
          정말 삭제하시겠어요?
        </p>
        <div className="mt-4 flex gap-2 Tablet:mt-9 Tablet:gap-3">
          <Button
            variant={"line"}
            onClick={() => setOpenDeleteModal(false)}
            className="flex h-[37px] w-1/2 items-center justify-center rounded-lg Text-s-Regular Tablet:h-12 Tablet:rounded-xl Tablet:Text-m-Medium"
          >
            아니요
          </Button>
          <Button
            variant={"orange"}
            onClick={onClick}
            disabled={isPending}
            className="flex h-[37px] w-1/2 items-center justify-center rounded-lg Text-s-Regular Tablet:h-12 Tablet:rounded-xl Tablet:Text-m-Medium"
          >
            {isPending ? (
              <LoadingSpinner size={"sm"} color={"primary"} />
            ) : (
              "네"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
