describe("pigLatin", function() {
  it('word starting with vowel should add AY to the end', function() {
    pigLatin('apple').should.equal('appleay');
  });
  it('words starting with one consonant should move consonant to end and add ay', function() {
    pigLatin('rails').should.equal('ailsray');
  });
  it('words startring with multiple consonant should move starting consonant to the end and add ay', function() {
    pigLatin('phone').should.equal('onephay');
  });
  it('words starting with qu move u with the q', function() {
    pigLatin('quick').should.equal('ickquay');
  });
  it('word with qu at 2nd postition work', function() {
    pigLatin('squirrel').should.equal('irrelsquay');
  });
  it('when the word contains a y as a vowel, treat it as a vowel', function(){
    pigLatin('psychology').should.equal('ychologypsay');
  });
  it('when the starts with y', function() {
    pigLatin('yell').should.equal('ellyay');
  });
  it('check y third position boundry', function(){
    pigLatin('day').should.equal('ayday');
  });
  it('translate pig latin over multiple words', function(){
    pigLatin('I pig latin day').should.equal('Iay igpay atinlay ayday');
  });
});
