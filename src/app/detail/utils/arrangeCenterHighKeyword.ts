export default function arrangeCenterHighKeyword(array: Keyword[]) {
  const sortedArray = array.sort((a, b) => b.count - a.count);
  const result = Array(array.length);
  const centerIndex = Math.floor((array.length - 1) / 2);

  result[centerIndex] = sortedArray[0];

  let leftIndex = centerIndex - 1;
  let rightIndex = centerIndex + 1;

  sortedArray.slice(1).forEach((keyword, index) => {
    if (index % 2 === 0) {
      result[rightIndex++] = keyword;
    } else {
      result[leftIndex--] = keyword;
    }
  });

  return result;
}
