import Image from "next/image";
import React, { useState } from "react";

import useRating from "@/app/detail/_hooks/useRating";
import Button from "@/components/buttons/Button";
import RatingStar from "@/components/rating/RatingStar";
import WithLineBreak from "@/components/withLineBreak/WithLineBreak";
import useMyInfoStore from "@/stores/useMyInfoStore";

import {
  SquareCheckMd,
  SquareCheckSm,
} from "../../../../../../../public/icons";

interface MyTalkProps {
  myTalk: MyTalk | undefined;
}

function MyTalk({ myTalk }: MyTalkProps) {
  const { myInfo } = useMyInfoStore();
  const [clickedEdit, setClickedEdit] = useState(false);
  const {
    ratingValue,
    setRatingValue,
    clickedValue,
    setClickedValue,
    handleDriveTalk,
  } = useRating({ initialValue: myTalk?.star });

  return (
    <div className="flex flex-col gap-2">
      <div className="mx-auto mb-5 flex flex-col items-center gap-3 Laptop:hidden">
        <p className="text-Primary Text-m-Bold">{myTalk?.star}점</p>
        <div className="flex">
          {clickedEdit ? (
            [...Array(5)].map((_, i) => (
              <RatingStar
                key={i}
                index={i}
                ratingValue={ratingValue}
                setRatingValue={setRatingValue}
                clickedValue={clickedValue}
                setClickedValue={setClickedValue}
                ratingSize=""
              />
            ))
          ) : (
            <FixedRating star={myTalk?.star || 0} />
          )}
        </div>
      </div>

      <div className="relative flex w-full flex-col justify-center rounded-xl bg-Black px-5 py-4 Laptop:mb-6 Laptop:gap-3 Laptop:bg-D1_Gray Laptop:px-7 Laptop:py-8">
        <div className="mx-auto hidden flex-col items-center gap-3 Laptop:flex">
          <p className="text-Primary Text-l-Bold">{myTalk?.star}점</p>
          <div className="flex">
            {clickedEdit ? (
              [...Array(5)].map((_, i) => (
                <RatingStar
                  key={i}
                  index={i}
                  ratingValue={ratingValue}
                  setRatingValue={setRatingValue}
                  clickedValue={clickedValue}
                  setClickedValue={setClickedValue}
                  ratingSize=""
                />
              ))
            ) : (
              <FixedRating star={myTalk?.star || 0} />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2 Laptop:mt-5 Laptop:gap-3 Laptop:rounded-xl Laptop:bg-[rgba(0,0,0,0.2)] Laptop:px-6 Laptop:py-5">
          <p className="text-Silver Text-s-Bold">{myInfo.nickname}</p>

          {myTalk?.content && (
            <div className="max-h-[105px] overflow-auto text-Gray_Orange Text-s-Regular input-scrollbar Tablet:max-h-[120px] Tablet:Text-m-Medium">
              {WithLineBreak(myTalk?.content)}
            </div>
          )}
        </div>
        {clickedEdit ? (
          <div className="ml-auto hidden items-center gap-3 Laptop:flex">
            <div className="flex cursor-pointer items-center gap-1">
              <Image src={SquareCheckMd} alt="check" />

              <p className="Text-m-Regular">스포일러</p>
            </div>

            <Button size={"md"} className="text-Error">
              삭제
            </Button>
            <Button variant={"orange"} size={"md"}>
              등록
            </Button>
          </div>
        ) : (
          <Button
            onClick={() => setClickedEdit(!clickedEdit)}
            size={"md"}
            className="ml-auto hidden pb-0 pr-0 Laptop:block"
          >
            수정
          </Button>
        )}
      </div>

      {clickedEdit ? (
        <div className="ml-auto flex items-center gap-3 Laptop:hidden">
          <div className="flex cursor-pointer items-center gap-1">
            <Image src={SquareCheckSm} alt="check" />

            <p className="Text-s-Regular">스포일러</p>
          </div>

          <Button size={"sm"} className="text-Error">
            삭제
          </Button>
          <Button variant={"orange"} size={"sm"}>
            등록
          </Button>
        </div>
      ) : (
        <Button
          onClick={() => setClickedEdit(!clickedEdit)}
          size={"sm"}
          className="ml-auto Laptop:hidden"
        >
          수정
        </Button>
      )}
    </div>
  );
}

export default MyTalk;

function FixedRating({ star }: { star: number }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <RatingStar
          key={i}
          index={i}
          ratingValue={star}
          setRatingValue={() => {}}
          clickedValue={true}
          setClickedValue={() => {}}
          ratingSize=""
        />
      ))}
    </div>
  );
}
