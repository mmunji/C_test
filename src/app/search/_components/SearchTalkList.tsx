import Image from "next/image";

import SearchPlaceholder from "@/app/search/_components/placeholders/SearchPlaceholder";
import SearchResponsiveContainer from "@/app/search/_components/SearchResponsiveContainer";
import SearchTitle from "@/app/search/_components/SearchTitle";
import useDevice from "@/hooks/useDevice";

import { StarFillSm } from "../../../../public/icons";

interface Props {
  talkList?: SearchMovieTalkDTO[];
  handleTabChange: (category: string) => void;
  isActiveTabIndex: number;
}

const deviceLimits: { [key in Exclude<Device, "">]: number } = {
  mobile: 4,
  tablet: 6,
  laptop: 9,
  desktop: 12,
};

export default function SearchTalkList({
  talkList,
  handleTabChange,
  isActiveTabIndex,
}: Props) {
  const { device, isMobile } = useDevice();
  const limit = deviceLimits[device as Exclude<Device, "">];
  const sortedTalkList = !isActiveTabIndex
    ? talkList?.slice(0, limit)
    : talkList;

  if (isActiveTabIndex === 1) return null;

  return (
    <SearchResponsiveContainer dataLength={talkList?.length}>
      <SearchTitle
        isMobile={isMobile}
        isActiveTabIndex={isActiveTabIndex}
        handleTabChange={handleTabChange}
        category="톡"
        length={talkList?.length}
      />
      <div
        className={`${sortedTalkList?.length ? "flex flex-col gap-3 Tablet:grid Tablet:grid-cols-2 Tablet:gap-5 Laptop:grid-cols-3 Desktop:grid-cols-4" : ""}`}
      >
        {sortedTalkList?.length ? (
          sortedTalkList?.map((talk) => (
            <div
              key={talk.id}
              className="flex flex-col gap-2 rounded-xl bg-D1_Gray p-4 Tablet:gap-3 Tablet:px-7 Tablet:py-6"
            >
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    alt={talk.content}
                    width={24}
                    height={24}
                    src={"/images/detail/default_profile2.png"}
                  />
                  <span className="text-Silver Text-s-Medium">
                    {talk.userId}
                  </span>
                </div>
                <div className="flex items-center">
                  <Image
                    alt="profile_image"
                    width={16}
                    height={16}
                    src={StarFillSm}
                  />
                  <span className="Text-xs-Regular Tablet:Text-s-Bold">
                    {talk.star}
                  </span>
                </div>
              </div>
              <div className="hidden h-[1px] w-full bg-D2_Gray Tablet:block" />
              <div className="line-clamp-3 break-words text-Gray_Orange Text-s-Regular Tablet:line-clamp-4 Tablet:Text-m-Regular">
                {talk.content}
              </div>
              <div className="text-L_Gray Text-s-Regular Tablet:Text-m-Medium">
                {talk.movieId} · {talk.movieId}
              </div>
            </div>
          ))
        ) : (
          <SearchPlaceholder isActiveTabIndex={isActiveTabIndex} />
        )}
      </div>
    </SearchResponsiveContainer>
  );
}
