import Image from "next/image";

import {
  ChatFillSm,
  StarFillSm,
  ThumbsUpFillSm,
} from "../../../../../../public/icons";
export default function SlimilarMobilePost() {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-3">
          <div className="h-[40px] w-[40px] rounded-[60px] border-2" />
          <div className="Text-s-Medium ">
            <span>닉네임</span>
            <div>
              <span>0000</span>
              <span>0000</span>
            </div>
          </div>
        </div>
        <div className="flex gap-1 Text-xs-Regular">
          {Array(3)
            .fill(3)
            .map((_, index) => {
              return (
                <div
                  key={index}
                  className="flex gap-1 rounded-xl border-2 px-2 py-1"
                >
                  ⭐<span>유명한탐정</span>
                </div>
              );
            })}
        </div>
      </div>
      <div className="mt-5  flex w-[156px] flex-col gap-1 ">
        <div className="flex h-[230px] flex-col   justify-end rounded-2xl  border-2 px-3 py-4 Text-s-Bold">
          <div className="flex justify-between ">
            <h1 className="text-L_Gray Text-xs-Regular">탸이틀</h1>
            <div className="flex  gap-1">
              <Image src={StarFillSm} alt="평점 별" className="h-4 w-4" />
              <span>0.0</span>
            </div>
          </div>
          <span className=" Text-s-Regular">인생영화. 네글자면 충분하다.</span>
        </div>
        <div className="flex justify-end  gap-2 text-L_Gray Text-xs-Regular">
          <div className="flex  gap-1">
            <Image
              src={ThumbsUpFillSm}
              alt="좋아요"
              className="h-4 w-4 text-L_Gray"
            />
            0,000
          </div>
          <div className="flex gap-1">
            <Image
              src={ChatFillSm}
              alt="댓글"
              className="h-4 w-4 text-L_Gray"
            />
            <span>0,000</span>
          </div>
        </div>
      </div>
    </div>
  );
}
