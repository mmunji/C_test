export default function TalkFormHeader() {
  return (
    <div className="absolute left-5 top-4 z-10 flex h-[25px] max-w-[280px] items-center">
      <p className="mr-3 text-Silver Text-s-Bold">닉네임</p>

      <section className="flex h-full gap-1">
        <p className="flex h-full items-center justify-center rounded-lg bg-black px-2 text-Silver Text-xs-Regular">
          액션가면
        </p>
        <p className="flex h-full items-center justify-center rounded-lg bg-black px-2 text-Silver Text-xs-Regular">
          모험가
        </p>
        <p className="flex h-full items-center justify-center rounded-lg bg-black px-2 text-Silver Text-xs-Regular">
          호그와트생
        </p>
      </section>
    </div>
  );
}
