describe('leapYear', function() {
  it("is false for a year that is not divisible by 4", function() {
    leapYear(1999).should.equal(false);
  });

  it("is true for most years divisible by 4", function() {
    leapYear(2012).should.equal(true);
  });

  it("is false for most years divisible by 100", function() {
    leapYear(1900).should.equal(false);
  });

  it("is true for years divisible by 400", function() {
  leapYear(2000).should.equal(true);
  });
});

describe("divisibleByFour", function() {
  it("is false if a number is not divisible by four", function() {
    divisibleByFour(7).should.equal(false);
  });
});

describe("divisibleByOneHundred", function() {
  it("is false if a number is not divisible by one hundred", function() {
    divisibleByOneHundred(13).should.equal(false);
  });
});

describe("divisibleByFourHundred", function() {
  it("is false if a number is not divisible by four hundred", function() {
    divisibleByFourHundred(17).should.equal(false);
  });
});
