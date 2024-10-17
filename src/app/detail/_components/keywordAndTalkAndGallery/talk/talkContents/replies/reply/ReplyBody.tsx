import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import useNeedTalkMoreButton from "@/app/detail/_hooks/useNeedTalkMoreButton";
import handleResizeTextareaHeight from "@/app/detail/utils/handleResizeTextareaHeight";
import Button from "@/components/buttons/Button";
import useDevice from "@/hooks/useDevice";

interface ReplyBodyProps {
  reply: ReviewList;
  editReply: boolean;
}

interface ReplyValue {
  replyValue: string;
}

export default function ReplyBody({ reply, editReply }: ReplyBodyProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { handleSubmit, watch, control, setValue } = useForm<ReplyValue>({
    defaultValues: {
      replyValue: reply?.content || "",
    },
  });
  const [showMore, setShowMore] = useState(false);
  const { contentRef, showMoreButton } = useNeedTalkMoreButton("reply");
  const { device } = useDevice();

  const replyContent = `${reply?.content}`;

  const maxLines = 5;
  const lineHeight = device === "mobile" ? 21 : 24;

  const replyValue = watch("replyValue");
  const onSubmit: SubmitHandler<ReplyValue> = () => {
    // addReply({ parentReviewId, content: replyValue });
  };

  useEffect(() => {
    if (editReply) textareaRef.current?.focus();
  }, [editReply]);

  return (
    <>
      {editReply ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative mt-[6px] Tablet:mt-2"
        >
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
                    handleResizeTextareaHeight(
                      maxLines,
                      lineHeight,
                      textareaRef,
                    );
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
      ) : (
        <div className="relative mt-[6px] Tablet:mt-2">
          <p
            ref={contentRef}
            className={clsx(
              "text-Gray_Orange Text-s-Regular Tablet:Text-m-Medium",
              {
                "line-clamp-3 max-h-[63px] overflow-hidden Tablet:max-h-[72px]":
                  !showMore,
              },
            )}
          >
            {replyContent}
          </p>

          {!showMore && showMoreButton && (
            <button
              onClick={() => setShowMore(true)}
              className="absolute bottom-0 right-0 bg-BG pl-2 text-Gray Text-m-Medium Text-s-Medium Tablet:bg-D1_Gray"
            >
              ...더보기
            </button>
          )}
        </div>
      )}
    </>
  );
}
