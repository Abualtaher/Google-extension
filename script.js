const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");

let myLeads = [];

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  console.log(myLeads);
});
