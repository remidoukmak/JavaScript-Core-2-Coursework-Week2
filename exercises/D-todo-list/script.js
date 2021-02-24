function todoList(todos) {
  // Write your code here...
  function createList(todos) {
    let listView = document.createElement("ol");

    for (var i = 0; i < todos.length; i++) {
      var listViewItem = document.createElement("li");
      listViewItem.appendChild(document.createTextNode(todos[i]));
      listView.appendChild(listViewItem);
    }

    return listView;
  }

  let list = document.getElementById("firstline");
  list.onclick = function () {
    this.style.setProperty("text-decoration", "line-through");
  };
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
