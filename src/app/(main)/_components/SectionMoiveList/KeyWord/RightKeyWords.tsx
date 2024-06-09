"use client";
import KeyWordPosts from "./KeyWordPosts";

export default function RightKeyWords() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-3 Tablet:hidden Laptop:hidden Desktop:hidden">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <KeyWordPosts key={index} />
          ))}
      </div>
      <div className="hidden  grid-cols-3 gap-4 Tablet:grid Laptop:hidden Desktop:hidden">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <KeyWordPosts key={index} />
          ))}
      </div>
      <div className="hidden  grid-cols-4 gap-5 Tablet:hidden Laptop:grid Desktop:hidden">
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <KeyWordPosts key={index} />
          ))}
      </div>
      <div className="hidden  grid-cols-5 gap-6 Tablet:hidden Laptop:hidden Desktop:grid">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <KeyWordPosts key={index} />
          ))}
      </div>
    </div>
  );
}
