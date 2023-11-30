const countDigits = (no: number): number => {
  let temp = no;
  let noOfDigits = 0;
  return noOfDigits;
};

const isPalindrome = (no: number): boolean => {
  return false;
};

const calculateFactorial = (no: number): number => {
  if (no === 0) return 1;
  return no * calculateFactorial(no - 1);
};

const main = () => {
  //   console.log(`No of digits in ${434567} is ${countDigits(434567)}`);
  //   console.log(`${767} is palindrome = ${isPalindrome(767)}`);
  console.log(`Factorial of ${4} is ${calculateFactorial(4)}`);
};
main();
