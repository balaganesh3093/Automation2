  var userInput;
  var number;

  // Keep prompting the user until a valid number is entered
  while (isNaN(number)) {
    userInput = prompt("Enter a number:");

    // Convert the user input to a number
    number = parseFloat(userInput);

    if (isNaN(number)) {
      alert("Invalid input. Please enter a valid number.");
    }
  }

  // Display the valid number
  console.log("You entered a valid number: " + number);