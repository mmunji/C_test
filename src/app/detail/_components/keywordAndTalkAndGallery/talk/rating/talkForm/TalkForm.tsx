import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import Button from "@/components/buttons/Button";
import { useAddTalk, useEditTalk } from "@/services/talk/talkMutations";
import filterAbuse from "@/utils/filterAbuse";
import hexToRGBA from "@/utils/hexToRGBA";

import {
  SquareCheckFillMd,
  SquareCheckFillSm,
  SquareCheckMd,
  SquareCheckSm,
} from "../../../../../../../../public/icons";
import TalkFormHeader from "./TalkFormHeader";

interface AddTalkValues {
  talk: string;
  spoiler: boolean;
}

interface TalkFormProps {
  movieId: number;
  ratingValue: number;
  movieDetailData: MovieDetailData;
  setShowTalkForm: Dispatch<SetStateAction<boolean>>;
  myTalk: MyTalk;
}

export default function TalkForm({
  movieId,
  ratingValue,
  movieDetailData,
  setShowTalkForm,
  myTalk,
}: TalkFormProps) {
  const [readyToSubmit, setReadyToSubmit] = useState(true);
  const { register, handleSubmit, watch, setValue } = useForm<AddTalkValues>({
    defaultValues: {
      talk: "",
      spoiler: false,
    },
  });
  const { mutate: editTalk } = useEditTalk({ movieId });
  const movieName = movieDetailData.title;
  const talk = watch("talk");
  const spoiler = watch("spoiler");

  const onSubmit: SubmitHandler<AddTalkValues> = () => {
    if (ratingValue === 0) return alert("0점은 등록하실 수 없습니다.");
    if (readyToSubmit) {
      if (filterAbuse(talk)) return;
      const genreList = movieDetailData?.genreDTOList.map((el) => el.id);

      editTalk({
        content: talk,
        talkId: myTalk.reviewId,
        movieName: movieName,
        genreList: genreList,
        spoiler: spoiler,
        star: ratingValue,
      });
    }
  };

  const toggleSpoiler = () => {
    setValue("spoiler", !spoiler);
    setReadyToSubmit(() => false);
    setTimeout(() => {
      setReadyToSubmit(() => true);
    }, 0);
  };

  const backgroundColor = hexToRGBA("#000000", 0.2);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex w-full flex-col gap-3 Laptop:mt-7"
    >
      <div
        className="relative h-[203px] w-full overflow-hidden rounded-xl Tablet:h-[213px]"
        style={{ backgroundColor: backgroundColor }}
      >
        <TalkFormHeader talk={talk} />
        <textarea
          {...register("talk", { required: true })}
          placeholder="영화에 대해 이야기 해볼까요?"
          className="absolute bottom-10 left-0 h-[105px] w-[calc(100%-20px)] resize-none bg-transparent px-5 leading-[21px] outline-none Text-s-Regular input-scrollbar placeholder:text-D3_Gray placeholder:Text-s-Regular Tablet:h-[120px] Tablet:w-[calc(100%-24px)] Tablet:leading-[24px] Tablet:Text-m-Medium Tablet:placeholder:Text-m-Medium"
        />
        <p className="absolute bottom-3 left-1/2 h-[21px] w-[calc(100%-40px)] -translate-x-1/2 text-end text-Gray Text-s-Medium Laptop:hidden">
          {`${talk?.length}/2000`}
        </p>
      </div>

      <section className="ml-auto flex">
        <section
          className="mr-4 flex cursor-pointer items-center gap-1"
          onClick={toggleSpoiler}
        >
          <Image
            src={spoiler ? SquareCheckFillSm : SquareCheckSm}
            alt="스포일러"
            className="Laptop:hidden"
          />
          <Image
            src={spoiler ? SquareCheckFillMd : SquareCheckMd}
            alt="스포일러"
            className="hidden Laptop:block"
          />
          <button className="text-Gray_Orange Text-s-Regular">스포일러</button>
        </section>

        <Button
          disabled={!talk}
          size="sm"
          variant="orange"
          type="submit"
          className="Laptop:hidden"
        >
          등록
        </Button>

        <Button
          disabled={!talk}
          size="md"
          variant="orange"
          type="submit"
          className="hidden Laptop:block"
        >
          등록
        </Button>
      </section>
    </form>
  );
}
