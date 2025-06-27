"use client";

import React, { useState } from "react";

import DividingLine from "../../common/DividingLine";
import NoTalk from "./NoTalk";
import TalkContents from "./talkContents/TalkContents";
import TalkHeader from "./TalkHeader";
import Rating from "./rating/Rating";

interface TalkProps {
  title: string;
  movieId: number;
  movieDetailData: any;
}

const dummyTalks = [
  {
    id: 1,
    content: "이 영화 정말 감동적이었어요!",
    likeCount: 12,
    writer: { nickname: "감성영화인", profileImageUrl: "" },
    createdAt: "2024-06-01",
    isLiked: false,
  },
  {
    id: 2,
    content: "연출이 정말 멋졌습니다. 특히 후반부!",
    likeCount: 8,
    writer: { nickname: "영화광", profileImageUrl: "" },
    createdAt: "2024-06-02",
    isLiked: false,
  },
  {
    id: 3,
    content: "스토리는 평범했지만 배우들의 연기가 좋았어요.",
    likeCount: 5,
    writer: { nickname: "솔직리뷰어", profileImageUrl: "" },
    createdAt: "2024-06-03",
    isLiked: false,
  },
];

export default function Talk({ title, movieId, movieDetailData }: TalkProps) {
  const filters = ["최신순", "좋아요순"];
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  const sortedTalks = [...dummyTalks].sort((a, b) => {
    return activeFilter === "최신순"
      ? b.createdAt.localeCompare(a.createdAt)
      : b.likeCount - a.likeCount;
  });

  return (
    <section>
      <Rating
        title={title}
        movieId={movieId}
        movieDetailData={movieDetailData}
        myTalk={null}
      />
      <DividingLine />

      <section className="Laptop:rounded-xl Laptop:bg-D1_Gray Laptop:p-8">
        <TalkHeader
          title={title}
          activeFilter={activeFilter}
          filters={filters}
          setActiveFilter={setActiveFilter}
        />
        {sortedTalks.length === 0 ? (
          <NoTalk />
        ) : (
          <>
            {sortedTalks.map((talk, i) => (
              <TalkContents
                key={talk.id}
                index={i}
                length={sortedTalks.length}
                movieId={movieId}
                talk={talk}
                setOpen={() => {}}
                setTalkId={() => {}}
              />
            ))}
          </>
        )}
      </section>
    </section>
  );
}
