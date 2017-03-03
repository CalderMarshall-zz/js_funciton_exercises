var result=  {};
var letterHistogram = function(word) {
  for (var i = 0; i < word.length; i++ ){
    var b = word[i];
    if (b in result) {
      result[b] += 1;
    }
    else {
      result[b] = 1;
    }
  }
};
letterHistogram("bananas");
console.log(result);
