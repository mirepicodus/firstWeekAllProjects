describe('queenAttack', function() {
  it('is false if the coordinates are not horizontally, vertically, or diagonally in line with each other', function() {
    queenAttack([1, 1], [2, 3]).should.equal(false);
  });
   it('is true if the coordinates are horizontally in line with each other', function() {
    queenAttack([1, 1], [1, 3]).should.equal(true);
  });

  it('is true if the coordinates are vertically in line with each other', function() {
    queenAttack([4, 3], [1, 3]).should.equal(true);
  });

  it('is true if the coordinates are diagonally in line with each other', function() {
    queenAttack([4, 3], [6, 5]).should.equal(true);
  });
});

describe('isHorizontal', function() {
   it('is true if the coordinates are horizontally in line with each other', function() {
    isHorizontal([1, 1], [1, 3]).should.equal(true);
  });
});

describe('isVertical', function() {
   it('is true if the coordinates are vertically in line with each other', function() {
    isVertical([4, 3], [1, 3]).should.equal(true);
  });
});

describe('isDiagonal', function() {
   it('is true if the coordinates are diagonally in line with each other', function() {
    isDiagonal([4, 3], [6, 5]).should.equal(true);
  });
});
