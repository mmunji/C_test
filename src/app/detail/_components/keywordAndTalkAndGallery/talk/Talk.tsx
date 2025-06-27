"use client";

import React from "react";
import DividingLine from "../../common/DividingLine";
import TalkHeader from "./TalkHeader";
import TalkContents from "./talkContents/TalkContents";
import NoTalk from "./NoTalk";

// 더미 데이터
const dummyTalks = [
  {
    id: 1,
    nickname: "무비러버",
    content: "이 영화 정말 감동이었어요!",
    star: 5,
  },
  {
    id: 2,
    nickname: "영화광",
    content: "연출은 훌륭했지만 스토리는 아쉬웠습니다.",
    star: 3,
  },
];

interface TalkProps {
  title: string;
  movieId: number;
  movieDetailData: any;
}

export default function Talk({ title }: TalkProps) {
  const filters = ["최신순", "좋아요순"];
  const [activeFilter, setActiveFilter] = React.useState(filters[0]);

  const noTalk = dummyTalks.length === 0;

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
        {noTalk ? (
          <NoTalk />
        ) : (
          <>
            {dummyTalks.map((talk, i) => (
              <TalkContents
                key={talk.id}
                index={i}
                length={dummyTalks.length}
                movieId={0}
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
