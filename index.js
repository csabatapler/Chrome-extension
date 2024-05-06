let myLeads = []
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const inputBtn = document.getElementById("input-btn")
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")


if (leadsFromLocalStorage) {
     myLeads = leadsFromLocalStorage
     console.log(localStorage.getItem("myLeads"))
     render(myLeads)
}

 function render(leads) {
     let listItems = ""
     for (let i=0; i<leads.length; i++) {         
          listItems += "<li>" + myLeads[i]+ "</li> "
      }
     ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", function() {
     if (inputEl.value) {
     myLeads.push(inputEl.value)
     }
     render(myLeads)
     inputEl.value =""
     localStorage.setItem("myLeads",JSON.stringify(myLeads))   
 })

 tabBtn.addEventListener("click", function() {
     chrome.tabs.query({active:true,currentWindow:true}, function(tabs){
          myLeads.push(tabs[0].url)
          localStorage.setItem("myLeads",JSON.stringify(myLeads))
          render(myLeads)
     }     )
     
 })

 deleteBtn.addEventListener("click", function() {
     localStorage.clear()
     myLeads =[]
     render(myLeads)
})
