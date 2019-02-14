// https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/
const solution = arr => {
  // calculate the value of the first element and the sum of the rest
  // we use these values in the accumulator in our reduce function
  const [sum1, ...rest] = arr;
  const sum2 = rest.reduce((acc, num) => acc + num, 0);

  // we don't want to calculate the difference between 0 and all other elements...
  //...hence we should iterate a new array without the first and the last elements
  const newArray = arr.slice(1, arr.length - 1);

  // we don't care about the first two elements of the returned array
  const [, , leastDifference] = newArray.reduce(
    // store in the accumulator the first sum, the second one and their difference
    ([sum1, sum2, difference], num) => {
      // on each iteration add current number to the first sum, subtract it from the second...
      const firstSum = sum1 + num;
      const secondSum = sum2 - num;
      // ... and calculate the new difference
      const newDifference = Math.abs(firstSum - secondSum);

      // if the old difference is greater than new one, replace it
      return newDifference < difference
        ? [firstSum, secondSum, newDifference]
        : [firstSum, secondSum, difference];
    },
    // at the beginning the sum of the first zero elements is equal to 0 ...
    // ... and the sum of the rest elements is equal to the sum of the given array
    [sum1, sum2, Math.abs(sum1 - sum2)]
  );

  return leastDifference;
};
