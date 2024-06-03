import SmallBadge from "@/components/smallBadge/SmallBadge";
import useDevice from "@/hooks/useDevice";

export default function TalkFormHeader() {
  return (
    <div className="absolute left-5 top-4 flex items-center Tablet:top-5">
      <p className="mr-3 text-Silver Text-s-Bold">닉네임</p>

      <section className="flex h-full gap-1">
        <SmallBadge content="액션가면" isTalkForm />
        <SmallBadge content="모험가" isTalkForm />
        <SmallBadge content="호그와트생" isTalkForm />
      </section>
    </div>
  );
}
