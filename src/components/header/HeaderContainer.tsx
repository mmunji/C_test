import Image from "next/image";

import Header from "@/components/header/Header";
import HeaderAuthButtons from "@/components/header/headerRightSection/HeaderAuthButtons";
import HeaderAuthedUserSection from "@/components/header/headerRightSection/HeaderAuthedUserSection";
import { myAPIs } from "@/services/my/myAPIs";

import { ProfileBlue } from "../../../public/images";

export default async function HeaderContainer() {
  const user = await myAPIs.getUser();
  return (
    <Header>
      {user ? (
        <HeaderAuthedUserSection isAdmin={user.provider === "ROLE_ADMIN"}>
          <div className="relative h-[30px] w-[30px] overflow-hidden rounded-full">
            <Image
              fill
              className="object-cover"
              alt="유저_프로필"
              src={
                user.profile
                  ? `data:image/png;base64,${user.profile}`
                  : ProfileBlue
              }
            />
          </div>
          <span>{user.nickname}</span>
        </HeaderAuthedUserSection>
      ) : (
        <HeaderAuthButtons />
      )}
    </Header>
  );
}
