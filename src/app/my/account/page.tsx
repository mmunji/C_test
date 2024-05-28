import Image from "next/image";
import Link from "next/link";

import { Naver } from "../../../../public/icons";

export default function Page() {
  return (
    <div className="flex flex-col gap-10 px-5 Tablet:px-0">
      <div className="flex flex-col gap-3 Tablet:gap-5">
        <h2 className="Text-s-Bold Tablet:Text-l-Bold">계정</h2>
        <div className="flex flex-col gap-2 rounded-xl bg-D1_Gray px-4 py-2 Text-s-Medium Tablet:px-8 Tablet:py-4 Tablet:Text-m-Medium">
          <div className="flex items-center">
            <div className="flex flex-1 items-center gap-5 Tablet:gap-0">
              <span className="w-12 text-Gray_Orange Tablet:w-[120px]">
                닉네임
              </span>
              <span className="">영화처돌이</span>
            </div>
            <button type="button" className="inline-block p-2 text-Gray_Orange">
              변경
            </button>
          </div>
          <div className="h-[1px] w-full bg-D2_Gray" />
          <div className="flex items-center">
            <div className="flex h-10 flex-1 items-center gap-5 Tablet:gap-0">
              <span className="w-12 text-Gray_Orange Tablet:w-[120px]">
                이메일
              </span>
              <span className="text-Gray">abcdef@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 Tablet:gap-5">
        <h2 className="Text-s-Bold Tablet:Text-l-Bold">로그인 연동</h2>
        <div className="flex items-center gap-3 rounded-xl bg-D1_Gray px-4 py-2 Text-s-Medium Tablet:px-8 Tablet:py-4 Tablet:Text-m-Medium">
          <div className="flex flex-1 items-center gap-4">
            <div className="bg-Naver my-1 flex h-10 w-10 items-center justify-center rounded-lg Tablet:my-0">
              <Image alt="네이버" src={Naver} />
            </div>
            <span className="">네이버 계정 연동 중</span>
          </div>
          <button type="button" className="inline-block p-2 text-Gray_Orange">
            로그아웃
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3 Tablet:gap-5">
        <h2 className="Text-s-Bold Tablet:Text-l-Bold">개인 정보</h2>
        <div className="flex flex-col gap-2 rounded-xl bg-D1_Gray px-4 py-2 Text-s-Medium Tablet:px-8 Tablet:py-4 Tablet:Text-m-Medium">
          <div className="flex items-center">
            <div className="flex flex-1 items-center gap-5 Tablet:gap-0">
              <span className="w-12 text-Gray_Orange Tablet:w-[120px]">
                생년월일
              </span>
              <span className="">2024 / 01 / 01</span>
            </div>
            <button type="button" className="inline-block p-2 text-Gray_Orange">
              변경
            </button>
          </div>
          <div className="h-[1px] w-full bg-D2_Gray" />
          <div className="flex items-center">
            <div className="flex flex-1 items-center gap-5 Tablet:gap-0">
              <span className="w-12 text-Gray_Orange Tablet:w-[120px]">
                성별
              </span>
              <span className="">남자</span>
            </div>
            <button type="button" className="inline-block p-2 text-Gray_Orange">
              변경
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start text-Gray Text-s-Medium Tablet:Text-m-Medium">
        <button type="button" className="py-2 text-Gray_Orange">
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
