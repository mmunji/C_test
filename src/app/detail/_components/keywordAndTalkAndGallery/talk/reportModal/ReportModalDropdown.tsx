import React, { Dispatch, SetStateAction } from "react";

import useClickOutside from "@/hooks/useOutsideClick";

interface ReportModalDropdownProps {
  REPORT_TYPE: string[];
  setReportType: Dispatch<SetStateAction<string>>;
  setOpenDropdown: Dispatch<SetStateAction<boolean>>;
}

function ReportModalDropdown({
  REPORT_TYPE,
  setReportType,
  setOpenDropdown,
}: ReportModalDropdownProps) {
  const ref = useClickOutside(() => {
    setTimeout(() => {
      setOpenDropdown(false);
    }, 100);
  });

  return (
    <div
      ref={ref}
      className="absolute left-0 top-[42px] flex w-full flex-col gap-1 rounded-xl border-[1px] border-D2_Gray bg-BG p-2"
    >
      {REPORT_TYPE.slice(1).map((el, i) => (
        <div
          key={i}
          onClick={() => setReportType(el)}
          className="rounded-lg px-3 py-2 text-Silver transition Text-m-Regular hover:bg-D3_Gray"
        >
          {el}
        </div>
      ))}
    </div>
  );
}

export default ReportModalDropdown;
