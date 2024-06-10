export default function arrangeCenterHighKeyword(array: Keyword[]) {
  const sortedArray = array.sort((a, b) => b.count - a.count);

  const result = Array(array.length);

  let leftIndex = Math.floor((array.length - 1) / 2);
  let rightIndex = leftIndex + 1;

  result[leftIndex] = sortedArray[0];

  for (let i = 1; i < sortedArray.length; i++) {
    if (i % 2 === 1) {
      result[leftIndex - Math.ceil(i / 2)] = sortedArray[i];
    } else {
      result[rightIndex + Math.floor(i / 2) - 1] = sortedArray[i];
    }
  }

  return result;
}
