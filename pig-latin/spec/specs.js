//Accept a user input of a set of words
//Write the entire collection of words to a holding array.


describe("pigLatin", function() {
  it('word starting with vowel should add AY to the end', function() {
    pigLatin('apple').should.equal('appleay ');
  });
  it('words starting with one consonant should move consonant to end and add ay', function() {
    pigLatin('rails').should.equal('ailsray ');
  });
  it('words startring with multiple consonant should move starting consonant to the end and add ay', function() {
    pigLatin('phone').should.equal('onephay ');
  });
  it('words starting with qu move u with the q', function() {
    pigLatin('quick').should.equal('ickquay ');
  });
  it('word with qu at 2nd postition work', function() {
    pigLatin('squirrel').should.equal('irrelsquay ');
  });
  it('when the word contains a y as a vowel, treat it as a vowel', function(){
    pigLatin('psychology').should.equal('ychologypsay ');
  });
  it('when the starts with y', function() {
    pigLatin('yell').should.equal('ellyay ');
  });
  it('translate pig latin over multiple words', function(){
    pigLatin('I fucking hate pig latin ay').should.equal('Iay uckingfay atehay igpay atinlay ayay ');
  });
});
/// Helper functions (assessing the existing words for unique conditions)
// 1 - Find first vowel in each word (return index position or -1)
describe("findVowelIndex", function() {
  it('should return index of first vowel', function() {
    findVowelIndex('something').should.equal(1);
  });
});
// 2 - Scan to see if QU is first (return boolean result)

// 3 - Scan to see if Y is first (return boolean result)


///Main function (word modification)

// 1 - Check exceptions
    // - if QU present, move
// 2 - If a word begins with one of more consonants (boolean TRUE) else (boolean FALSE)

  //*  slice off all consonants before vowel and push them back onto the word).

// 3 -


// , append 'ay' to the end.
    //* slice vowel off beginning, push to the end.

// , move these consonants to the end of the word and add 'ay'. If consonant is q and is followed by u,
