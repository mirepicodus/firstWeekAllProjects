var numberWords = function(number){
  var endValue = [];
  if (number >= 1000000000){
    endValue = endValue.concat(zeroToThousand(parseInt(number/1000000000)));
    endValue = endValue.concat(['billion']);
    number = number %1000000000;
  }
  if (number >= 1000000) {
    endValue = endValue.concat(zeroToThousand(parseInt(number/1000000)));
    endValue = endValue.concat(['million']);
    number = number%1000000;
  }
  if (number >= 1000) {
    endValue = endValue.concat(zeroToThousand(parseInt(number/1000)));
    endValue = endValue.concat(['thousand']);
    number = number%1000;
  }
  endValue = endValue.concat(zeroToThousand(number));
  // endValue.forEach(function(word){
  //   if (word === ' '){
  //     endValue.indexOf(' ');
  //   }
  // });
  console.log(endValue);
  //endValue = endValue.splice(!'');
  endValue =  endValue.filter(function(numberWord) {
    return numberWord !== '';
  });

  endValue = endValue.join(' ');
  return endValue;
}

var zeroToThousand = function(number) {

    var zeroToNineteen = {
    0 : '',
    1 : 'one',
    2 : 'two',
    3 : 'three',
    4 : 'four',
    5 : 'five',
    6 : 'six',
    7 : 'seven',
    8 : 'eight',
    9 : 'nine',
    10 : 'ten',
    11 : 'eleven',
    12 : 'twelve',
    13 : 'thirteen',
    14 : 'fourteen',
    15 : 'fifteen',
    16 : 'sixteen',
    17 : 'seventeen',
    18 : 'eighteen',
    19 : 'nineteen'
  }
  var tens = {
    2 : 'twenty',
    3 : 'thirty',
    4 : 'forty',
    5 : 'fifty',
    6 : 'sixty',
    7 : 'seventy',
    8 : 'eighty',
    9 : 'ninty',
  }
  var endValue = [];

  if (number >=100){
    endValue.push(zeroToNineteen[parseInt(number/100)]);
    endValue.push('hundred');
    number = number % 100;
  }
  if (number >= 20) {
      endValue.push(tens[parseInt(number / 10)]);
      number = number % 10;
    }

  endValue.push(zeroToNineteen[number]);
  console.log(endValue);
  return endValue;
}

  // var longNum = [];
  // var numString = number.toString().split('');
  // for (var i=number.toString().length; i>0; i--){
  //   longNum += numString;
  // }
