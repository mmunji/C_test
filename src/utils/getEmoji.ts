export default function getEmoji(content: Badge) {
  const emojiMap: { [key: string]: string } = {
    액션가면: "👊",
    모험가: "👞",
    수사대장: "⚖️",
    사랑꾼: "💖",
    웃음사냥꾼: "🎈",
    호그와트생: "🪄",
    유명한탐정: "🔎",
    신비주의: "👽",
    소오름: "👻",
    현생러: "🌎",
    파이브덕: "🐤",
    굿리스너: "🎧",
    드라마틱: "🤸",
    따뜻한마음: "☀️",
    고고학자: "🗿",
    "티-브이": "📺",
    강심장: "🔥",
    밀덕: "🦆",
    뱅뱅뱅: "🔫",
  };

  const emoji = emojiMap[content];

  return emoji;
}
