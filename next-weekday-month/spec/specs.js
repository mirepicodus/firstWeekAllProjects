describe('sanitizeDay', function(){
  it("converts text day into usable Date ", function(){
    sanitizeDay("Friday").should.equal(5);
  });
});

describe('sanitizeMonth', function() {
  it("converts text month into usable Date format", function() {
    sanitizeMonth("July").should.equal(6);
  });
});

describe('dayInMonth', function() {
  it("returns first date in current year that user give day and month for", function() {
    dayInMonth("august","Tuesday").should.eql([5, 12, 19, 26]);
  });

});

