var arr= [1, -3, 4, 7, -6, -1];
function even(n) {
  return n % 2 === 0;
}
var  new_arr = arr.filter(even);
console.log(new_arr);
