//BUSINESS LOGIC
var number = function(number) {
if (number <= 0) {
  return false;
} else if (number % 3 === 0){
  return "ping";
} else if (number % 5 === 0) {
  return "pong";
} else {
  return "NaN";
}
};

// USER INTERFACE LOGIC
$(function() {
  var counter = function(loopEnd) {
  var output = [];
    for (i = 0; i <= loopEnd; i ++) {
    } if (i % 3 === 0) {
      output.push("ping")
    } else if (i % 5 === 0) {
      output.push("pong")
    } else if (i % 3 !==0 || i % 5 !== 0){
      output.push(i)
    } else {
      return false;
    }
    return output;
  };

  $("form#counter").submit(function(event) {
    var loopEnd = $("input#count-to").val();
    var numbers = [counter(loopEnd)];

    $("#output").text(numbers);
    $("#result").show();
    event.preventDefault();

  });
});
