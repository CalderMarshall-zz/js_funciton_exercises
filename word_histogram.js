var result=  {};
var wordHistogram = function(sentence) {
  var words = sentence.split(' ');
  for (var i = 0; i < words.length; i++ ){
    var word = words[i];
    if ( word in result ) {
      result[word]  += 1;
    }
    else {
      result[word] = 1;
    }
  }
};
wordHistogram("to be or not to be");
console.log(result);
