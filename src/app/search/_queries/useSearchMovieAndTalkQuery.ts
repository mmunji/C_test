import { useSuspenseQueries } from "@tanstack/react-query";

import { API_URL } from "@/constants/api_url";

const dummyTalks: SearchMovieTalkDTO[] = [
  {
    id: 1,
    content:
      "웡카 라는 영화에 대해서 설명해보겠습니다. 웡카는 진짜 존나 재미없어요. 나는 시팔 찰리의 초콜릿공장같은걸 원했는데 시팔 이건 그냥 애들 쳐보라고 만든 영화잖아요.",
    movieId: 23432,
    spoiler: false,
    star: 4.5,
    userId: 3242,
  },
  {
    id: 2,
    content:
      "웡카는 매우 실망스러웠습니다. 초콜릿공장의 매력을 기대했지만, 이 영화는 그저 아이들을 위한 내용뿐이었습니다.",
    movieId: 23432,
    spoiler: false,
    star: 2.0,
    userId: 3243,
  },
  {
    id: 3,
    content:
      "영화 웡카는 전체적으로 별로였어요. 이야기 전개도 지루하고, 캐릭터도 매력적이지 않았습니다.",
    movieId: 23432,
    spoiler: false,
    star: 1.5,
    userId: 3244,
  },
  {
    id: 4,
    content:
      "초콜릿공장을 기대했지만 웡카는 실망스러웠습니다. 내용이 너무 유치해서 재미가 없었어요.",
    movieId: 23432,
    spoiler: false,
    star: 2.5,
    userId: 3245,
  },
  {
    id: 5,
    content:
      "웡카는 정말 실망스러운 영화였습니다. 아이들을 위한 영화로도 재미가 없었고, 성인 관객을 위한 요소도 부족했습니다.",
    movieId: 23432,
    spoiler: false,
    star: 1.0,
    userId: 3246,
  },
  {
    id: 6,
    content:
      "웡카는 기대 이하의 영화였습니다. 초콜릿공장의 재미있는 요소를 기대했지만, 이 영화는 너무 평범했습니다.",
    movieId: 23432,
    spoiler: false,
    star: 3.0,
    userId: 3247,
  },
];
const dummyMovies: SearchMovieInfoDTO[] = [
  {
    adult: false,
    backdrop_path: "/yyFc8Iclt2jxPmLztbP617xXllT.jpg",
    genre_ids: [35, 10751, 14],
    id: 787699,
    original_language: "en",
    original_query: "Wonka",
    overview:
      "마법사이자 초콜릿 메이커 ‘윌리 웡카’의 꿈은 디저트의 성지, ‘달콤 백화점’에 자신만의 초콜릿 가게를 여는 것. 가진 것이라고는 낡은 모자 가득한 꿈과 단돈 12소베른 뿐이지만 특별한 마법의 초콜릿으로 사람들을 사로잡을 자신이 있다. 하지만 먹을 것도, 잠잘 곳도, 의지할 사람도 없는 상황 속에서 낡은 여인숙에 머물게 된 ‘웡카’는 ‘스크러빗 부인’과 ‘블리처’의 계략에 빠져 눈더미처럼 불어난 숙박비로 인해 순식간에 빚더미에 오른다. 게다가 밤마다 초콜릿을 훔쳐가는 작은 도둑 ‘움파 룸파’의 등장과 ‘달콤 백화점’을 독점한 초콜릿 카르텔의 강력한 견제까지. 세계 최고의 초콜릿 메이커가 되는 길은 험난하기만 한데…",
    popularity: 235.134,
    poster_path: "/lQ4cwauq2jeTkka9RvdMBTVPLMH.jpg",
    release_date: "2023-12-06",
    query: "웡카",
    video: false,
    vote_average: 7.167,
    vote_count: 3063,
  },
  {
    adult: false,
    backdrop_path: "/gzUvtI4VTjGLua5LZ2Y2eVndr2W.jpg",
    genre_ids: [16, 35, 10751],
    id: 455411,
    original_language: "en",
    original_query: "Tom and Jerry: Willy Wonka and the Chocolate Factory",
    overview:
      "천재 초콜릿 발명가 윌리웡카가 제멋대로 듀오 톰과 제리를 만나다! 톰과 제리는 찰리가 초콜릿 공장에 들어가기 위한 골드 티켓을 얻도록 도와준다. 그리고 그들은 윌리웡카의 라이벌이 소중한 사탕을 훔쳐가는 것을 막아야하는데…",
    popularity: 17.972,
    poster_path: "/vh5iYhj80l1inSdep61sF8g1S8m.jpg",
    release_date: "2017-06-28",
    query: "톰과 제리: 윌리 웡카와 초콜릿 공장",
    video: false,
    vote_average: 6.7,
    vote_count: 146,
  },
  {
    adult: false,
    backdrop_path: "/qCkbEdrmThVfvCgjAkvkue7BrGM.jpg",
    genre_ids: [10751, 14, 35],
    id: 252,
    original_language: "en",
    original_query: "Willy Wonka & the Chocolate Factory",
    overview:
      "세계적인 초콜릿과 과자 재벌 윌리 윙커(Willy Wonka: 진 와일더 분)는 어느날 100개의 초콜릿 상자 속에 단 5개의 황금 티켓을 넣어 발매하였다는 발표를 한다. 티켓을 찾아낸 어린이들은 평생 동안 웡카 초콜릿을 무상으로 공급받을 수 있고, 비밀에 싸인 웡카 공장의 견학을 할 수 있는 자격이 생긴다. 온세계는 웡카 열풍에 휩싸이고, 어른이며 애며 할 것없이 웡카 초콜릿을 박스째로 사다가 뜯어본다. 한반 아이들은 평균 수백개의 초콜릿을 사본 경험이 있을 정도로 대 인기를 얻은 이벤트가 되었다. 하지만, 집이 가난한 찰리(Charlie: 피터 오스트럼 분)는 친조부모와 외조부모, 그리고 혼자된 어머니를 모시고 살며, 가족의 끼니 걱정을 하는 어린이이다. 수백개의 상자를 뜯고 있는 사람들의 모습은 찰리에겐 너무나도 먼 일이지만, 할머니와 할아버지들은 어렵게 모은 돈으로 찰리에게 웡카 초콜릿을 선물한다. 헛된 꿈을 키우는 것을 원치않는 찰리의 어머니는 반대하지만, 겉으로 내색않는 찰리에게도 남들의 이야기는 마냥 부럽다. 영국, 미국, 독일 등지에서 황금 티켓을 가진 어린이들이 나타난다. 마지막 한개의 티켓은 남미의 어느 나라에서 발견되고 찰리에게는 더 이상 별다른 희망이 없다. 길을 걷다가 커다란 은화를 발견한 찰리는 먹고 싶던 초콜릿을 두 개 산다. 하나는 자신을 위해 하나는 할아버지(Grandpa Joe: 잭 알버트슨 분)를 위해. 그때, 남미에서 발견된 황금 티켓이 위조된 것이라는 뉴스 발표가 나온다. 찰리는 할아버지를 위해 남겨둔 마지막 초콜릿 포장을 뜯고. 그 안에 든 것은 이제 전 세계에 단 하나 남은 황금티켓. 한명의 동반자만을 허용한다는 웡카 회사의 이야기를 들은 찰리는 할아버지와 함께 가기로 하고, 공장 견학의 날, 다섯 어린이들은 각자의 부모와 함께 공장앞에 모인다. 윌리 웡카가 안내하는 초콜릿 공장. 어린이들은 이제껏 어디서도 본 적 없는 꿈과 환상의 세계에 들어가게 되는데.",
    popularity: 45.239,
    poster_path: "/xL2GISX0MODJfpHrMdLdZF6xWgW.jpg",
    release_date: "1971-06-29",
    query: "초콜렛 천국",
    video: false,
    vote_average: 7.505,
    vote_count: 3450,
  },
];

const getMoviesByQuery = async (query: string | null) => {
  if (!query) return;
  // await new Promise((resolve) => setTimeout(resolve, 2500));
  const res = await fetch(`${API_URL}/find/findMovie?query=${query}`);
  const data: SearchMovieInfoDTO[] = await res.json();
  return data;
};

const getTalksByQuery = async (query: string | null) => {
  if (!query) return;
  await new Promise((resolve) => setTimeout(resolve, 2500));
  if (query === "웡카") return dummyTalks;
  // const res = await fetch(`${API_URL}/find/findReview?query=${query}`);
  // const data: SearchMovieTalkDTO[] = await res.json();
  // return data;
  return [];
};

export function useSearchMovieAndTalkQuery(query: string | null) {
  const [{ data: talkList }, { data: movieList }] = useSuspenseQueries({
    queries: [
      {
        queryKey: ["search", "talks", query],
        queryFn: () => getTalksByQuery(query),
      },
      {
        queryKey: ["search", "movies", query],
        queryFn: () => getMoviesByQuery(query),
      },
    ],
  });
  return { talkList, movieList };
}
