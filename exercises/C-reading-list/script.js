function readingList(bookList) {
  // Write your code here...

  let content = document.getElementById("content");
  // for (i = 0; i < bookList.length; i++) {
  //   console.log(i);
  //   let book = bookList[i];
  //   let p = document.createElement("p");
  //   let text = document.createTextNode(book.title + " by " + book.author);
  //   p.appendChild(text);
  //   content.appendChild(p);
  // }
books.forEach(function(book){
  let p = document.createElement("p");
    let text = document.createTextNode(book.title + " by " + book.author);
    p.appendChild(text);
    content.appendChild(p);
    console.log(book);
})
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
  }
];

readingList(books);
