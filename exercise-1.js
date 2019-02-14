// https://app.codility.com/programmers/lessons/1-iterations/binary_gap/
const solution = n => {
  // convert decimal to binary (string)
  const binaryString = n.toString(2);

  // convert sequences of "0" to strings and filter out "1"
  const gaps = binaryString.split('1');

  // Check if there are trailing zeroes
  const arr =
    gaps.slice(-1).length > 0 ? [...gaps.slice(0, gaps.length - 1)] : [...gaps];

  // return the length of the longest sequence
  return arr.reduce((acc, str) => (str.length > acc ? str.length : acc), 0);
};
