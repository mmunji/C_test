import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "./getQueryClient";
import Datas from "@/components/Datas";
import example from "@/api/example";

export default async function HydratedPosts() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({ queryKey: ["datas"], queryFn: example });
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Datas />
    </Hydrate>
  );
}
