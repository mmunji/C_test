// Scrollbar.js
import "swiper/css/scrollbar";

import { Scrollbar } from "swiper/modules";

export default function CustomScrollbar() {
  return (
    <div className="swiper-scrollbar float-right w-5">
      11
      <div className="swiper-scrollbar-drag white w-[10px]"></div>
      {/* bg-primary 대신 색상 클래스 사용 */}
    </div>
  );
}
