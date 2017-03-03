var callNtimes = function(times,fun) {
  for (var i = 0; i <= times; i++){
    fun();
  }
};
var hello = function(fun) {
  console.log("Hello Wolrd!");
};
callNtimes(4,hello);
