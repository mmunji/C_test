const images = [
  "/images/detail/profile_blue.png",
  "/images/detail/profile_green.png",
  "/images/detail/profile_orange.png",
  "/images/detail/profile_red.png",
  "/images/detail/profile_violet.png",
];
export function delay(sec: number) {
  return new Promise((resolve) => setTimeout(resolve, sec));
}

export function getRandomProfileImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}
