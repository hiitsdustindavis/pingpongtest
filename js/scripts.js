//BUSINESS LOGIC
var number = function(input) {
var output = [];
  if (number < 1) {
    return false;
  } else {
    // debugger;
    for (i = 1; i <= input; i ++) {
      if (i % 15 === 0) {
        output.push(" ping pong");
      } else if (i % 3 === 0) {
        output.push(" ping");
      } else if (i % 5 === 0) {
        output.push(" pong");
      } else {
        output.push(" " + i);
      }
    }
  }
  return output;
};

// USER INTERFACE LOGIC
$(function() {

  $("form#counter").submit(function(event) {
    debugger;
    var gnome = $("input#count-to").val();
    var result = number(gnome);
      // for (i = 0; i < result.length; i ++) {
        document.getElementById("output").innerHTML = result + "</br>";
        // document.write(result[i]);
      // }
    // result.toString("#output");
    event.preventDefault();
  });
});


  // $(function() {
//   var counter = function(loopEnd) {
//   var output = [];
//
//     for (i = 0; i <= loopEnd; i ++) {
//     } if (i % 3 === 0) {
//       output.push("ping")
//     } else if (i % 5 === 0) {
//       output.push("pong")
//     } else {
//       output.push(i);
//     }
//   };

//   $("form#counter").submit(function(event) {
//     var numbers = [counter(loopEnd)];
//     var loopEnd = $("input#count-to").val();
//
//
//
//       // for (var i = 0; i < number.length; i ++) {
//       //   listItem += "<li>" + result[i] + "</li>";
//       // }
//
//
//     $("#output").text(numbers);
//
//     $("#result").show();
//     event.preventDefault();
//
//   });
// });

// else if (i % 3 !==0 || i % 5 !== 0){
//   output.push(i)
// }
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
