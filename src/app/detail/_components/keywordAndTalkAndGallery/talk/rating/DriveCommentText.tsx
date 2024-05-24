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
      <p className="text-Primary Text-m-Bold">{ratingValue}점</p>
      <p className="Text-s-Medium">{driveTalkText}</p>
    </section>
  );
}
