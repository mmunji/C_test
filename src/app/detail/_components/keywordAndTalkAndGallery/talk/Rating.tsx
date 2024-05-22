import { useState } from "react";

import RatingStar from "./RatingStar";

export default function Rating() {
  const [ratingValue, setRatingValue] = useState<number>(0);
  const [clickedValue, setClickedValue] = useState(false);

  return (
    <div className="flex w-full flex-col justify-center py-3 Tablet:py-8 Laptop:py-0">
      <div className="mx-auto mb-3 flex gap-1">
        <span className="text-regular font-Bold text-Primary Laptop:text-[20px]">
          웡카
        </span>
        <span className="text-regular font-Bold text-Silver Laptop:text-[20px]">
          어떠셨나요?
        </span>
      </div>

      <div className="mx-auto flex cursor-pointer">
        {[...Array(5)].map((_, i) => (
          <RatingStar
            key={i}
            {...{
              index: i,
              ratingValue,
              setRatingValue,
              clickedValue,
              setClickedValue,
            }}
          />
        ))}
      </div>
    </div>
  );
}
