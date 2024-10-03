import Link from "next/link";

import { DeleteAccountButton } from "@/app/my/_components/buttons";
import { AccountFormTitle } from "@/app/my/_components/Labels";
import Account from "@/app/my/account/_components/account/Account";
import Personal from "@/app/my/account/_components/personal/Personal";
import SnsLogin from "@/app/my/account/_components/SnsLogin";

export default async function Page() {
  return (
    <div className="flex flex-col gap-10 px-5 Tablet:px-0">
      <div className="flex flex-col gap-3 Tablet:gap-5">
        <AccountFormTitle>계정</AccountFormTitle>
        <Account />
      </div>
      <div className="flex flex-col gap-3 Tablet:gap-5">
        <AccountFormTitle>로그인 연동</AccountFormTitle>
        <SnsLogin />
      </div>
      <div className="flex flex-col gap-3 Tablet:gap-5">
        <AccountFormTitle>개인 정보</AccountFormTitle>
        <Personal />
      </div>
      <div className="flex flex-col items-start text-Gray Text-s-Medium Tablet:Text-m-Medium">
        <DeleteAccountButton>회원탈퇴</DeleteAccountButton>
        <div className="block py-2 Desktop:hidden">개인정보 처리방침</div>
        <div className="block Desktop:hidden">
          문의{" "}
          <Link
            className="inline-block py-2 underline"
            href="http://pf.kakao.com/_xmWUxmG"
            target="_blank"
          >
            카카오톡 1:1 오픈 채팅방
          </Link>
        </div>
      </div>
    </div>
  );
}
