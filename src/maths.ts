const countDigits = (no: number): number => {
  let temp = no;
  let noOfDigits = 0;

  while (temp !== 0) {
    temp = Math.floor(temp / 10);
    noOfDigits++;
  }
  return noOfDigits;
};

const isPalindrome = (no: number): boolean => {
  let temp = no;
  let reverse = 0;

  while (temp !== 0) {
    const lastDigit = Math.floor(temp % 10);
    reverse = reverse * 10 + lastDigit;
    temp = Math.floor(temp / 10);
  }
  return reverse === no;
};

const calculateFactorial = (no: number) => {
  if (no === 0) return 1;
  let factorial = 1;

  for (let i = 2; i <= no; i++) {
    factorial = factorial * i;
  }
  return factorial;
};

const calculateFactorialRecursive = (no: number): number => {
  if (no === 0) return 1;
  return no * calculateFactorialRecursive(no - 1);
};

const main = () => {
  console.log(`No of digits in ${1234567890} is ${countDigits(1234567890)}`);
  console.log(`${121} is palindrome = ${isPalindrome(121)}`);
  console.log(`Factorial of ${12} is ${calculateFactorial(12)}`);
  console.log(`Factorial of ${12} is ${calculateFactorialRecursive(12)}`);
};
main();
