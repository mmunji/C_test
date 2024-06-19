"use client";

import { useQuery } from "@tanstack/react-query";

import { talkAPIs } from "@/api/talk/talkAPIs";
import { TALK_QUERY_KEYS } from "@/api/talk/talkQueryKeys";
import useDevice from "@/hooks/useDevice";

import DividingLine from "../../common/DividingLine";
import NoTalk from "./NoTalk";
import Rating from "./rating/Rating";
import TalkContents from "./talkContents/TalkContents";
import TalkHeader from "./TalkHeader";

interface TalkProps {
  title: string;
  movieId: number;
}

export default function Talk({ title, movieId }: TalkProps) {
  const { data } = useQuery({
    queryKey: TALK_QUERY_KEYS.all(),
    queryFn: () => talkAPIs.getTalks(movieId),
  });

  const { device } = useDevice();
  const id = device === "mobile" || device === "tablet" ? undefined : "my-talk";
  const noTalk = data?.reviewList.length === 0;

  return (
    <section id={id}>
      <Rating title={title} movieId={movieId} />
      <DividingLine />

      <section className="Laptop:rounded-xl Laptop:bg-D1_Gray Laptop:p-8">
        <TalkHeader />
        {!noTalk ? (
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
