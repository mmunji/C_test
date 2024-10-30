import { StaticImageData } from "next/image";

import {
  ActionBadge,
  AdventureBadge,
  AnimationBadge,
  ComedyBadge,
  CriminalBadge,
  DocumentaryBadge,
  DramaBadge,
  FamilyBadge,
  FantasyBadge,
  HistoryBadge,
  HorrorBadge,
  MillitaryBadge,
  MusicBadge,
  MysteryBadge,
  RomanceBadge,
  SFBadge,
  ThrillerBadge,
  TVBadge,
  WesternBadge,
} from "../../public/images";

export default function getEmoji(content: Badge) {
  const emojiMap: { [key: string]: StaticImageData } = {
    액션가면: ActionBadge,
    모험가: AdventureBadge,
    수사대장: CriminalBadge,
    사랑꾼: RomanceBadge,
    웃음사냥꾼: ComedyBadge,
    유니콘: FantasyBadge,
    유명한탐정: MysteryBadge,
    신비주의: SFBadge,
    소오름: HorrorBadge,
    현생러: DocumentaryBadge,
    파이브덕: AnimationBadge,
    굿리스너: MusicBadge,
    드라마틱: DramaBadge,
    따뜻한마음: FamilyBadge,
    고고학자: HistoryBadge,
    "티-브이": TVBadge,
    강심장: ThrillerBadge,
    밀덕: MillitaryBadge,
    뱅뱅뱅: WesternBadge,
  };

  const emoji = emojiMap[content];

  return emoji;
}
