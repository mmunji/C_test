import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "./getQueryClient";
import example from "@/api/example";
import ExampleData from "@/components/ExampleData";

export default async function HydratedExample() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({ queryKey: ["example"], queryFn: example });
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <ExampleData />
    </Hydrate>
  );
}
