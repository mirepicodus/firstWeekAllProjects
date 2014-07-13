function pigLatin(sentence) {
  var wordsToTranslate = sentence.split(" ");
  var result = '';
  wordsToTranslate.forEach(function(wordToTranslate) {
    if (wordToTranslate.slice(0,2) === 'qu'){
      result = result + (wordToTranslate.slice(2) + wordToTranslate.slice(0,2) + 'ay ');
    } else if (wordToTranslate.slice(1,3) === 'qu'){
      result = result +(wordToTranslate.slice(3) + wordToTranslate.slice(0,3) + 'ay ');
    } else if (wordToTranslate.slice(0,1) === 'y'){
      result = result +(wordToTranslate.slice(1) + wordToTranslate.slice(0,1)+ 'ay ');
    } else if (findVowelIndex(wordToTranslate) !== 0) {
      result = result + (wordToTranslate.slice(findVowelIndex(wordToTranslate)) + wordToTranslate.slice(0,findVowelIndex(wordToTranslate)) + 'ay ');
    } else {
      result = result + (wordToTranslate + 'ay ');
    };
  });
  return result;
}

function findVowelIndex(word) {
  var counter = 0;
  for(var index = 0; index < word.length; index++) {
    if (word[index] !== 'a' &&
        word[index] !== 'e' &&
        word[index] !== 'i' &&
        word[index] !== 'o' &&
        word[index] !== 'u' &&
        word[index] !== 'y') {
        counter++;
    } else
    {break};
  };
  return counter;
}
