var sortedList = document.getElementById("sortedList");
  var numbers = [8, 2, 5, 1, 8];

  // Real-time update: Sort the array every 3 seconds
  setInterval(function() {
    numbers.sort(function(a, b) {
      return a - b;
    });

    // Update the sorted list
    sortedList.innerHTML = "";
    numbers.forEach(function(number) {
      var listItem = document.createElement("li");
      listItem.textContent = number;
      sortedList.appendChild(listItem);
    });
  }, 3000);
