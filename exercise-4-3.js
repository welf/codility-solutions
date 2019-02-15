// https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/

const solution = arr => {
  // create a new Map, which has O(1) time complexity for map.has(key) operations,...
  const mapFromGivenArray = new Map();
  // ...and populate it with positive numbers from a given value
  // ... and return a new array with positive numbers (number > 0) only
  arr.map(value => {
    if (value > 0) mapFromGivenArray.set(value, value);
  });

  // create an array with the length of arr.length + 1
  // we don't care about values of this array, only about its length
  const helperArray = [...Array(arr.length + 1)];

  // iterate over indexes of helperArray to find out whether the mapFromGivenArray.has(index) === true...
  const result = helperArray.reduce((acc, _, index, array) => {
    // break iteration by mutating the array after the first non-zero missing value was found
    if (acc > 0) array.splice(1);

    // we need only positive value and if the sequence has no holes,...
    // ...we should return Math.max(...arr) + 1
    const value = index + 1;
    return mapFromGivenArray.has(value) ? acc : acc === 0 ? value : acc;
  }, 0);

  return result;
};
