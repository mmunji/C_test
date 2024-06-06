import React, { RefObject, useRef } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import handleResizeTextareaHeight from "@/app/detail/utils/handleResizeTextareaHeight";
import Button from "@/components/buttons/Button";
import useDevice from "@/hooks/useDevice";

interface ReplyValue {
  replyValue: string;
}

export default function ReplyForm() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { handleSubmit, watch, control } = useForm<ReplyValue>();
  const { device } = useDevice();

  const replyValue = watch("replyValue");

  const onSubmit: SubmitHandler<ReplyValue> = (data) => {
    console.log(data);
  };

  const maxLines = 5;
  const lineHeight = device === "mobile" ? 21 : 24;

  return (
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
  );
}
