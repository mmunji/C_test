"use client";

import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

import useTotalTalksStore from "@/app/detail/_stores/useTotalTalksStore";
import useDevice from "@/hooks/useDevice";
import { talkAPIs } from "@/services/talk/talkAPIs";
import { useGetMyTalk, useGetTalkQuery } from "@/services/talk/talkQueries";

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
  const filters = ["최신순", "좋아요순"];
  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const sort = activeFilter === "최신순" ? "createdAt" : "star";
  const { data, refetch } = useGetTalkQuery(movieId, sort);
  const { device } = useDevice();
  const id = device === "mobile" || device === "tablet" ? undefined : "my-talk";
  const noTalk = data?.pages?.[0]?.reviewList?.length === 0;

  useEffect(() => {
    refetch();
  }, [activeFilter, refetch]);

  const { setTotalTalks } = useTotalTalksStore();

  const { data: myTalk } = useGetMyTalk(movieId);

  useEffect(() => {
    if (data?.pages[0].totalElements) {
      setTotalTalks(data?.pages[0].totalElements);
    }

    return () => setTotalTalks(0);
  }, [data?.pages, setTotalTalks]);

  return (
    <section id={id}>
      <Rating {...{ title, movieId, movieDetailData }} />
      <DividingLine />

      <section className="Laptop:rounded-xl Laptop:bg-D1_Gray Laptop:p-8">
        <TalkHeader
          title={title}
          activeFilter={activeFilter}
          filters={filters}
          setActiveFilter={setActiveFilter}
        />
        {noTalk ? (
          <NoTalk />
        ) : (
          <React.Fragment>
            {data?.pages.map((talkData, i) => (
              <React.Fragment key={i}>
                {talkData?.reviewList?.map((talk, i) => (
                  <TalkContents movieId={movieId} talk={talk} key={i} />
                ))}
              </React.Fragment>
            ))}
          </React.Fragment>
        )}
      </section>
    </section>
  );
}
