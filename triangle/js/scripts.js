var triangle = function(sideOne, sideTwo, sideThree) {

 if (isNotATriangle(sideOne, sideTwo, sideThree)) {
    return "not a";
  } else if (isEquilateral(sideOne, sideTwo, sideThree)) {
    return "an equilateral";
  } else if (isIsosceles(sideOne, sideTwo, sideThree)) {
    return "an isosceles";
  } else if (isScalene(sideOne, sideTwo, sideThree)) {
    return "a scalene";
  }
};

/*var triangle = function(sideOne, sideTwo, sideThree) {
  if (sideOne + sideTwo <= sideThree || sideOne + sideThree <= sideTwo || sideTwo + sideThree <= sideOne) {
    return "Not a triangle"
  } else if (sideOne === sideTwo && sideTwo === sideThree) {
    return "equilateral";
  } else if (sideOne === sideTwo || sideOne === sideThree || sideTwo === sideThree) {
    return "isosceles";
  } else {
    return "scalene";
  }
};*/
var isNotATriangle = function(sideOne, sideTwo, sideThree) {
  if ((sideOne + sideTwo <= sideThree) || (sideOne + sideThree <= sideTwo) || (sideTwo + sideThree <= sideOne)) {
    return true;
  } else {
    return false;
  }
};

var isEquilateral = function(sideOne, sideTwo, sideThree) {
  if (sideOne === sideTwo && sideTwo === sideThree) {
    return true;
  }
  else {
    return false;
  }
};

var isIsosceles = function(sideOne, sideTwo, sideThree) {
  if (sideOne === sideTwo || sideOne === sideThree || sideTwo === sideThree) {
    return true;
  }
  else {
    return false;
  }
};

var isScalene = function(sideOne, sideTwo, sideThree) {
  if (sideOne !== sideTwo && sideOne !== sideThree && sideTwo !== sideThree) {
    return true;
  }
  else {
    return false;
  }
};

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var triangleSides = $("input#triangle-sides").val().split(",");
    var sideOne = parseInt(triangleSides[0]);
    var sideTwo = parseInt(triangleSides[1]);
    var sideThree = parseInt(triangleSides[2]);
    var result = triangle(sideOne, sideTwo, sideThree);

    $(".valid-triangle").text(triangleSides[0] + "," + triangleSides[1] + "," + triangleSides[2]);
    $(".is-triangle").text(result);


    $("#result").show();
    event.preventDefault();
  });
});
