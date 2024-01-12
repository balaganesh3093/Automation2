var tableBody = document.getElementById("realTimeTableBody");

  // Nested loop for creating a dynamic table
  for (var i = 1; i <= 5; i++) {
    var row = document.createElement("tr");

    for (var j = 1; j <= 5; j++) {
      var cell = document.createElement("td");
      cell.textContent = i * j;
      row.appendChild(cell);
    }

    tableBody.appendChild(row);
  }

  // Real-time update using nested loops
  setInterval(function() {
    for (var i = 1; i <= 5; i++) {
      for (var j = 1; j <= 5; j++) {
        var cell = tableBody.rows[i - 1].cells[j - 1];
        cell.textContent = parseInt(cell.textContent) + 1;
      }
    }
  }, 1000);