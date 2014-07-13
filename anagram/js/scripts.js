var anagramWordCheck = function(anagramWord, listWord) {
  var anagramLetters = anagramWord.toLowerCase().split('').sort();
  var listLetters = listWord.toLowerCase().split('').sort();
  var isAnagram = true;
  anagramLetters.forEach(function(letter) {
    var indexOfAnagramLetterInList = listLetters.indexOf(letter);
    if(indexOfAnagramLetterInList !== -1){
      listLetters.splice(indexOfAnagramLetterInList, 1);
    } else {
      isAnagram = false;
    }
  });
  return isAnagram;
}

var checkWords = function(anagramWord, anagramList) {
  var outputAnagrams = [];
  var anagramListWordsToCheck = anagramList.split(" ");
  anagramListWordsToCheck.forEach(function(listWordToCheck) {
    if (anagramWordCheck(anagramWord, listWordToCheck)) {
      outputAnagrams.push(listWordToCheck);
    }
  });
  return outputAnagrams;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    var wordInput = $("input#word-input").val();
    var listInput = $("input#list-input").val();
    var anagramResults = checkWords(wordInput, listInput);

    if(wordInput === '' || listInput === '') {
      $(".result").text("Please Enter Valid Inputs").show();
    } else if(anagramResults.length) {
      var formatedResult = 'Here are the matching anagrams: ';
      anagramResults.forEach(function(anagramResult) {
        formatedResult = formatedResult + anagramResult + " ";
      });
    } else {
      formatedResult = "There are no matching anagrams.";
    }

    $(".result").text(formatedResult).show();
    event.preventDefault();
  });
});
