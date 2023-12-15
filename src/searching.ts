const binarySearch = (arr: number[], x: number): number => {
  // Time complexity - O(log(n))
  // Space - O(1)
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == x) {
      return mid;
    } else if (arr[mid] > x) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};

const getFirstOccurrenceIdx = (
  arr: number[],
  start: number,
  end: number,
  x: number,
): number => {
  if (start > end) return -1;
  const mid = Math.floor((start + end) / 2);

  if (arr[mid] == x) {
    if (arr[mid - 1] !== x || mid == 0) return mid;
    return recursiveBinarySearch(arr, start, mid - 1, x);
  } else if (arr[mid] > x) return recursiveBinarySearch(arr, start, mid - 1, x);
  else return recursiveBinarySearch(arr, mid + 1, end, x);
};

const getFirstOccurrenceIdxItr = (arr: number[], x: number): number => {
  if (arr.length === 0) return -1;

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] > x) {
      end = mid - 1;
    } else if (arr[mid] < x) {
      start = mid + 1;
    } else {
      if (mid == 0 || arr[mid] != arr[mid - 1]) {
        return mid;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};

const getLastOccurrenceIdxItr = (arr: number[], x: number): number => {
  if (arr.length === 0) return -1;

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] > x) {
      end = mid - 1;
    } else if (arr[mid] < x) {
      start = mid + 1;
    } else {
      if (mid == end || arr[mid] != arr[mid + 1]) {
        return mid;
      } else {
        start = mid + 1;
      }
    }
  }
  return -1;
};

const countFrequencyNaive = (arr: number[], x: number): number => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] - x;
  }
  let freq = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) freq++;
  }
  return freq;
};

const countFrequency = (arr: number[], x: number) => {
  // Time complexity - O(log(n))

  if (arr.length === 0) return 0;

  const firstIdx = getFirstOccurrenceIdxItr(arr, x);

  if (firstIdx === -1) return 0;

  const lastIdx = getLastOccurrenceIdxItr(arr, x);

  return lastIdx - firstIdx + 1;
};

const recursiveBinarySearch = (
  arr: number[],
  start: number,
  end: number,
  x: number,
): number => {
  // Time complexity - O(log(n))
  // Space - O(log(n))

  if (start > end) return -1;

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] == x) return mid;
  else if (arr[mid] > x) return recursiveBinarySearch(arr, start, mid - 1, x);
  else return recursiveBinarySearch(arr, mid + 1, end, x);
};

const main = () => {
  const arr = [5, 5, 5, 5, 5, 5, 5, 6, 7, 8, 9, 9, 9, 9, 9, 9, 9];
  console.log(countFrequency(arr, 8));
};

main();
