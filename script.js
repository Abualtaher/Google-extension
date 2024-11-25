const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");

let myLeads = [];

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  renderLeads();
});

function renderLeads() {
  let myList = "";
  for (let i = 1; i < myLeads.length; i++) {
    myList = "<li>" + myLeads[i] + "</li> ";
  }
  ulEl.innerHTML += myList;
}
