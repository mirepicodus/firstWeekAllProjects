var wordCount = function(word, wordList) {
  var count = 0;
  wordList.forEach(function(wordsSearchedFor) {
    if (wordsSearchedFor === word ){
      count++;
    }
  });

  return count;
};

var removePunctuation = function(wordsToBeFormatted){
    return wordsToBeFormatted.toLowerCase().match(/([a-z])\w+/g);
};

var wordOrder = function(userInputBlock) {
  var userInputBlockFormattedWords = removePunctuation(userInputBlock);
  var wordsToBeIgnored = [];
  var output = [];

  userInputBlockFormattedWords.forEach(function(wordToBeCounted){
    if (wordsToBeIgnored.indexOf(wordToBeCounted) === -1) {
      wordsToBeIgnored.push(wordToBeCounted);
      output.push([wordToBeCounted, wordCount(wordToBeCounted, userInputBlockFormattedWords)]);
    }
  });

  output = output.sort(function(a,b){
    return b[1] > a[1];
  });

  return output;
};

$(document).ready(function() {
  $("form").submit(function(event) {
    $(".result").text("");
    var userInputToWordOrder = $("#words-to-order").val();
    var outputOfWordOrder = wordOrder(userInputToWordOrder);
    outputOfWordOrder.forEach(function(wordCountPair) {
      $(".result").append("<li>" + wordCountPair);
    });
    $(".result").show();
    event.preventDefault();
  });
});












