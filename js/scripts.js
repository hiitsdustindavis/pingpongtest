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
    debugger;
    for (var i = 0; i <= loopEnd; i += loopEnd) {
    } if (i % 3 === 0) {
      output.push("ping")
    } else if (i % 5 === 0) {
      output.push("pong")
    } else if (i % 3 !==0 || i % 5 !== 0){
      output.push(i)
    } else {
      return false;
    }
  };





  $("form#counter").submit(function(event) {
    // var numbers = [];
    var loopEnd = $("input#count-to").val();
    var numbers = $(counter([loopEnd]));

    $("#output").text(numbers);

    $("#result").show();
    event.preventDefault();

  });
});


// document.getElementById("output").innerHTML = "Good day";

// PRE CONDITIONAL STATEMENT WORK
// $(function() {
//   var counter = function(loopEnd) {
//     var output = [];
//     for(var i = 1; i <= loopEnd; i ++) {
//         output.push(i);
//     }
//     return output;
//   };

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
