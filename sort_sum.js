var arr = [
  [1, 3, 4],
  [2, 4, 6, 8],
  [3, 6]
];
var combine = function(a,b) {
  return a + b;
};
var sum = arr.reduce(combine);
console.log(sum);
