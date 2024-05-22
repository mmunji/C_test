import NoTalk from "./NoTalk";
import Rating from "./Rating";
import TalkHeader from "./TalkHeader";

export default function Talk() {
  return (
    <section>
      <Rating />
      <div className="my-8 h-3 w-[100vw] translate-x-[-20px] bg-Black Tablet:translate-x-[-24px] Laptop:hidden" />

      <TalkHeader />
      <NoTalk />
    </section>
  );
}
