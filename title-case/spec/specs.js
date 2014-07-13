describe("toLower", function() {
  it("changes the input string to lower case.", function() {
    toLower("ONCE upon A Time.").should.equal("once upon a time.");
  });
  it("changes the input string to lower case.", function() {
    toLower("Cat In the HAT").should.equal("cat in the hat");
  });
});

describe("titleSplit", function() {
  it("splits string into words", function() {
    titleSplit("cat in the hat").should.eql(["cat", "in", "the", "hat"]);
  });
  it("splits string into words", function() {
    titleSplit("once upon a time.").should.eql(["once", "upon", "a", "time."]);
  });
});

describe("makeCapital", function() {
  it("takes a single word and capitalizes its first letter.", function(){
    makeCapital("cat").should.equal("Cat");
  });
  it("takes a single word and capitalizes its first letter.", function(){
    makeCapital("dog").should.equal("Dog");
  });
  it("takes a hyphonated word and capitalizes its first letter after hyphon.", function(){
    makeCapital("cat-dog").should.equal("Cat-Dog");
  });
});

describe("checkLittleWords", function() {
  it("takes a single word and check if words should be capitalized", function(){
    checkLittleWords("cat").should.equal(true);
  });
  it("takes a single word and capitalizes its first letter.", function(){
    checkLittleWords("or").should.equal(false);
  });
});

describe("titleCase", function() {
  it("capitalizes the first letter of a word", function() {
    titleCase("cat").should.equal("Cat ");
  });
  it("capitalizes the first letter of a word unless it is articles, conjunctions, or prepositions", function() {
    titleCase("cat In the hat").should.equal("Cat in the Hat");
  });
});


//first word
// multiple words
//last word
// "articles (a, an, the), coordina["cat", "in", "the", "hat"]ting conjunctions (and, but, or, for, nor), and prepositions
// fix case
