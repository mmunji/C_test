import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  CheckedCheckbox,
  UnCheckedCheckbox,
} from "../../../../../../../../public/icons";
import TalkFormHeader from "./TalkFormHeader";

interface AddTalkValues {
  talk: string;
  spoiler: boolean;
}

export default function TalkForm() {
  const [readyToSubmit, setReadyToSubmit] = useState(true);
  const { register, handleSubmit, watch, setValue } = useForm<AddTalkValues>();
  const onSubmit: SubmitHandler<AddTalkValues> = (data) => {
    if (readyToSubmit) console.log(data);
  };
  const spoiler = watch("spoiler");

  const toggleSpoiler = () => {
    setValue("spoiler", !spoiler);
    setReadyToSubmit(() => false);
    setTimeout(() => {
      setReadyToSubmit(() => true);
    }, 0);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex w-full flex-col gap-3 Laptop:mt-7"
    >
      <div className="relative h-[182px] w-full overflow-hidden rounded-xl bg-Black">
        <TalkFormHeader />
        <textarea
          {...register("talk", { required: true })}
          placeholder="영화에 대해 이야기 해볼까요?"
          className="absolute bottom-5 left-0 h-[calc(100%-64px)] w-full resize-none bg-Black px-5 outline-none"
        />
      </div>

      <section className="ml-auto flex">
        <section
          className="mr-4 flex cursor-pointer items-center gap-1"
          onClick={toggleSpoiler}
        >
          <Image
            src={spoiler ? CheckedCheckbox : UnCheckedCheckbox}
            alt="스포일러"
          />
          <button className="text-Gray_Orange Text-s-Regular">스포일러</button>
        </section>

        <button
          type="submit"
          className="flex h-[29px] w-12 items-center justify-center rounded-lg bg-Primary text-Silver Text-s-Medium"
        >
          등록
        </button>
      </section>
    </form>
  );
}
