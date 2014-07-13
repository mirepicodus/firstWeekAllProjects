describe('numberWords', function(){
  it('returns word of number 0 through 19',function(){
    numberWords(9).should.equal('nine');
  });
  it('returns word of number 0 through 99', function() {
    numberWords(78).should.equal('seventy eight');
  });
  it('returns word of number 0 through 999', function() {
    numberWords(742).should.equal('seven hundred forty two');
  });
  it('returns word of number 0 through 999999', function() {
    numberWords(879456).should.equal('eight hundred seventy nine thousand four hundred fifty six');
  });
  it('returns word of a number through 999999999', function() {
    numberWords(900000000).should.equal('nine hundred million');
  });
  it('returns word of a number through 999999999999', function() {
    numberWords(900000000123).should.equal('nine hundred billion one hundred twenty three');
  });
});
