import { useCallback, useState } from "react";
export default function useFilter() {
  const [Filter, setFilter] = useState<number>(0);

  const ChangeFilter = async (index: number): Promise<void> => {
    return new Promise((resolve) => {
      setFilter(index);
      resolve(); // 상태 변경 후 resolve 호출
    });
  };

  return { Filter, ChangeFilter };
}
