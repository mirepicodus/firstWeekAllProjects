describe('triangle', function() {
  it('is not a triangle', function() {
    triangle(6, 7, 24).should.equal("not a triangle");
  });
  it('is an equilateral triangle', function() {
    triangle(6, 6, 6).should.equal("an equilateral");
  });
  it('is an isosceles triangle', function() {
    triangle(4, 6, 6).should.equal("an isosceles");
  });
  it('is an scalene triangle', function() {
    triangle(4, 8, 6).should.equal("a scalene");
  });
});

describe('isEquilateral', function() {
  it('is equilateral', function() {
    isEquilateral(6, 6, 6).should.equal(true);
  });
});

describe('isIsosceles', function() {
  it('is isosceles', function() {
    isIsosceles(6, 6, 2).should.equal(true);
  });
});

describe('isScalene', function() {
  it('is Scalene', function() {
    isScalene(4, 3, 2).should.equal(true);
  });
});
