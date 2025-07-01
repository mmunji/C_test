"use client";

import React from "react";
import DividingLine from "../../common/DividingLine";
import TalkContents from "./talkContents/TalkContents";
import TalkHeader from "./TalkHeader";
import NoTalk from "./NoTalk";

interface TalkProps {
  title: string;
  movieId: number;
  movieDetailData: any;
}

const dummyTalks = [
  {
    id: 1,
    content: "정말 감동적인 영화였어요. 눈물이 멈추질 않았습니다.",
    star: 5,
    userNickname: "감성영화러버",
  },
  {
    id: 2,
    content: "배우들의 연기가 정말 대단했습니다!",
    star: 4,
    userNickname: "영화광",
  },
  {
    id: 3,
    content: "스토리는 조금 아쉬웠지만, 연출이 좋았어요.",
    star: 3,
    userNickname: "연출덕후",
  },
];

export default function Talk({ title }: TalkProps) {
  const filters = ["최신순", "좋아요순"];
  const [activeFilter, setActiveFilter] = React.useState(filters[0]);

  return (
    <section>
      <DividingLine />

      <section className="Laptop:rounded-xl Laptop:bg-D1_Gray Laptop:p-8">
        <TalkHeader
          title={title}
          activeFilter={activeFilter}
          filters={filters}
          setActiveFilter={setActiveFilter}
        />
        {dummyTalks.length === 0 ? (
          <NoTalk />
        ) : (
          <>
            {dummyTalks.map((talk, i) => (
              <TalkContents
                index={i}
                length={dummyTalks.length}
                key={talk.id}
                movieId={1}
                talk={talk}
                setOpen={() => { }}
                setTalkId={() => { }}
              />
            ))}
          </>
        )}
      </section>
    </section>
  );
}
