function listOfColours(colours) {
  // Write your code here...

  let content = document.getElementById("content");
  let colourList = document.createElement("selector");
  colourList.id = "colours";

  let paragraph = document.createElement("p");
  paragraph.innerHTML = "This paragraph changes when you select a colour!";


  for (let i = 0; i < colours.length; i++)  {
    let chosenColour = document.createsElement("option");
    chosenColour.innerHTML = colours[i];
    colourList.appendChild(chosenColour);
  }
  colourList.addEventListener("change", function () {
    paragraph.innerHTML = `You have selected ${this.value}!`
    paragraph.style.color = this.value;
  });

//     for (var i = 0; i < todos.length; i++) {
//       var listViewItem = document.createElement("li");
//       listViewItem.appendChild(document.createTextNode(todos[i]));
//       listView.appendChild(listViewItem);
//     }

  const colours = ["red", "blue", "green", "yellow", "pink", "brown"];  
listOfColours(colours);



// function todoList(todos) {
//   // Write your code here...
//   function createList(todos) {
//     let listView = document.createElement("ol");

//     for (var i = 0; i < todos.length; i++) {
//       var listViewItem = document.createElement("li");
//       listViewItem.appendChild(document.createTextNode(todos[i]));
//       listView.appendChild(listViewItem);
//     }

//     return listView;
//   }

//   let list = document.getElementById("firstline");
//   list.onclick = function () {
//     this.style.setProperty("text-decoration", "line-through");
//   };
// }

// const todos = [
//   { todo: "wash the dishes" },
//   { todo: "walk the dog" },
//   { todo: "learn javascript" },
//   { todo: "go shopping" },
// ];

// todoList(todos);


