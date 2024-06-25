"use client";
import KeyWordPosts from "./KeyWordPosts";
interface KeyWordInfoProps {
  keywordInfo: MentionKeword;
}

export default function RightKeyWords({ keywordInfo }: KeyWordInfoProps) {
  const keyword = keywordInfo?.keyword;
  return (
    <div>
      <div className="grid grid-cols-1 gap-3 Tablet:hidden Laptop:hidden Desktop:hidden">
        {Array(3)
          .fill(0)
          .map((_, index) => {
            if (!keywordInfo?.reviewList[index]) {
              return null;
            }
            return (
              <KeyWordPosts
                key={index}
                id={keywordInfo?.reviewList[index]?.review.id}
                nickname={keywordInfo?.reviewList[index]?.nickname}
                movieName={keywordInfo?.reviewList[index]?.review?.movienm}
                star={keywordInfo?.reviewList[index]?.review?.star}
                content={keywordInfo?.reviewList[index]?.review?.content}
                keyword={keyword}
              />
            );
          })}
      </div>
      <div className="hidden  grid-cols-3 gap-4 Tablet:grid Laptop:hidden Desktop:hidden">
        {Array(6)
          .fill(0)
          .map((_, index) => {
            if (!keywordInfo?.reviewList[index]) {
              return null;
            }
            return (
              <KeyWordPosts
                key={index}
                id={keywordInfo?.reviewList[index]?.review.id}
                nickname={keywordInfo?.reviewList[index]?.nickname}
                movieName={keywordInfo?.reviewList[index]?.review?.movienm}
                star={keywordInfo?.reviewList[index]?.review?.star}
                content={keywordInfo?.reviewList[index]?.review?.content}
                keyword={keyword}
              />
            );
          })}
      </div>
      <div className="hidden  grid-cols-4 gap-5 Tablet:hidden Laptop:grid Desktop:hidden">
        {Array(8)
          .fill(0)
          .map((_, index) => {
            if (!keywordInfo?.reviewList[index]) {
              return null;
            }
            return (
              <KeyWordPosts
                key={index}
                id={keywordInfo?.reviewList[index]?.review.id}
                nickname={keywordInfo?.reviewList[index]?.nickname}
                movieName={keywordInfo?.reviewList[index]?.review?.movienm}
                star={keywordInfo?.reviewList[index]?.review?.star}
                content={keywordInfo?.reviewList[index]?.review?.content}
                keyword={keyword}
              />
            );
          })}
      </div>
      <div className="hidden  grid-cols-5 gap-6 Tablet:hidden Laptop:hidden Desktop:grid">
        {keywordInfo?.reviewList.map((movie, index) => {
          if (!movie) {
            return null;
          }
          return (
            <KeyWordPosts
              key={index}
              id={movie.review.id}
              nickname={movie.nickname}
              movieName={movie.review?.movienm}
              star={movie.review?.star}
              content={movie.review?.content}
              keyword={keyword}
            />
          );
        })}
      </div>
    </div>
  );
}
