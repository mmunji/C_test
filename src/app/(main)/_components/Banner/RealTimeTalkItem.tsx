import useDevice from "@/hooks/useDevice";

export default function RealTimeTalkItem() {
  const device = useDevice();
  return <li className="flex flex-col Tablet:gap-3 Desktop:gap-4"></li>;
}

/* <ul className="flex flex-col Tablet:gap-3 Laptop:hidden ">
    {ReviewList.map((Review, index) => {
      if (index > 2) return null;
      return (
        <li
          key={index}
          className={`flex items-center  justify-between gap-2 text-Silver Text-xs-Regular Tablet:w-[331px] Tablet:Text-s-Regular`}
        >
          <div className="flex w-[35px] items-center justify-center">
            <Image src={StarFillSm} alt="star" className="h-4 w-4" />
            <span className="Text-s-Regular">{Review.star.toFixed(1)}</span>
          </div>
          <span className="line-clamp-1 w-48 flex-1  Text-s-Medium">
            {Review.content}
          </span>

          <span className=" flex   items-center opacity-40">
            {dayjs(Review.createdAt).fromNow()}
          </span>
        </li>
      );
    })}
  </ul>
  <ul className="hidden flex-col Laptop:flex   Laptop:gap-3  Desktop:gap-4 ">
    {ReviewList.map((ReviewData, index) => {
      return (
        <li
          key={index}
          className="flex items-center justify-between gap-5 text-Silver Text-s-Regular"
        >
          <GetRating
            StarRating={ReviewData.star}
            ratingsize="Sm"
            space={false}
          />
          <span className="line-clamp-1 w-48 flex-1  Text-m-Medium">
            {ReviewData.content}
          </span>
          <span className="Text-s-Mediuim opacity-40">
            {dayjs(ReviewData.createdAt).fromNow()}
          </span>
        </li>
      );
    })}
}*/
