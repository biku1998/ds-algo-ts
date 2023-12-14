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
  const arr = [12, 45, 78, 223, 990, 1221, 3456];
  console.log(recursiveBinarySearch(arr, 0, arr.length - 1, 990));
};

main();
