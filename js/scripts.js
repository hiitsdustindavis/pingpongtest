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
    for(var i = 1; i <= loopEnd; i ++) {
        output.push(i);
    }

    return output;
  };

  $("form#counter").submit(function(event) {

    var loopEnd = parseInt($("input#count-to").val());
    var numbers = counter(loopEnd);

    $(".output").text(numbers);

    $("#result").show();
    event.preventDefault();

  });
});


// $(function() {
//   var pingPong = function(number) {
//   var output = [];
//   for(var i = 1; i <= number; i ++) {
//       output.push(i);
// }
//   return output;
// };
// });
//   $("form#counter").submit(function(event) {
//
//       var numberEnd =
//       parseInt($("input#user-number").val());
//       var result = pinPong(numberEnd);
//
//       $(".output").text(result);
//
//       $("#result").show();
//       event.preventDefault();
//
//     });
