import Image from "next/image";

import {
  ChatBox,
  Fire,
  GrayStart,
  PrimaryStart,
  WhiteStart,
} from "@/../public/icons";
export default function WatchedMoive() {
  let arr = ["1", "1", "1", "1", "1", "1"];
  return (
    <div className="flex flex-col gap-[20px]">
      <h1 className="text-2xl  font-Bold">혹시 이 영화 보셨나요?</h1>
      <div className="flex  gap-[24px]">
        {arr.map((e, index) => {
          return (
            <div key={index} className="flex flex-col">
              <div className="h-[360px] w-[240px] rounded-xl border-2">1</div>
              <div className="flex justify-between">
                <Image
                  src={GrayStart}
                  alt="star"
                  className="h-[44px] w-[44px]"
                />
                <Image
                  src={GrayStart}
                  alt="star"
                  className="h-[44px] w-[44px]"
                />
                <Image
                  src={GrayStart}
                  alt="star"
                  className="h-[44px] w-[44px]"
                />
                <Image
                  src={GrayStart}
                  alt="star"
                  className="h-[44px] w-[44px]"
                />
                <Image
                  src={GrayStart}
                  alt="star"
                  className="h-[44px] w-[44px]"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
