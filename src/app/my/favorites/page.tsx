"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

import Placeholder from "@/app/my/_components/Placeholder";
import Button from "@/components/buttons/Button";

import { Check } from "../../../../public/icons";

interface Movie {
  id: number;
  title: string;
  poster: string;
}

export default function Page() {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedMovieIds, setSelectedMovieIds] = useState<number[]>([]);
  const [movieList, setMovieList] = useState<Movie[]>([
    {
      id: 1,
      title: "웡카",
      poster: "/images/detail/detail-poster-example.png",
    },
    {
      id: 2,
      title: "웡카",
      poster: "/images/detail/detail-poster-example.png",
    },
    {
      id: 3,
      title: "웡카",
      poster: "/images/detail/detail-poster-example.png",
    },
    {
      id: 4,
      title: "웡카",
      poster: "/images/detail/detail-poster-example.png",
    },
  ]);

  const handleMovieSelect = (id: number) => {
    if (!isEditing) return;
    setSelectedMovieIds((prev) =>
      prev.includes(id)
        ? prev.filter((prevId) => prevId !== id)
        : [...prev, id],
    );
  };

  const handleEditButtonClick = () => {
    if (isEditing) setSelectedMovieIds([]);
    setIsEditing((prev) => !prev);
  };

  const handleMovieDelete = () => {
    setMovieList(
      movieList.filter((movie) => !selectedMovieIds.includes(movie.id)),
    );
    setSelectedMovieIds([]);
  };

  return (
    <div className="flex flex-col gap-3 px-5 Tablet:px-0">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center Text-m-Bold Tablet:Text-l-Bold">
          {isEditing ? (
            <span className="">{selectedMovieIds.length}개 선택됨</span>
          ) : (
            <>
              <span className="hidden Tablet:block">
                찜한 작품 {movieList.length}개
              </span>
              <span className="block Tablet:hidden">
                총 {movieList.length}개
              </span>
            </>
          )}
        </h2>
        <div className="flex gap-2 Text-m-Medium">
          {isEditing && (
            <>
              <Button
                disabled={!selectedMovieIds.length}
                variant={"text"}
                onClick={handleMovieDelete}
                className="hidden text-Error hover:text-Error Tablet:flex"
              >
                삭제
              </Button>
              <Button
                disabled={!selectedMovieIds.length}
                variant={"text"}
                onClick={() => setSelectedMovieIds([])}
                className="hidden Tablet:flex"
              >
                선택 해제
              </Button>
            </>
          )}
          <Button
            className="Tablet:flex"
            variant={"text"}
            onClick={handleEditButtonClick}
          >
            {isEditing ? "완료" : "편집"}
          </Button>
        </div>
      </div>

      {movieList.length ? (
        <div className="grid grid-cols-2 gap-2 Tablet:grid-cols-3 Tablet:gap-x-5 Tablet:gap-y-4 Laptop:grid-cols-4 Laptop:gap-x-6 Laptop:gap-y-5">
          {movieList.map((movie) => (
            <button
              disabled={!isEditing}
              onClick={() => handleMovieSelect(movie.id)}
              key={movie.id}
              type="button"
              className={clsx(
                isEditing &&
                  selectedMovieIds.includes(movie.id) &&
                  "outline outline-2 outline-Primary Tablet:outline-4",
                `relative h-[230px] w-full overflow-hidden rounded-xl Tablet:h-[288px] Laptop:h-[331px]`,
              )}
            >
              <Image
                fill
                src={movie.poster}
                alt={movie.title}
                className={clsx(
                  isEditing &&
                    selectedMovieIds.includes(movie.id) &&
                    "brightness-50",
                  `object-cover`,
                )}
              />
              {selectedMovieIds.includes(movie.id) && isEditing && (
                <div className="absolute right-2 top-2 rounded-lg bg-Primary">
                  <Image src={Check} width={24} height={24} alt="CircleCheck" />
                </div>
              )}
            </button>
          ))}
        </div>
      ) : (
        <div className="flex justify-center">
          <Placeholder type="rating" />
        </div>
      )}
      {isEditing && (
        <div className="fixed bottom-0 left-0 flex w-screen items-center border-t border-D2_Gray bg-D1_Gray py-[6px] pb-6 Text-m-Medium Tablet:hidden">
          <button
            type="button"
            disabled={!selectedMovieIds.length}
            className="flex-1 p-2 Text-m-Medium disabled:text-Gray"
            onClick={() => setSelectedMovieIds([])}
          >
            선택 해제
          </button>
          <button
            disabled={!selectedMovieIds.length}
            type="button"
            onClick={handleMovieDelete}
            className="flex-1 p-2 text-Error Text-m-Medium disabled:text-Gray"
          >
            삭제
          </button>
        </div>
      )}
    </div>
  );
}
