"use server";

import dynamic from "next/dynamic";

import { movieAPIs } from "@/services/movie/movieAPIs";

import MasterPieceSkeleton from "../Skeleton/MasterPieceMovie/MasterPieceSkeletion";
const MasterPieceMoive = dynamic(() => import("./MasterPieceMoive"), {
  ssr: false,
  loading: () => <MasterPieceSkeleton />,
});
export default async function MasterPieceMoiveWapper() {
  const data: MovieHidingPiece[] = await movieAPIs.getHidingPiece();
  return <MasterPieceMoive data={data} />;
}
