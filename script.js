let myLeads = [];
const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");

let itemsLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(itemsLocalStorage);

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
});

function renderLeads() {
  let myList = "";
  for (let i = 0; i < myLeads.length; i++) {
    myList = `<li>
      <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
      </li > `;
  }
  ulEl.innerHTML += myList;
}
