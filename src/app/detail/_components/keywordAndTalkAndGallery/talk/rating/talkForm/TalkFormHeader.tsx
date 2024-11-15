import { useQuery } from "@tanstack/react-query";

import SmallBadge from "@/components/smallBadge/SmallBadge";
import { API_URL } from "@/constants/api_url";
import { tokenManager } from "@/services/auth/tokenManager";
import { cn } from "@/utils/cn";

interface TalkFormHeaderProps {
  talk: string;
}

export default function TalkFormHeader({ talk }: TalkFormHeaderProps) {
  const accessToken = tokenManager.getToken();
  const { data: myData } = useQuery({
    queryKey: ["myInfo"],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/my/userInfo`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          access: `${accessToken}`,
        },
      });

      const data: MyInfo = await res.json();
      return data;
    },
  });

  const { data: badges } = useQuery({
    queryKey: ["myBadges"],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/my/BadgeByUser`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          access: `${accessToken}`,
        },
      });

      const data: ObtainedBadge[] = await res.json();
      return data;
    },
  });

  return (
    <div className="absolute left-5 top-4 flex w-[calc(100%-40px)] items-center justify-between Tablet:top-5">
      <div className="items flex">
        <p
          className={cn(
            "mr-3 text-Silver Text-s-Bold",
            badges?.length === 0 && "mt-1",
          )}
        >
          {myData?.nickname}
        </p>

        {Array.isArray(badges) && badges.length > 0 && (
          <section className="flex h-full gap-1">
            {badges
              .filter((badge) => badge.use)
              ?.slice(0, 3)
              ?.map((el, i) => (
                <SmallBadge
                  key={i}
                  content={el.badge_name}
                  withoutContent
                  size="sm"
                />
              ))}
          </section>
        )}
      </div>

      <p className="hidden text-Gray Text-s-Medium Laptop:block">
        {`${talk?.length}/2000`}
      </p>
    </div>
  );
}
