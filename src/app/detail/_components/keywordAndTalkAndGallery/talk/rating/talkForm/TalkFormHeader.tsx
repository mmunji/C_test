import { useQuery } from "@tanstack/react-query";

import SmallBadge from "@/components/smallBadge/SmallBadge";
import { API_URL } from "@/constants/api_url";
import { tokenManager } from "@/services/auth/tokenManager";
import { cn } from "@/utils/cn";

export default function TalkFormHeader() {
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
    <div className="absolute left-5 top-4 flex items-center Tablet:top-5">
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
          {badges?.map((el, i) => (
            <SmallBadge key={i} content={"액션가면"} withoutContent size="sm" />
          ))}
        </section>
      )}
    </div>
  );
}
