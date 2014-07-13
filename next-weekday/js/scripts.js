var sanitize = function(day) {
  var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  var dayNumber = day.toLowerCase();
  return days.indexOf(dayNumber);
}

var nextWeekDay = function(userDesiredDate){
  var dayDifference = 0;
  var today = new Date();
  var todayCount = today.getDay();
  var sanitizedDay = sanitize(userDesiredDate);
  var correctDate = new Date();


  dayDifference = sanitizedDay - todayCount;
  if (dayDifference <= 0){
    dayDifference += 7;
  }
  correctDate.setDate(today.getDate()+dayDifference);

  return (1 + correctDate.getMonth()) + "/" + correctDate.getDate() + "/" + (1900 + correctDate.getYear());
};

$(document).ready(function(){
  $("form").submit(function(event){
    // $(".result").text("")
    var userDate = $("#user-input").val();
    var modifiedUserDate = nextWeekDay(userDate);
    $(".result").text(modifiedUserDate);
    event.preventDefault();
  });

});
