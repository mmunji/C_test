import React, { useRef } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import handleResizeTextareaHeight from "@/app/detail/utils/handleResizeTextareaHeight";
import Button from "@/components/buttons/Button";
import Modal from "@/components/modal/modal";
import useDevice from "@/hooks/useDevice";
import useHandleClickAuthButton from "@/hooks/useHandleClickAuthButtons";
import useNeedLogin from "@/hooks/useNeedLogin";
import { useAddReply } from "@/services/talk/talkMutations";

interface ReplyValue {
  replyValue: string;
}

interface ReplyFormProps {
  parentReviewId: number;
  movieId: number;
}

export default function ReplyForm({ parentReviewId, movieId }: ReplyFormProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { handleSubmit, watch, control, setValue } = useForm<ReplyValue>();
  const { device } = useDevice();
  const { mutate: addReply } = useAddReply({
    movieId: movieId,
    parentReviewId: parentReviewId,
    setValue,
  });

  const { handleNeedLogin, isOpen, setIsOpen } = useNeedLogin();
  const { handleClickAuthButton } = useHandleClickAuthButton();

  const replyValue = watch("replyValue");

  const onSubmit: SubmitHandler<ReplyValue> = () => {
    if (handleNeedLogin()) return;

    addReply(
      { parentReviewId, content: replyValue },
      {
        onSuccess: () => {
          setValue("replyValue", "");
          if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
          }
        },
      },
    );
  };

  const maxLines = 5;
  const lineHeight = device === "mobile" ? 21 : 24;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative flex h-fit rounded-xl bg-[#00000033]">
          <Controller
            control={control}
            name="replyValue"
            render={({ field }) => (
              <textarea
                {...field}
                rows={1}
                ref={textareaRef}
                placeholder="답글을 작성해주세요."
                className="my-3 w-[calc(100%-71px)] resize-none bg-transparent pl-4 pr-2 leading-[21px] text-Gray_Orange outline-none Text-s-Regular input-scrollbar placeholder:text-Gray Tablet:w-[calc(100%-90px)] Tablet:pr-3 Tablet:leading-[24px] Tablet:Text-m-Regular"
                onChange={(e) => {
                  field.onChange(e);
                  handleResizeTextareaHeight(maxLines, lineHeight, textareaRef);
                }}
              />
            )}
          />
          <Button
            disabled={!replyValue}
            type="submit"
            size="xs"
            variant="orange"
            className="absolute right-4 top-[10px] Tablet:hidden"
          >
            답글
          </Button>
          <Button
            disabled={!replyValue}
            type="submit"
            size="sm"
            variant="orange"
            className="absolute right-4 top-[10px] hidden Tablet:block"
          >
            답글
          </Button>
        </div>
      </form>
      {isOpen && (
        <Modal isAlertModal={false} onClose={() => setIsOpen(false)}>
          <Modal.Login
            onKakaoLogin={() => handleClickAuthButton("kakao")}
            onNaverLogin={() => handleClickAuthButton("naver")}
          />
        </Modal>
      )}
    </>
  );
}
