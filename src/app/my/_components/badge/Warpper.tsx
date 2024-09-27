"use client";

import { useState } from "react";

import BadgeItem from "@/app/my/_components/badge/Item";
import BadgeTitle from "@/app/my/_components/badge/Title";

interface BadgeProps {
  badges: ObtainedBadge[];
  reviewCounts: (BadgeCount | undefined)[];
}

export default function BadgeWarpper({ badges, reviewCounts }: BadgeProps) {
  const activeBadges = badges.filter((badge) => badge.use);
  const [isEditing, setIsEditing] = useState(false);
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
      <div className="grid grid-cols-3 gap-3 Tablet:grid-cols-4 Tablet:gap-5 Laptop:grid-cols-6 Laptop:gap-x-6 Laptop:gap-y-4">
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
    </>
  );
}
