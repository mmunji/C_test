"use client";

import useDevice from "@/hooks/useDevice";
import { useGetTalkQuery } from "@/services/talk/talkQueries";

import DividingLine from "../../common/DividingLine";
import NoTalk from "./NoTalk";
import Rating from "./rating/Rating";
import TalkContents from "./talkContents/TalkContents";
import TalkHeader from "./TalkHeader";

interface TalkProps {
  title: string;
  movieId: number;
  movieDetailData: MovieDetailData;
}

export default function Talk({ title, movieId, movieDetailData }: TalkProps) {
  const { data } = useGetTalkQuery(movieId.toString());
  const { device } = useDevice();
  const id = device === "mobile" || device === "tablet" ? undefined : "my-talk";
  const noTalk = data?.pages[0].reviewList.length === 0;

  return (
    <section id={id}>
      <Rating {...{ title, movieId, movieDetailData }} />
      <DividingLine />

      <section className="Laptop:rounded-xl Laptop:bg-D1_Gray Laptop:p-8">
        <TalkHeader />
        {noTalk ? (
          <NoTalk />
        ) : (
          <>
            {Array(10)
              .fill(null)
              .map((_, i) => (
                <TalkContents key={i} />
              ))}
          </>
        )}
      </section>
    </section>
  );
}
