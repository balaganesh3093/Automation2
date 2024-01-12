  var dynamicList = document.getElementById("dynamicList");

  // Populate a list in real-time
  var fruits = ["Apple", "Banana", "Orange", "Grapes"];
  for (var i = 0; i < fruits.length; i++) {
    setTimeout(function(index) {
      var listItem = document.createElement("li");
      listItem.textContent = fruits[index];
      dynamicList.appendChild(listItem);
    }, i * 1000, i);
  }