let myLeads = [];
const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");

localStorage.setItem();

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  inputEl.value = "";
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
