"use client";
import KeyWordPosts from "./KeyWordPosts";
interface KeyWordInfoProps {
  keywordInfo: MentionKeword;
}

export default function RightKeyWords({ keywordInfo }: KeyWordInfoProps) {
  // const keyword = keywordInfo.keyword;
  return (
    <div>
      <div className="grid grid-cols-1 gap-3 Tablet:hidden Laptop:hidden Desktop:hidden">
        {keywordInfo?.reviewList.map((movie, index) => (
          <KeyWordPosts
            key={index}
            id={movie.review.id}
            nickname={movie.nickname}
            movieName={movie.review?.movienm}
            star={movie.review?.star}
            content={movie.review?.content}
            // keyword={keyword}
          />
        ))}
      </div>
      <div className="hidden  grid-cols-3 gap-4 Tablet:grid Laptop:hidden Desktop:hidden">
        {keywordInfo?.reviewList.map((movie, index) => (
          <KeyWordPosts
            key={index}
            id={movie.review.id}
            nickname={movie.nickname}
            movieName={movie.review?.movienm}
            star={movie.review?.star}
            content={movie.review?.content}
            // keyword={keyword}
          />
        ))}
      </div>
      <div className="hidden  grid-cols-4 gap-5 Tablet:hidden Laptop:grid Desktop:hidden">
        {keywordInfo?.reviewList.map((movie, index) => (
          <KeyWordPosts
            key={index}
            id={movie.review.id}
            nickname={movie.nickname}
            movieName={movie.review?.movienm}
            star={movie.review?.star}
            content={movie.review?.content}
            // keyword={keyword}
          />
        ))}
      </div>
      <div className="hidden  grid-cols-5 gap-6 Tablet:hidden Laptop:hidden Desktop:grid">
        {keywordInfo?.reviewList.map((movie, index) => (
          <KeyWordPosts
            key={index}
            id={movie.review.id}
            nickname={movie.nickname}
            movieName={movie.review?.movienm}
            star={movie.review?.star}
            content={movie.review?.content}
            // keyword={keyword}
          />
        ))}
      </div>
    </div>
  );
}
