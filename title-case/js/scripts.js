var toLower = function(title) {
  return title.toLowerCase();
}

var titleSplit = function(title) {
  return title.split(" ");
}

var makeCapital = function(word) {
  if (word.indexOf("-") !== -1) {
    var hiphenIndex = word.indexOf("-");
    var substringBefore = word.substring(0, hiphenIndex + 1);
    var substringAfter = word.substring(hiphenIndex+2);
    var postHiphonCapitalLetter = word.charAt(hiphenIndex +1).toUpperCase();
    word = substringBefore.concat(postHiphonCapitalLetter).concat(substringAfter);
  }

  var firstLetter = word.charAt(0).toUpperCase();
  // alert('first letter:' + firstLetter);
  var restOfWord = word.slice(1);

  return firstLetter.concat(restOfWord);
}

var checkLittleWords = function(word) {
  var nonCapitals = ["a", "an", "the", "and", "but", "or", "for", "nor", "in"];
  var shouldBeCapital = true;
  // refactor forEach using another array method.
  if (nonCapitals.indexOf(word) !== -1) {
    shouldBeCapital = false;
  }
  // nonCapitals.forEach(function(nonCapital) {
  //   if (word === nonCapital) {
  //     shouldBeCapital = false;
  //   }
  // });
  return shouldBeCapital;
}

var titleCase = function(title) {

  var lowerCaseString = toLower(title);
  var titleArray = titleSplit(lowerCaseString);
  var outputString = '';
  for(var index = 0; index < titleArray.length; index++) {
    if (index === 0) {
      outputString = outputString.concat(makeCapital(titleArray[0]));
      outputString = outputString.concat(" ");
    } else if (index === titleArray.length - 1) {
      outputString = outputString.concat(makeCapital(titleArray[titleArray.length - 1]));
    } else {
      if (checkLittleWords(titleArray[index])) {
        outputString = outputString.concat(makeCapital(titleArray[index]));
      } else {
        outputString = outputString.concat(titleArray[index]);
      }
      outputString = outputString.concat(" ");
    }
  }
  return outputString;
}

$(document).ready(function() {
  $('form#title').submit(function(event){
    var inputTitle = $('#title-to-case').val();
    var outputTitle = titleCase(inputTitle);
    $('p.valid-title').text(outputTitle).show();
    event.preventDefault();
  });
});

