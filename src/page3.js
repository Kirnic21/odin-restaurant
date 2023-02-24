export function contacts(){
const content = document.querySelector("#content")
const header = document.createElement("div")
header.setAttribute("id","header")
header.textContent= "Contact Us!"
content.appendChild(header)

const container = document.createElement("div")
container.setAttribute("id","container")
content.appendChild(container)
const contact = document.createElement("div")
contact.classList.add("Contact")
contact.textContent = "Remilia Scarlet"
const ulDesc = document.createElement("ul")
ulDesc.setAttribute("id","desc")
contact.appendChild(ulDesc)
const li1 = document.createElement("li")
li1.classList.add("descli")
li1.textContent = "Number: 69696-420"
ulDesc.appendChild(li1)
const li2 = document.createElement("li")
li2.classList.add("descli")
li2.textContent = ""
ulDesc.appendChild(li2)
}