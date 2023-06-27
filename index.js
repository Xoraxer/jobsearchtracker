let currentDay = []
let count = 0
let dayEl = document.getElementById("day-el")

const countEl = document.getElementById("count-el")
const appliedEl = document.getElementById("applied-el")
const inputEl = document.getElementById("input-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("currentDay"))

if (leadsFromLocalStorage) {
    currentDay = leadsFromLocalStorage
}

dayEl.textContent = currentDay.length


appliedEl.addEventListener("click", function () {

    if (count < 50) {
        count += 1
        return countEl.textContent = count
    } else {
        appliedEl.remove();
        currentDay.push(inputEl.value)
        inputEl.value = ""
        localStorage.setItem("currentDay", JSON.stringify(currentDay))
        return countEl.textContent = "Done for today!"
    }
})



















// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")


// inputBtn.addEventListener("click", function () {
//     myLeads.push(inputEl.value)
//     inputEl.value = ""
//     renderLeads()
// })

// function renderLeads() {
//     let listItems = ""
//     for (let i = 0; i < myLeads.length; i++) {
//         //listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + "</a></li>"
//         listItems += `
//     <li>
//       <a target='_blank' href='${myLeads[i]}'>
//       ${myLeads[i]}
//       </a>
//     </li>`
//     }

//     ulEl.innerHTML = listItems
// }
