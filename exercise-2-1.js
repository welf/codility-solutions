// https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

// XOR operation applied to the value even times returns initial value
const solution = arr => arr.reduce((acc, num) => acc ^ num, 0);
