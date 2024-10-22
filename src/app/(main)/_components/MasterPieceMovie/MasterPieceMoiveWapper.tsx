import { movieAPIs } from "@/services/movie/movieAPIs";
import { delay } from "@/utils/fn";

import MasterPieceMoive from "./MasterPieceMoive";

export default async function MasterPieceMoiveWapper() {
  await delay(15000000);
  const data = await movieAPIs.getHidingPiece();
  return <MasterPieceMoive data={data} />;
}
