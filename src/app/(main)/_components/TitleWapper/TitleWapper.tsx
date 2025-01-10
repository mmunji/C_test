import SpeechBubble from "@/components/speechBubble/SpeechBubble";

import useMessage from "../../_hooks/useMessage";

interface TitleWapperProps {
  type: "similar" | "watch";
}

async function fetchMessageData(type: "similar" | "watch") {
  const { title, message } = await useMessage(type);
  return { title, message };
}

export default async function TitleWapperServer({ type }: TitleWapperProps) {
  const { title, message } = await fetchMessageData(type);
  if (type == "similar") {
    return (
      <div className=" relative flex  flex-col gap-5 Tablet:flex-row Tablet:items-center">
        <h2 className="Text-l-Bold Laptop:Text-xxl-Bold ">{title}</h2>
        <div className="absolute -bottom-11 block w-max Tablet:hidden">
          <SpeechBubble id={"SimilarTastesMovie"} dir="top">
            {message}
          </SpeechBubble>
        </div>
        <div className="hidden Tablet:block">
          <SpeechBubble id={"SimilarTastesMovie"} dir="left">
            {message}
          </SpeechBubble>
        </div>
      </div>
    );
  }
}
