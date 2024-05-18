import Image from "next/image";

import { PrimaryStart } from "@/../public/icons";

import PostCard from "../PostCard";
export default function MasterPieceMoive() {
  return (
    <div className="flex flex-col gap-[20px]">
      <h1 className="text-xl  font-Bold">씨네톡 속 숨겨진 명작</h1>
      <div className="flex  gap-[24px]">
        {Array(6)
          .fill(0)
          .map((_, index) => {
            return (
              <div key={index} className="flex flex-col">
                <PostCard />
                <div className="flex justify-between">
                  <div className="flex">
                    <Image src={PrimaryStart} alt="star" className="h-6 w-6" />
                    0.0
                  </div>
                  <div>하트</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
