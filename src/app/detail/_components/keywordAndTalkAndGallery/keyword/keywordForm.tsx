import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function KeywordForm() {
  const [focused, setFocused] = useState(false);
  const { register, handleSubmit, watch } = useForm<{ value: string }>();
  const onSubmit: SubmitHandler<{ value: string }> = (data) =>
    console.log(data);

  const value = watch("value");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative w-full overflow-hidden rounded-xl ">
        <input
          type="text"
          placeholder="‘웡카’를 한단어로 말한다면?"
          maxLength={5}
          onFocus={() => setFocused(true)}
          {...register("value", {
            required: true,
            onBlur: () => setFocused(false),
          })}
          className="h-[45px] w-full bg-[rgba(0,0,0,0.20)] py-2 pl-4 pr-3 text-Gray_Orange outline-none Text-s-Medium placeholder:text-Gray Tablet:Text-m-Medium"
        />

        <section className="absolute right-3 top-1/2 flex translate-y-[-50%] items-center gap-2">
          {focused && (
            <p className="text-Gray Text-s-Regular">{value?.length}/5</p>
          )}
          <button
            disabled={!value}
            className={`flex h-[29px] items-center justify-center rounded-lg ${!value ? "bg-D2_Gray text-Gray" : "bg-Primary text-Silver"} px-3 Text-s-Medium`}
          >
            올리기
          </button>
        </section>
      </div>
    </form>
  );
}
