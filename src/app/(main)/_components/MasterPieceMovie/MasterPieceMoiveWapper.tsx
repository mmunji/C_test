import { movieAPIs } from "@/services/movie/movieAPIs";
import { delay } from "@/utils/fn";

import MasterPieceMoive from "./MasterPieceMoive";

export default async function MasterPieceMoiveWapper() {
  const data: MovieHidingPiece = await movieAPIs.getHidingPiece();
  return data.length != 0 ? <MasterPieceMoive data={data} /> : null;
}
