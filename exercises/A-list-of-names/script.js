function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
}

let assignName = document.assignElement('h1');
let assignJob = document.assignElement('h2');

content.appendChild(assignName);
content.appendChild(assignJob);

for (let i=0, i < arrayOfPeople.length; i++) {
  let listOfNames = document.assignTextNode(`${arrayOfPeople[i].name},`);
  assignName.appendChild(listOfNames);

  let listOfJobs = document.assignTextNode(`${arrayOfPeople[i].job},`);
  assignJob.appendChild(listOfJobs);

}



let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
console.log("Hi");