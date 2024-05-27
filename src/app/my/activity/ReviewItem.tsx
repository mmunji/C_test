import Image from "next/image";

import {
  ChatLineSmGrayOrange,
  StarSm,
  ThumbsUpLineSm,
} from "../../../../public/icons";

export default function ReviewItem() {
  return (
    <div className="flex flex-col gap-2 rounded-xl bg-D1_Gray px-7 pb-5 pt-3 Laptop:gap-4 Laptop:pb-6 Laptop:pt-4">
      <div className="">
        <div className="flex items-center justify-between Laptop:mb-2">
          <div className="flex items-center gap-2">
            <span className="Text-m-Medium">영화제목</span>
            <div className="flex items-center">
              {Array(5)
                .fill(1)
                .map((_, i) => (
                  <Image key={i} src={StarSm} alt="별점" />
                ))}
            </div>
          </div>
          <div>
            <button
              type="button"
              className="p-2 text-Gray_Orange Text-m-Medium"
            >
              수정
            </button>
          </div>
        </div>
        <div className="line-clamp-3 text-Gray_Orange Text-m-Regular Laptop:line-clamp-4">
          내용은 3줄까지 보여집니다. 그 이상은 더보기로 볼 수 있습니다.내용은
          3줄까지 보여집니다. 그 이상은 더보 볼 수 있습니다.내용은 3줄까지
          보여집니다. 그 이상은 더보기로 볼 수 있습니다. 볼 수 있습니다.내용은
          보여집니다. 그 이상은 더보기로 볼 수 있습니다. 볼 수 있습니다.내용은
          보여집니다. 그 이상은 더보기로 볼 수 있습니다. 볼 수 있습니다.내용은
          보여집니다. 그 이상은 더보기로 볼 수 있습니다. 볼 수 있습니다.내용은
          보여집니다. 그 이상은 더보기로 볼 수 있습니다. 볼 수 있습니다.내용은
          3줄까지 보여집니다. 그 이상은 더보기로 볼 수 있습니다.
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-D2_Gray pt-3">
        <div className="text-Gray Text-xs-Regular">YY.MM.DD 작성</div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <Image alt="좋아요" src={ThumbsUpLineSm} />
            <span className="text-Gray_Orange Text-s-Medium">0,000</span>
          </div>
          <div className="flex items-center gap-1">
            <Image alt="댓글" src={ChatLineSmGrayOrange} />

            <span className="text-Gray_Orange Text-s-Medium">0,000</span>
          </div>
        </div>
      </div>
    </div>
  );
}
