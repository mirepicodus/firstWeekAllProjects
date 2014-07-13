describe('wordCount', function(){
  it("counts number of occurunces of a unique word in the input", function(){
    wordCount("dog", ["dog", "dog", "cat"]).should.equal(2);
  });
});

describe('removePunctuation', function() {
  it('removes all punctuation from list', function(){
    removePunctuation("tHis , Is that,").should.eql(["this", "is", "that"]);
  });
});

describe('wordOrder', function(){
  it("returns number of times a word has appeared in a string", function(){
    wordOrder("its...its alive alive!").should.eql([["its", 2], ["alive",2]]);
  });

  it("should create a counted array from a string", function(){
    var tester = "this this that that";
    wordOrder(tester).should.eql([["this", 2],["that", 2]]);
  });


});


