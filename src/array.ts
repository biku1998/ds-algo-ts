const findLargestEl = (arr: number[]): number => {
  if (arr.length == 0) return -1;
  let largestEl = 0;

  arr.forEach((el) => {
    if (largestEl < el) {
      largestEl = el;
    }
  });
  return largestEl;
};

const findSecondLargestIdx = (arr: number[]): number => {
  if (arr.length == 0) return -1;
  let largestElIdx = 0;
  let secondLargestIdx = -1;

  for (let i = 1; i < arr.length; i++) {
    const curr = arr[i];
    const largestEl = arr[largestElIdx];
    if (largestEl && curr) {
      if (curr > largestEl) {
        secondLargestIdx = largestElIdx;
        largestElIdx = i;
      } else if (curr !== largestEl) {
        const secondLargestEl = arr[secondLargestIdx];
        if (
          secondLargestEl &&
          (secondLargestIdx == -1 || curr > secondLargestEl)
        ) {
          secondLargestIdx = i;
        }
      }
    }
  }
  return secondLargestIdx;
};

const isSorted = (arr: number[]): boolean => {
  if (arr.length == 0) return true;

  for (let i = 1; i < arr.length; i++) {
    const curr = arr[i];
    const next = arr[i + 1];
    if (curr && next) {
      if (curr > next) {
        return false;
      }
    }
  }

  return true;
};

const reverse = (arr: number[]) => {
  if (arr.length == 0) return;
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end]!; // ! to make ts happy
    arr[end] = temp!; // ! to make ts happy

    start++;
    end--;
  }
};

const removeSortedArrayDuplicates = (arr: number[]): number => {
  let size = 1; // first el will always be there
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[size - 1]) {
      arr[size] = arr[i];
      size++;
    }
  }
  return size;
};

const main = () => {
  const arr = [10, 20, 30, 30, 40, 40, 40, 50, 50, 50];
  const size = removeSortedArrayDuplicates(arr);
  console.log(arr);
  for (let i = 0; i < size; i++) {
    console.log(arr[i]);
  }
};

main();
