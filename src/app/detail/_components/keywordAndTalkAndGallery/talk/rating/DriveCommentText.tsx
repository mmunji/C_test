interface DriveCommentTextProps {
  ratingValue: number;
  driveTalkText: string;
}

export default function DriveCommentText({
  ratingValue,
  driveTalkText,
}: DriveCommentTextProps) {
  return (
    <section className="mb-3 flex flex-col items-center justify-center gap-1">
      <p className="text-Primary Text-m-Bold Tablet:Text-l-Bold">
        {ratingValue}점
      </p>
      <p className="Text-s-Medium Tablet:Text-m-Medium">{driveTalkText}</p>
    </section>
  );
}
