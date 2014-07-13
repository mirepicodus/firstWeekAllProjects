describe("anagramWordCheck", function() {
  it("returns true if list word is anagram of input word", function() {
    anagramWordCheck("cat", "tac").should.eql(true);
  });
  it("returns true if list word is anagram of input word if 2nd word longer", function() {
    anagramWordCheck("cat", "tactic").should.eql(true);
  });
  it("returns false if list word is anagram of input word if 2nd word shorter", function() {
    anagramWordCheck("cat", "ta").should.eql(false);
  });

});


describe("checkWords", function() {
  it("returns words from input list that are anagrams of single input word", function() {
    checkWords("the", "this that the other").should.eql(["the", "other"]);
  });
});
