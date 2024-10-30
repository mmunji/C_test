import { RefObject } from "react";

export default function handleResizeTextareaHeight(
  maxLines: number,
  lineHeight: number,
  ref: RefObject<HTMLTextAreaElement>,
) {
  if (ref.current) {
    ref.current.style.height = "auto";
    const scrollHeight = ref.current.scrollHeight;
    const maxHeight = maxLines * lineHeight;
    const refStyle = ref.current.style;

    if (scrollHeight > maxHeight) {
      refStyle.height = `${maxHeight}px`;
      refStyle.overflowY = "scroll";
    } else {
      refStyle.height = `${scrollHeight}px`;
      refStyle.overflowY = "hidden";
    }
  }
}
