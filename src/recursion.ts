import { createDeepCopy } from "./utils";

const logFn = (no: number): number => {
  /*
  - if the no is a power of 2 then it will return log2 no
  - if the no is not a power of 2 then it will return floor(log2 n)
    for e.g for 17,19,21 ... it will be giving the same value of no = 16
  */
  if (no == 1) return 0;
  return 1 + logFn(Math.floor(no / 2));
};

const binary = (no: number): number | undefined => {
  if (no == 0) return;
  binary(Math.floor(no / 2));

  console.log(Math.floor(no % 2));
};

const printRevSeries = (no: number) => {
  // time complexity is theta(n)
  if (no == 0) return;
  console.log(no);
  printRevSeries(no - 1);
};

const printSeries = (no: number) => {
  // time complexity is theta(n)
  if (no == 0) return;
  printSeries(no - 1);
  console.log(no);
};

const factorial = (no: number): number => {
  if (no == 0 || no == 1) return 1;
  return no * factorial(no - 1);
};

const tailFactorial = (no: number, k: number): number => {
  // this will take significantly less time because compiler will make some optimization
  if (no == 0 || no == 1) return k;
  return tailFactorial(no - 1, k * no);
};

const sumOfNNaturalNos = (no: number): number => {
  // time complexity : Theta(no)
  // space : Theta(no)
  if (no <= 1) return 1;
  else return no + sumOfNNaturalNos(no - 1);
};

const isPalindromeString = (
  str: string,
  start: number,
  end: number,
): boolean => {
  // logic : if start and end characters are the same and the sub-string between
  // them is palindrome then the whole string is palindrome
  // time complexity : O(n) in worst case
  // space complexity : Theta (n)
  if (start >= end) return true;
  return str[start] == str[end] && isPalindromeString(str, start + 1, end - 1);
};

const sumOfDigits = (no: number): number => {
  // time complexity : O(d) where d is no of digits
  // space complexity : Theta(d)
  if (no <= 0) return 0;
  return Math.floor(no % 10) + sumOfDigits(Math.floor(no / 10));
};

const maxPieces = (no: number, a: number, b: number, c: number) => {
  console.log("maxPieces :: ", { no, a, b, c });
  // try all the solution and take the max
  if (no == 0) return 0;
  if (no < 0) return -1;

  const result = Math.max(
    maxPieces(no - a, a, b, c),
    maxPieces(no - b, a, b, c),
    maxPieces(no - c, a, b, c),
  );

  if (result == -1) return -1;
  return result + 1;
};

const printStrSubsets = (
  str: string,
  curr: string = "",
  idx: number = 0,
): void => {
  console.log("printStrSubsets :: ", {
    str,
    curr,
    idx,
  });
  if (idx == str.length) {
    console.log("result :: ", curr);
    return;
  }

  printStrSubsets(str, curr, idx + 1);
  printStrSubsets(str, `${curr}${str[idx]}`, idx + 1);
};

const calculateArraySubsets = <T>(
  arr: T[],
  curr: T[],
  idx: number,
  result: T[][],
): void => {
  // TODO - spend some more time on this
  if (idx >= arr.length) {
    result.push(curr);
    return;
  }

  // exclude
  calculateArraySubsets(arr, curr, idx + 1, result);

  // include
  const ele = arr[idx];
  if (ele) curr.push(ele);
  calculateArraySubsets(arr, createDeepCopy(curr), idx + 1, result);
};

const toh = (no: number, A: string, B: string, C: string): void => {
  // no of movements for a give no is 2^no - 1
  if (no == 1) {
    console.log(`move ${no} from ${A} to ${C}`);
    return;
  }
  toh(no - 1, A, C, B);
  console.log(`move ${no} from ${A} to ${C}`);
  toh(no - 1, B, A, C);
};

const josephusProblem = (n: number, k: number): number => {
  // watch pep coding explanation
  if (n == 1) return 0;
  return Math.floor((josephusProblem(n - 1, k) + k) % n);
};

const countSubsetsSum = (arr: number[], n: number, sum: number): number => {
  if (n == 0) {
    return sum == 0 ? 1 : 0;
  }
  return (
    countSubsetsSum(arr, n - 1, sum) +
    countSubsetsSum(arr, n - 1, sum - arr[n - 1]!)
  );
};

const countSubsetsSumV2 = (
  arr: number[],
  n: number,
  curr: number[],
  sum: number,
): number => {
  if (n >= arr.length) {
    if (sum == 0 && curr.length == 0) return 1;
    if (curr.length == 0) return 0;
    return curr.reduce((pV, cV) => pV + cV) == sum ? 1 : 0;
  }

  // exclude
  const respExclude = countSubsetsSumV2(arr, n + 1, [...curr], sum);

  // include
  const el = arr[n];
  if (el) curr.push(el);

  const respInclude = countSubsetsSumV2(arr, n + 1, [...curr], sum);
  return respExclude + respInclude;
};

const decodeString = (str: string): string => {
  return "";
};

const main = () => {
  const arr = [10, 20, 40, 100, 102, 30, 30];
  const curr: number[] = [];
  const sum = 30;
  const result = countSubsetsSumV2(arr, 0, curr, sum);

  console.log({ arr, sum, result });
};

main();
