var scrabbleScore = function(word) {
 var letterScrore = {
  a : 1,
  e : 1,
  i : 1,
  o : 1,
  u : 1,
  l : 1,
  n : 1,
  r : 1,
  s : 1,
  t : 1,
  d : 2,
  g : 2,
  b : 3,
  c : 3,
  m : 3,
  p : 3,
  f : 4,
  h : 4,
  v : 4,
  w : 4,
  y : 4,
  k : 5,
  j : 8,
  x : 8,
  q : 10,
  z : 10,
}
var pointCount = 0;
for (var i=0; i<word.length; i++){
  pointCount += letterScrore[word[i]];
}
 return pointCount;

};


 // var onePointWord = word.match(/[AERIOULNRST]/ig);
 // var twoPointWord = word.match(/[DG]/ig);
 // var threePointWord = word.match(/[BCMP]/ig);
 // var fourPointWord = word.match(/[FHVWY]/ig);
 // var fivePointWord = word.match(/[K]/ig);
 // var eightPointWord = word.match(/[JX]/ig);
 // var tenPointWord = word.match(/[QZ]/ig);
 // // var pointCount = onePointWord.length +
 // //                  (twoPointWord.length*2)+
 // //                  (threePointWord.length*3)+
 // //                  (fourPointWord.length*4)+
 // //                  (fivePointWord.length*5)+
 // //                  (eightPointWord.length*8)+
 // //                  (tenPointWord.length*10);
