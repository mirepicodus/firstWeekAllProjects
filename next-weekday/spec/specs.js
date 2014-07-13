describe('sanitize', function(){
  it("converts text day into usable Date information", function(){
    sanitize("Friday").should.equal(5);
  });
});

describe('nextWeekDay', function() {
  it("returns date of next weekday given by user", function() {
    nextWeekDay("Monday").should.equal("7/14/2014");
  });
});

