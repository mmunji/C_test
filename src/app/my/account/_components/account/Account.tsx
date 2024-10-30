import { AccountFormLabel } from "@/app/my/_components/Labels";
import AccountNicknameForm from "@/app/my/account/_components/account/NicknameForm";
import { myAPIs } from "@/services/my/myAPIs";

export default async function Account() {
  const user = await myAPIs.getUser();

  return (
    <div className="flex flex-col gap-2 rounded-xl bg-D1_Gray px-4 py-2 Text-s-Medium Tablet:px-8 Tablet:py-4 Tablet:Text-m-Medium">
      <AccountNicknameForm nickname={user.nickname} />
      <div className="h-[1px] w-full bg-D2_Gray" />
      <div className="flex items-center">
        <div className="flex h-10 flex-1 items-center gap-5 Tablet:gap-1">
          <AccountFormLabel>이메일</AccountFormLabel>
          <span className="text-Gray">{user.email}</span>
        </div>
      </div>
    </div>
  );
}
