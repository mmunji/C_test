import TalkContentsBody from "./TalkContentsBody";
import TalkContentsFooter from "./TalkContentsFooter";
import TalkContentsHeader from "./talkContentsHeader/TalkContentsHeader";

export default function TalkContents() {
  return (
    <div className="border-b-[1px] border-D1_Gray py-5 first:mt-4 last:border-b-0 Tablet:mt-5 Tablet:py-6">
      <TalkContentsHeader />
      <TalkContentsBody />
      <TalkContentsFooter />
    </div>
  );
}
