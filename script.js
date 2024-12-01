let myLeads = [];
const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn");

const itemsLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (itemsLocalStorage) {
  myLeads = itemsLocalStorage;
  render(myLeads);
}

function render(leads) {
  let myList = "";
  for (let i = 0; i < leads.length; i++) {
    myList += `<li>
      <a target='_blank' href='${leads[i]}'>${leads[i]}</a>
      </li > `;
  }
  ulEl.innerHTML = myList;
}

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

deleteBtn.addEventListener("click", () => {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});
