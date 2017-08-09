
var input = document.querySelector("input");
var output = document.querySelector(".date-output");


input.addEventListener('keyup', function() {
  var parsedDate = parseDate(input.value);
  output.textContent = 'parsed date ' + parsedDate;
  // console.log(typeof(input.value));
});

function parseDate (input) {

  var dayNum = input.substr(0,2);
  var monthNum = input.substr(3,2);
  var year = input.







}

