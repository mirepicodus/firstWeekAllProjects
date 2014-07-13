var dayInMonth = function(userDesiredMonth, userDesiredDay){
  var month = sanitizeMonth(userDesiredMonth);
  var firstDay = new Date(2014, month, 1);
  var lastDay = new Date(2014,  month + 1, 0);
  var lastDaySanitized = lastDay.getDate();
  var desiredDaySanitized = sanitizeDay(userDesiredDay);
  var daysResult = [];
  for (var index = 1; index <= lastDaySanitized; index++) {
    firstDay.setDate(index);
    if (desiredDaySanitized === firstDay.getDay()) {
      daysResult.push(firstDay.getDate());
    }
  }
  console.log(daysResult);
  return daysResult;
}

var sanitizeMonth = function(month) {
  var months = ['january', 'febuary', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
  var monthNumber = month.toLowerCase();
  return months.indexOf(monthNumber);
}

var sanitizeDay   = function(day) {
  var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  var dayNumber = day.toLowerCase();
  return days.indexOf(dayNumber);
}

$(document).ready(function(){
  $("form").submit(function(event){
    var userDate = $("#user-input").val();
    var modifiedUserDate = nextWeekDay(userDate);
    $(".result").text(modifiedUserDate);
    event.preventDefault();
  });

});
