var queenAttack = function(firstPos, secondPos) {
  if (isHorizontal(firstPos, secondPos) ||
     isVertical(firstPos, secondPos) ||
     isDiagonal(firstPos, secondPos)) {
    return true;
  } else {
    return false;
  }
};

var isHorizontal = function(firstPos, secondPos) {
  if (firstPos[0] === secondPos[0]) {
    return true;
  } else {
    return false;
  }
};

var isVertical = function(firstPos, secondPos) {
 if (firstPos[1] === secondPos[1]) {
   return true;
  } else {
    return false;
  }
};

var isDiagonal = function(firstPos, secondPos) {
 if (Math.abs(firstPos[0] - secondPos[0]) === Math.abs(firstPos[1] - secondPos[1])) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("form#queen-attack").submit(function(event) {
    var firstPos = $("input#fist-pos").val().split(" ");
    var secondPos = $("input#second-pos").val().split(" ");
    var result = queenAttack(firstPos, secondPos);

    $(".queen-attack-validation").text(firstPos + " " + secondPos);
    if (!result) {
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();
    event.preventDefault();
  });
});
