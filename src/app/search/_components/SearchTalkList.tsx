import Image from "next/image";

import SearchTitle from "@/app/search/_components/SearchTitle";

import { StarFillSm } from "../../../../public/icons";

interface Props {
  talkList?: FindMovieTalkDTO[];
}

export default function SearchTalkList({ talkList }: Props) {
  return (
    <div className="flex flex-col">
      <SearchTitle category="톡" length={talkList?.length} />
      <div className="flex flex-col gap-3">
        {talkList?.map((talk) => (
          <div
            key={talk.id}
            className="flex flex-col gap-2 rounded-xl bg-D1_Gray p-4"
          >
            <div className="flex justify-between">
              <div className="flex gap-2">
                <Image
                  alt={talk.content}
                  width={24}
                  height={24}
                  src={"/images/detail/default_profile2.png"}
                />
                <span className="text-Silver Text-s-Medium">{talk.userId}</span>
              </div>
              <div className="flex items-center">
                <Image
                  alt="profile_image"
                  width={16}
                  height={16}
                  src={StarFillSm}
                />
                <span className="Text-xs-Regular">{talk.star}</span>
              </div>
            </div>
            <div className="line-clamp-3 text-Gray_Orange Text-s-Regular">
              {talk.content}
            </div>
            <div className="text-L_Gray Text-s-Regular">
              {talk.movieId} · {talk.movieId}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
