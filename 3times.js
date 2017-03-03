function call3Times(fun) {
  fun();
  fun();
  fun();
}
var hello = function(fun) {
  console.log("Hello Wolrd!");
};
call3Times(hello);
