import './style.css';
export function mainPage(){
    const contents = document.querySelector("#content")
    
    const header = document.createElement("div")
    header.setAttribute("id", "header")
    header.textContent = "Welcome to Scarlet Cafe"
    contents.appendChild(header)
    const description = document.createElement("div")
    description.setAttribute("id", "description")
    description.textContent = "Touhou Cafe is a type of cafe that is inspired by a popular video game series called Touhou Project. At this cafe, fans can enjoy food and drinks based on the game's characters and themes, while also experiencing the game's culture and art. You'll see decorations and special menu items related to the Touhou Project, and some cafes even have cosplay events and merchandise sales. It's a fun place for fans to hang out and enjoy the game's world."
    contents.appendChild(description)
    
}
