  var userInput;
  var number;


  while (isNaN(number)) {
    userInput = prompt("Enter a number:");


    number = parseFloat(userInput);

    if (isNaN(number)) {
      alert("Invalid input. Please enter a valid number.");
    }
  }


  console.log("You entered a valid number: " + number);
