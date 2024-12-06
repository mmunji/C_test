"use client";
import { useEffect, useState } from "react";

import MasterPieceSkeleton from "@/app/(main)/_components/MainSkeleton/MasterPieceMovie/MasterPieceSkeletion";
import { movieAPIs } from "@/services/movie/movieAPIs";

import MasterPieceMoive from "./MasterPieceMoive";
export default function MasterPieceMoiveWapper() {
  const [data, setData] = useState<MovieHidingPiece[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response: MovieHidingPiece[] = await movieAPIs.getHidingPiece();
        setData(response);
      } catch (error) {
        console.error("Failed to fetch movie data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, []);

  if (isLoading) {
    return <MasterPieceSkeleton />;
  }

  return <MasterPieceMoive data={data} />;
}
