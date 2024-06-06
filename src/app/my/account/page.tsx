import Link from "next/link";

import Account from "@/app/my/account/_components/Account";
import Personal from "@/app/my/account/_components/personal/Personal";
import SnsLogin from "@/app/my/account/_components/SnsLogin";

export default function Page() {
  return (
    <div className="flex flex-col gap-10 px-5 Tablet:px-0">
      <div className="flex flex-col gap-3 Tablet:gap-5">
        <h2 className="Text-s-Bold Tablet:Text-l-Bold">계정</h2>
        <Account />
      </div>
      <div className="flex flex-col gap-3 Tablet:gap-5">
        <h2 className="Text-s-Bold Tablet:Text-l-Bold">로그인 연동</h2>
        <SnsLogin />
      </div>
      <div className="flex flex-col gap-3 Tablet:gap-5">
        <h2 className="Text-s-Bold Tablet:Text-l-Bold">개인 정보</h2>
        <Personal />
      </div>
      <div className="flex flex-col items-start text-Gray Text-s-Medium Tablet:Text-m-Medium">
        <button type="button" className="py-2 text-Gray_Orange hover:underline">
          회원탈퇴
        </button>
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
