const arr = [[1], [12, 4, 5], [45]];

const newArr = [...arr];

const copy = JSON.parse(JSON.stringify(arr));

console.log(arr[0] == newArr[0]);
console.log(arr == copy);
console.log(arr[0] == copy[0]);
