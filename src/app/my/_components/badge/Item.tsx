import { EMOJI_MAP } from "@/constants/emoji";
import { cn } from "@/utils/cn";
import getEmoji from "@/utils/getEmoji";

interface BadgeItemProps {
  badge: BadgeCount | undefined;
  isSelected: boolean;
  toggleMovie: (id: number) => void;
  isEditing: boolean;
  hasObtainedBefore: boolean;
}

export default function BadgeItem({
  badge,
  isSelected,
  isEditing,
  toggleMovie,
  hasObtainedBefore,
}: BadgeItemProps) {
  const badgeName = EMOJI_MAP.find((emoji) => emoji.id === badge?.id)?.name;
  const hasBadge = hasObtainedBefore || (badge?.count && badge.count >= 10);
  if (!badgeName || !badge) return null;
  return (
    <button
      onClick={() => {
        if (!hasBadge || !isEditing) return;
        toggleMovie(badge.id);
      }}
      className={`${isSelected ? "badge-gradient" : "bg-Black"} ${isEditing && hasBadge ? "cursor-pointer" : "cursor-default"} flex h-[126px] flex-col items-center justify-center gap-3 rounded-xl Tablet:h-[162px] Tablet:gap-4`}
    >
      <div
        className={cn(
          { "bg-[#1E1E1E]/80 blur-[4px]": !hasBadge },
          `Emoji-l Mobile:text-[32px] Tablet:text-5xl`,
        )}
      >
        {getEmoji(badgeName)}
      </div>
      <div className="flex flex-col items-center gap-1">
        <p className="Text-s-Bold">{hasBadge ? badgeName : "???"}</p>
        <div className="flex items-center gap-1">
          <span className={`text-Gray_Orange Text-xs-Regular`}>
            {badge.name}
          </span>
          <span
            className={cn(
              {
                "hidden text-Silver Text-xs-Bold Tablet:inline-block": hasBadge,
              },
              { "text-Gray_Orange Text-xs-Regular": !hasBadge },
              { "text-Primary Text-xs-Bold": isSelected },
            )}
          >
            {hasBadge
              ? isSelected
                ? "사용 중"
                : "보유 중"
              : `0${badge.count} / 10`}
          </span>
        </div>
      </div>
    </button>
  );
}
