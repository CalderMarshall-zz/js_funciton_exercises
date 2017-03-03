var arr= [1, -3, 4, 7, -6, -1];
function positive(n) {
  return n > 0;
}
var  new_arr = arr.filter(positive);
console.log(new_arr);
