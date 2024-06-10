interface NewKeywordProps {
  latestKeywords: Keyword[];
}

export default function NewKeyword({ latestKeywords }: NewKeywordProps) {
  return (
    <div className="mt-4 flex justify-center Laptop:mx-[-20px] Laptop:mt-3">
      <p className="mr-3 text-L_Gray Text-s-Medium">최신순</p>
      <section className="flex gap-2">
        {latestKeywords.map((keyword, i) => (
          <p key={i} className="text-Gray Text-s-Regular">
            {keyword.keyword}
          </p>
        ))}
      </section>
    </div>
  );
}
