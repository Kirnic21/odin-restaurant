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
container.appendChild(contact)
const ulDesc = document.createElement("ul")
ulDesc.setAttribute("id","desc")
contact.appendChild(ulDesc)
const li1 = document.createElement("li")
li1.classList.add("descli")
li1.textContent = "Number: 69696-420"
ulDesc.appendChild(li1)
const li2 = document.createElement("li")
li2.classList.add("descli")
li2.textContent = "Local:Scarlet Devil Mansion"
ulDesc.appendChild(li2)
const contact2 = document.createElement("div")
contact2.textContent ="Flandre Scarlet"
contact2.classList.add("Contact")
container.appendChild(contact2)
const ulDesc2 = document.createElement("ul")
ulDesc2.setAttribute("id","desc")
contact2.appendChild(ulDesc2)
const li3 = document.createElement("li")
li3.classList.add("descli")
li3.textContent = "Number: 420-6969"
ulDesc2.appendChild(li3)
const li4 = document.createElement("li")
li4.classList.add("descli")
li4.textContent = "Local:Scarlet Devil Mansion Basement"
ulDesc2.appendChild(li4);
const location = document.createElement("div")
location.classList.add("Location")
container.appendChild(location)
const loctitle = document.createElement("div")
loctitle.classList.add("Loc-Title")
loctitle.textContent="Our Location: "
location.appendChild(loctitle)
const img = document.createElement("img");
img.classList.add("LocMap")
img.src = "Screenshot_1.png";
location.appendChild(img)
}