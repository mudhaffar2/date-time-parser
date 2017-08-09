
var input = document.querySelector("input");
var output = document.querySelector(".date-output");


input.addEventListener('keyup', function() {
  var inputVal = input.value;
  console.log(input.checkValidity());
  if (!(input.checkValidity())) {
    output.textContent = "The Format Should Be 'DD-MM-YYYY HH:mm'";
  } else {
    var parsedDate = parseDateInputValue(inputVal);
    output.textContent = 'parsed date ' + parsedDate.toString();
    // console.log(typeof(input.value));
  }
});

function parseDateInputValue (input) {

  var date = input.substr(0,2);
  var month = input.substr(3,2);
  var year = input.substr(6,4);
  var hours = input.substr(11,2);
  var minutes = input.substr(14,2);

  var returnedDate = new Date(year, month, date, hours, minutes, 0, 0);

  return returnedDate;

}

