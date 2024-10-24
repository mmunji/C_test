"use client";

import Image from "next/image";
import { useState } from "react";

import BadgeItem from "@/app/my/_components/badge/Item";
import BadgeTitle from "@/app/my/_components/badge/Title";
import { cn } from "@/utils/cn";

import { CaretDownMd } from "../../../../../public/icons";

interface BadgeProps {
  badges: ObtainedBadge[];
  reviewCounts: (BadgeCount | undefined)[];
}

export default function BadgeWarpper({ badges, reviewCounts }: BadgeProps) {
  const activeBadges = badges.filter((badge) => badge.use);
  const [isEditing, setIsEditing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedBadgeIds, setSelectedBadgeIds] = useState<number[]>(
    activeBadges.map((badge) => badge.genre_id),
  );

  const toggleMovie = (id: number) => {
    if (selectedBadgeIds.includes(id))
      return setSelectedBadgeIds((prev) =>
        prev.filter((prevId) => prevId !== id),
      );
    setSelectedBadgeIds((prev) => [...prev, id]);
  };

  const toggleEditing = async () => setIsEditing((prev) => !prev);
  return (
    <>
      <BadgeTitle
        selectedBadgeIds={selectedBadgeIds}
        hasBadge={!!badges.length}
        toggleEditing={toggleEditing}
        isEditing={isEditing}
      />
      <div className="">
        <div
          className={cn(
            isExpanded ? "h-[1036.58px]" : "h-[437.4px]",
            `transition-height grid grid-cols-3 gap-3 overflow-hidden duration-[800ms] Tablet:h-auto Tablet:grid-cols-4 Tablet:gap-5 Laptop:grid-cols-6 Laptop:gap-x-6 Laptop:gap-y-4`,
          )}
        >
          {reviewCounts.map((review) => (
            <BadgeItem
              hasObtainedBefore={
                !!badges.find((badge) => badge.genre_id === review?.id)
              }
              isEditing={isEditing}
              toggleMovie={toggleMovie}
              isSelected={!!selectedBadgeIds.find((id) => id === review?.id)}
              key={review?.name}
              badge={review}
            />
          ))}
        </div>
        <div className={cn(isExpanded && "hidden", "relative Tablet:hidden")}>
          <div className="absolute -top-[60px] h-[60px] w-full bg-[linear-gradient(180deg,rgba(38,38,38,0)_4.97%,#262626_94.11%)]" />
          <button
            onClick={() => setIsExpanded((prev) => !prev)}
            className="flex w-full justify-center p-2"
            type="button"
          >
            <Image width={24} height={24} src={CaretDownMd} alt="늘리기" />
          </button>
        </div>
      </div>
    </>
  );
}
