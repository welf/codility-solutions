// https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
const solution = arr => {
  // create array of length === (arr.length + 1) containing all integers
  const fullArray = [...Array(arr.length + 2).keys()].slice(1);
  // merge those arrays
  const mergedArray = [...arr, ...fullArray];
  // a ^ b ^ b === a
  return mergedArray.reduce((acc, num) => acc ^ num, 0);
};
