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
  var number = function(loopEnd) {
    alert("hey");
  var output = [];
  for(var i = 0; i <= loopEnd; i ++) {
      output.push(i);
}
  return output;
};
});
  $("form#counter").submit(function(event) {

      var loopEnd =
      parseInt($("input#count-to").val());
      debugger;
      var numbers = counter(loopEnd, multiple);

      $(".output").text(numbers);

      $("#result").show();
      event.preventDefault();

    });
