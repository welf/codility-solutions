// https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/

// use recursion to rotate the array
const solution = (arr, num) => {
  if (num === 0) return arr;

  const newArr = [...arr.slice(-1), ...arr.slice(0, arr.length - 1)];

  return solution(newArr, num - 1);
};
