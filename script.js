const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const what = document.querySelector("#what");

let myLeads = [];

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  for (let i = 0; i < myLeads.length; i++) {
    what.textContent = myLeads[i];
  }
});
