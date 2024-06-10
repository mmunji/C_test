"use client";

import { useState } from "react";

import useDevice from "@/hooks/useDevice";

import DividingLine from "../../common/DividingLine";
import NoTalk from "./NoTalk";
import Rating from "./rating/Rating";
import TalkContents from "./talkContents/TalkContents";
import TalkHeader from "./TalkHeader";

interface TalkProps {
  title: string;
}

export default function Talk({ title }: TalkProps) {
  const [noTalk, setNotalk] = useState(false);
  const { device } = useDevice();

  const id = device === "mobile" || device === "tablet" ? undefined : "my-talk";

  return (
    <section id={id}>
      <Rating title={title} />
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
