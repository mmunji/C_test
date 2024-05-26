import Image from "next/image";

import { CameraSm } from "../../../../public/icons";

export default function UserInfo() {
  const badges = [
    {
      id: 1,
      badge: "👊",
      text: "액션가면",
    },
    {
      id: 2,
      badge: "👽",
      text: "신비주의",
    },
    {
      id: 3,
      badge: "🎈",
      text: "웃음사냥꾼",
    },
  ];

  return (
    <section className="mb-9 flex flex-col items-center gap-7">
      <div className="flex flex-col items-center gap-4 px-6 Tablet:px-0">
        <div className="flex justify-center">
          <div className="relative h-16 w-16 rounded-full bg-[#D9D9D9]">
            <button
              type="button"
              className="absolute -bottom-[2px] right-[2px] flex h-7 w-7 translate-x-1/2 items-center justify-center rounded-full bg-Gray"
            >
              <Image src={CameraSm} width={20} height={20} alt="CameraSm" />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="Text-m-Bold">
            <strong className="text-Primary">닉네임</strong>님, 안녕하세요!
          </p>
          <div className="flex items-center gap-1">
            {badges.map((badge) => (
              <div
                key={badge.id}
                className="flex w-fit items-center justify-center gap-1 rounded-lg bg-black bg-opacity-20 px-2 py-1"
              >
                <span className="font-appleSDGothicNeo Emoji-s">
                  {badge.badge}
                </span>
                <span className="Text-m-Medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-5 flex w-[320px] justify-center gap-[41px] rounded-xl bg-D1_Gray p-3 Tablet:mx-0">
        <div className="item-border my-info-border-item relative flex flex-col items-center">
          <span className="Text-m-Bold">00</span>
          <span className="text-L_Gray Text-xs-Regular">받은 좋아요</span>
        </div>
        <div className="item-border my-info-border-item relative flex flex-col items-center">
          <span className="Text-m-Bold">00</span>
          <span className="text-L_Gray Text-xs-Regular">평가한 영화</span>
        </div>
        <div className="item-border my-info-border-item relative flex flex-col items-center">
          <span className="Text-m-Bold">00</span>
          <span className="text-L_Gray Text-xs-Regular">찜한 영화</span>
        </div>
      </div>
    </section>
  );
}
