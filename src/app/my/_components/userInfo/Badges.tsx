import SmallBadge from "@/components/smallBadge/SmallBadge";
import { myAPIs } from "@/services/my/myAPIs";

export default async function Badges() {
  const badges = await myAPIs.getBadges();
  const activeBadges = badges.filter((badge) => badge.use);

  return (
    <div className="flex items-center gap-1 Tablet:gap-4">
      {activeBadges.length ? (
        activeBadges.map((badge) => (
          <div key={badge.genre_id}>
            <div className="hidden Tablet:block">
              <SmallBadge content={badge.badge_name} size="md" />
            </div>
            <div className="block Tablet:hidden">
              <SmallBadge content={badge.badge_name} size="sm" />
            </div>
          </div>
        ))
      ) : (
        <div className="cursor-default rounded-lg border-Gray px-2 py-1 text-Gray outline-dashed outline-1 Tablet:px-3 Tablet:py-2">
          <span className="Text-s-Medium Tablet:Text-m-Medium">
            착용한 뱃지가 없어요
          </span>
        </div>
      )}
    </div>
  );
}
