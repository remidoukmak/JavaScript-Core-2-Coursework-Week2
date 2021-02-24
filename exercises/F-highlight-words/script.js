function highlightWords(paragraph, colours) {
  // Write your code here...

  let content = document.querySelector("#content");
  let select = document.createElement("select");
  let pea = document.createElement("p");
  let para = paragraph.split(" ");
  colours.forEach((element) => {
    let option = document.createElement("option");
    option.value = element;
    option.innerText = element;
    select.appendChild(option);
  });
  para.forEach((info) => {
    let words = document.createElement("span");
    words.innerText = ` ${info}`;
    pea.appendChild(words);
    // console.log(info);
    words.addEventListener("click", (e) => {
      if (select.value === "yellow") {
        words.style.backgroundColor = "yellow";
      } else if (select.value === "green") {
        words.style.backgroundColor = "green";
      } else if (select.value === "blue") {
        words.style.backgroundColor = "blue";
        // } else {
        //   words.style.backgroundColor = "none"
      }
    });
  });
  content.appendChild(pea);
  content.appendChild(select);
}
const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";
const colours = ["yellow", "green", "blue", "none"];
highlightWords(paragraph, colours);

// let content = document.getElementById("content");
// let paragraph = document.createElement("paragraph");
//     paragraph.innerHTML = "This paragraph changes when you select a colour!";
// let colourList = document.createElement("select");
//   colourList.id = "colours";

//     for (let i = 0; i < colours.length; i++) {
//         let chosenColour = document.createElement("option");
//         chosenColour.innerHTML = colours[i];
//         colourList.appendChild(chosenColour);
//     }

//     // this is for the paragraph .split
//     var str = 'paragraph';
//     var arr = str.split(); // no separator passed to split
//     console.log(arr);

//     // var array = entry.split("");
//     // iterate over array of words
//     var txt = "";
//     var numbers = [45, 4, 9, 16, 25];
//     numbers.forEach(myFunction);
//     function myFunction(value, index, array) {
//         txt = txt + value + "<br>";

//     //  create a span
//         var dateSpan = document.createElement('span')
//         dateSpan.innerHTML = dateString;
//         var li = document.createElement('li');
//         li.appendChild(dateSpan);
//     }

//     // button
//     let button = document.getElementById("button").addEventListener('click', function() {}
//             function buttonClick() {
//                 console.log('Button clicked');
//             }
//             highlightWords.addEventListener("highlight", function() {
//                 paragraph.innerHTML = `You have selected ${this.value}!`;
//                 paragraph.style.color = this.value;
//             });

//             // dropwdown
//             function myFunction() {
//                 document.getElementById("myDropdown").classList.toggle("show");
//             }
//             // Close the dropdown menu if the user clicks outside of it
//             window.onclick = function(event) {
//                 if (!event.target.matches('.dropbtn')) {
//                     var dropdowns = document.getElementsByClassName("dropdown-content");
//                     var i;
//                     for (i = 0; i < dropdowns.length; i++) {
//                         var openDropdown = dropdowns[i];
//                         if (openDropdown.classList.contains('show')) {
//                             openDropdown.classList.remove('show');
//                         }
//                     }
//                 }
//             }
//             const paragraph =
//                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";
//             let colours = ["yellow", "green", "blue", "none"];
//             highlightWords(colours, paragraph);
