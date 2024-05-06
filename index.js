let myLeads = []
let leadsFromLocalStorage = localStorage.getItem(myLeads)
myLeads = JSON.parse(leadsFromLocalStorage)

const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function() {
     myLeads.push(inputEl.value)
     ulEl.innerHTML +=   `<li>
                              <a href="${inputEl.value}" target="_blank">${inputEl.value}</a>
                         </li>`
     inputEl.value =""
     localStorage.setItem("myLeads",JSON.stringify(myLeads))
     
 })



/*if leadsFromLocalStorage {
     console.log(localStorage.getItem("myLeads"))
     renderLeads()
}

 function renderLeads() {
     let listItems = ""
     for (let i=0; i<myLeads.length; i++) {         
          listItems += "<li>" + myLeads[i]+ "</li> "
      }
     ulEl.innerHTML = listItems
}

