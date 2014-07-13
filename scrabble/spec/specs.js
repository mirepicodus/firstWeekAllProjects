describe('scrabbleScore', function(){
  it('counts a, e, i, o, u, as 1',function(){
    scrabbleScore('a').should.equal(1);
  });
  it('counts aeo as 3', function(){
    scrabbleScore('aeo').should.equal(3);
  });
  it('counts words', function() {
    scrabbleScore('apple').should.equal(9);
  });
});
