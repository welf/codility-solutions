// https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/
const solution = arr => {
  // check if the given array is equal to [0]
  if (arr.length === 1) {
    const [element] = arr;
    if (element !== 1) return 0;
    return 1;
  }

  // calculate the maximum value of the given array
  const maxValue = Math.max(...arr);

  // check if the array length is equal to maximum value of the array
  if (arr.length !== maxValue) return 0;

  // create an array from 1 up to greatest value in the given array
  const fullArray = [...Array(maxValue + 1).keys()].slice(1);

  // merge it with given array
  const mergedArray = [...arr, ...fullArray];

  // if both array are identical the result will be 0 (0 ^ x ^ x ^ === 0)
  const result = mergedArray.reduce((acc, num) => acc ^ num, 0);

  return result === 0 ? 1 : 0;
};
