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
    // debugger;
    var gnome = $("input#count-to").val();
    var result = number(gnome);
    var list = "";
      for ( i = 0; i < result.length; i ++) {
        list += "<li>" + result[i] + "</li>";
      } document.getElementById("output").innerHTML = list;

    event.preventDefault();
  });
});
