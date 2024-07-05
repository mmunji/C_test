"use client";

import React, { useEffect } from "react";

import useTotalTalksStore from "@/app/detail/_stores/useTotalTalksStore";
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
  const { setTotalTalks } = useTotalTalksStore();

  useEffect(() => {
    if (data?.pages[0].totalElements) {
      setTotalTalks(data?.pages[0].totalElements);
    }
  }, [data?.pages, setTotalTalks]);

  return (
    <section id={id}>
      <Rating {...{ title, movieId, movieDetailData }} />
      <DividingLine />

      <section className="Laptop:rounded-xl Laptop:bg-D1_Gray Laptop:p-8">
        <TalkHeader />
        {noTalk ? (
          <NoTalk />
        ) : (
          <React.Fragment>
            {data?.pages.map((talkData, i) => (
              <React.Fragment key={i}>
                {talkData.reviewList.map((talk, i) => (
                  <TalkContents talk={talk} key={i} />
                ))}
              </React.Fragment>
            ))}
          </React.Fragment>
        )}
      </section>
    </section>
  );
}
