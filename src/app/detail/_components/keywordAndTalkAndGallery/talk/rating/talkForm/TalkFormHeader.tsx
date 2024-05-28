import DetailBadge from "@/app/detail/_components/common/DetailBadge";

export default function TalkFormHeader() {
  return (
    <div className="absolute left-5 top-4 flex h-[25px] max-w-[280px] items-center">
      <p className="mr-3 text-Silver Text-s-Bold">닉네임</p>

      <section className="flex h-full gap-1">
        <DetailBadge content="액션가면" />
        <DetailBadge content="모험가" />
        <DetailBadge content="호그와트생" />
      </section>
    </div>
  );
}
