interface TextBeforeRatingProps {
  title: string;
}

export default function TextBeforeRating({ title }: TextBeforeRatingProps) {
  return (
    <div className="mx-auto mb-3 flex gap-1">
      <span className="truncate text-regular font-Bold text-Primary Laptop:text-[20px]">
        {title}
      </span>
      <span className="shrink-0 text-regular font-Bold text-Silver Laptop:text-[20px]">
        어떠셨나요?
      </span>
    </div>
  );
}
