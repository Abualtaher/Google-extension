const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");

let myLeads = [];

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  for (let i = 1; i < myLeads.length; i++) {
    /* ulEl.innerHTML += "<li>" + myLeads[i] + "</li> "; */
    const li = document.createElement("li");
    li.textContent = myLeads[i];
    ulEl.appendChild(li);
  }
});
