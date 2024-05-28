import React, { useRef } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface ReplyValue {
  replyValue: string;
}

export default function ReplyForm() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { handleSubmit, watch, control } = useForm<ReplyValue>();

  const replyValue = watch("replyValue");

  const onSubmit: SubmitHandler<ReplyValue> = (data) => {
    console.log(data);
  };

  const handleResizeHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative">
        <Controller
          control={control}
          name="replyValue"
          render={({ field }) => (
            <textarea
              {...field}
              rows={1}
              ref={textareaRef}
              placeholder="답글을 작성해주세요."
              className="w-full resize-none rounded-xl bg-[#00000033] py-3 pl-4 pr-[61px] text-Gray_Orange outline-none Text-s-Regular placeholder:text-Gray Tablet:pr-[72px] Tablet:Text-m-Regular"
              onChange={(e) => {
                field.onChange(e);
                handleResizeHeight();
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
