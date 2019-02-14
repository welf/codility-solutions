// https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/
const solution = (x, arr) => {
  // we need to carefully design the accumulating object for our reduce function
  // it will hold the number of positions we already have, the largest index of those positions...
  // ... and positions we already have
  const accumulatingObject = arr.reduce(
    (acc, num, idx, array) => {
      // if we have already all available positions, break reducing the array by mutating it
      if (acc.accumulatedPositions === x) array.splice(1);

      // check whether we need this position and haven't encountered it yet
      if (num <= x && acc[num] === undefined) {
        // we should to mutate our accumulating object to achieve the desired performance on large numbers ;(

        // we traverse the array from left to right and the current index is always...
        // ...greater than index of previously traversed elements, hence we can omit..
        // ...the comparison of stored and current indexes
        acc.index = idx;

        // create a key to know we've already traversed this element
        acc[num] = num;

        // update the counter of positions we currently have
        acc.accumulatedPositions += 1;
      }
      return acc;
    },
    { accumulatedPositions: 0 }
  );

  return accumulatingObject.accumulatedPositions === x
    ? accumulatingObject.index
    : -1;
};

console.log(solution(5, [1, 3, 1, 5, 4, 2, 3, 4, 4, 5]));
