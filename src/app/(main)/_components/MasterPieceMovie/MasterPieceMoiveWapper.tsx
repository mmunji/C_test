import { movieAPIs } from "@/services/movie/movieAPIs";
import { delay } from "@/utils/fn";

import MasterPieceMoive from "./MasterPieceMoive";

export default async function MasterPieceMoiveWapper() {
  const data = await movieAPIs.getHidingPiece();

  if (!data.length) return null;

  return <MasterPieceMoive data={data} />;
}
