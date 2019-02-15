// https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/

const solution = (n, arr) => {
  // Because of performance reasons on large input data we need to use mutation again.
  // It is JavaScript, baby ;)

  // we will store our counters in the object because access to object property has O(1) time complexity
  const objectOfCounters = {};

  // populate objectOfCounters with n counters which initial value is equal to 0
  let iterator = 1;
  while (iterator <= n) {
    objectOfCounters[iterator] = 0;
    iterator += 1;
  }

  // we'll store and update the current maximum value of counters...
  // to not to traverse the whole object to calculate it
  let currentMaxValue = 0;

  // we also store and update the last maximum value which was set
  // we will not iterate over the whole object to update all counters with currentMaxValue
  // it is our secret weapon ;)
  let lastSetMaxValue;

  // finally do the job and update counters according values in arr
  arr.map(key => {
    if (key > n) {
      // we will not iterate over the whole object to set the value of all counters to the currentMaxValue
      // we'll just store the currentMaxValue in the lastSetMaxValue variable
      return (lastSetMaxValue = currentMaxValue);
    }

    const newValue =
      objectOfCounters[key] < lastSetMaxValue
        ? // we didn't touched this counter since the last batch update of counters...
          // ...and we'll update it now
          lastSetMaxValue + 1
        : objectOfCounters[key] + 1;

    // don't forget to update the currentMaxValue if needed
    if (newValue > currentMaxValue) {
      currentMaxValue = newValue;
    }

    objectOfCounters[key] = newValue;
  });

  return Object.keys(objectOfCounters).map(key =>
    objectOfCounters[key] < lastSetMaxValue
      ? // we didn't not touched this counter since the last batch update, so we'll do it now
        lastSetMaxValue
      : objectOfCounters[key]
  );
};
