import { CastAndCrew, DetailTrailer } from "../../../public/images";

export const movieInfo = [
  "2024",
  "000분",
  "00.0만명",
  "00세",
  "다큐멘터리/애니메이션",
];

export const castAndCrew = Array(30)
  .fill(null)
  .map(() => ({
    src: CastAndCrew,
    name: "티모시 샬라메",
    casting: "윌리 웡카잔아ㅏㅏㅏㅏ",
  }));

export const keywords = Array(26)
  .fill("키워드")
  .map((content) => content);

export const newKeywords = [
  "최신입니다",
  "최신입니다",
  "최신입니다",
  "최신입니다",
];

export const trailerAndPhoto = Array(20)
  .fill(null)
  .map(() => DetailTrailer);
