import { useCallback, useState } from "react";
export default function useFilter() {
  const [Filter, setFilter] = useState<number>(0);
  const ChangeFilter = useCallback((index: number) => {
    setFilter(index);
  }, []);
  return { Filter, ChangeFilter };
}
