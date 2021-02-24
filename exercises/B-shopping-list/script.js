function shoppingList(arrayOfPeople) {

  let shopping, text;
shopping = ["Banana", "Orange", "Apple", "Mango"];

text = "<ul>";
shopping.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}

  // Write your code here...
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
