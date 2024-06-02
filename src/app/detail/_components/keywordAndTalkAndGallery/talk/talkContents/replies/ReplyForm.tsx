import React, { RefObject, useRef } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import handleResizeTextareaHeight from "@/app/detail/utils/handleResizeTextareaHeight";
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
              className="my-3 w-[calc(100%-61px)] resize-none bg-transparent pl-4 pr-4 leading-[21px] text-Gray_Orange outline-none Text-s-Regular placeholder:text-Gray Tablet:w-[calc(100%-76px)] Tablet:pr-6 Tablet:leading-[24px] Tablet:Text-m-Regular"
              onChange={(e) => {
                field.onChange(e);
                handleResizeTextareaHeight(maxLines, lineHeight, textareaRef);
              }}
            />
          )}
        />
        <button
          disabled={!replyValue}
          type="submit"
          className={`absolute right-4 top-[10px] flex h-[25px] w-[37px] items-center justify-center rounded-lg ${replyValue ? "bg-Primary text-Silver" : "bg-D2_Gray text-Gray_Orange"} leading-[150%] Text-xs-Regular Tablet:h-[29px] Tablet:w-12 Tablet:Text-s-Medium`}
        >
          답글
        </button>
      </div>
    </form>
  );
}
