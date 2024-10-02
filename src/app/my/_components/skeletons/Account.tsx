import { NicknameChangeButton } from "@/app/my/_components/buttons";
import { AccountFormLabel } from "@/app/my/_components/Labels";
import { TextSkeleton } from "@/app/my/_components/skeletons/Skeleton";
import Button from "@/components/buttons/Button";

export function AccountFormSkeleton() {
  return (
    <div className="flex flex-col gap-2 rounded-xl bg-D1_Gray px-4 py-2 Text-s-Medium Tablet:px-8 Tablet:py-4 Tablet:Text-m-Medium">
      <form className="flex">
        <div className="flex flex-1 gap-5 Tablet:gap-1">
          <AccountFormLabel>닉네임</AccountFormLabel>
          <div className="flex h-10 items-center">
            <TextSkeleton className="h-sm w-[150px] Tablet:h-md" />
          </div>
        </div>
        <NicknameChangeButton
          disabled
          error={false}
          isEditing={false}
          type="button"
        >
          변경
        </NicknameChangeButton>
      </form>
      <div className="h-[1px] w-full bg-D2_Gray" />
      <div className="flex items-center">
        <div className="flex h-10 flex-1 items-center gap-5 Tablet:gap-1">
          <AccountFormLabel>이메일</AccountFormLabel>
          <TextSkeleton className="h-sm w-[150px] Tablet:h-md" />
        </div>
      </div>
    </div>
  );
}

export function AccountSnsLoginSkeleton() {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-D1_Gray px-4 py-2 Text-s-Medium Tablet:px-8 Tablet:py-4 Tablet:Text-m-Medium">
      <div className="flex flex-1 items-center gap-4">
        <div className="my-1 flex h-8 w-8 animate-pulse items-center justify-center rounded-lg bg-D3_Gray Tablet:my-0 Tablet:h-10 Tablet:w-10"></div>
        <TextSkeleton className="h-sm w-[150px] Tablet:h-md" />
      </div>
      <Button disabled variant={"text"}>
        로그아웃
      </Button>
    </div>
  );
}

export function AccountPersonalSkeleton() {
  return (
    <div className="flex flex-col gap-2 rounded-xl bg-D1_Gray px-4 py-2 Text-s-Medium Tablet:px-8 Tablet:py-4 Tablet:Text-m-Medium">
      <BirthdayFormSkeleton />
      <div className="h-[1px] w-full bg-D2_Gray" />
      <GenderFormSkeleton />
    </div>
  );
}

function BirthdayFormSkeleton() {
  return (
    <form className="flex">
      <div className="flex flex-1 items-center gap-5 Tablet:gap-1">
        <AccountFormLabel>생년월일</AccountFormLabel>
        <TextSkeleton className="h-sm w-[150px] Tablet:h-md" />
      </div>
      <Button
        disabled={true}
        type="submit"
        size={"none"}
        focus={"none"}
        variant={"text"}
      >
        변경
      </Button>
    </form>
  );
}

function GenderFormSkeleton() {
  return (
    <div className="flex items-center">
      <div className="flex flex-1 items-center gap-5 Tablet:gap-1">
        <AccountFormLabel>성별</AccountFormLabel>
        <TextSkeleton className="h-sm w-[150px] Tablet:h-md" />
      </div>
      <Button
        disabled={true}
        type="submit"
        size={"none"}
        focus={"none"}
        variant={"text"}
      >
        변경
      </Button>
    </div>
  );
}
