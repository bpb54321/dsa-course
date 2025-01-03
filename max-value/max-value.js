export function findMaxValue(numberArray) {
  let maxNumber = -Infinity;
  for (const number of numberArray) {
    if (number > maxNumber) {
      maxNumber = number;
    }
  }
  return maxNumber;
}
