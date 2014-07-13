var coinMachine = function(cents){
  var coinValues = [25,10,5,1];
  var optimalCoinsReturned = [0,0,0,0];

  for (var i = 0; i < coinValues.length; i++){
    while (cents >= coinValues[i]){
      cents -= coinValues[i];
      optimalCoinsReturned[i]++;
    }
  }
  return optimalCoinsReturned;
};

$(document).ready(function(){
  $('form').submit(function(event){
    var coinNames = ['quarter(s)', 'dime(s)', 'nickel(s)', 'penny/pennies'];
    var changeInput = $('#change-due').val();
    var coinsReturnedToUser = coinMachine(changeInput);
    var formattedCoinsReturnedToUser = "";
    for (var i = 0; i < coinNames.length; i++){
      formattedCoinsReturnedToUser += coinsReturnedToUser[i] + " " + coinNames[i] + ", ";
    }

    $('.coins-returned').text(formattedCoinsReturnedToUser).show();
    event.preventDefault();
  });
});
