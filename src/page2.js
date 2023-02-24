export function menu(){
    const contents = document.querySelector("#content")
    //Header
    const header = document.createElement("div")
    header.textContent = "Menu"
    header.setAttribute("id","header")
    contents.appendChild(header)
    const menu = document.createElement("div")
    contents.appendChild(menu)
    menu.setAttribute("id","menu")
    const coffee_title = document.createElement("div")
    coffee_title.setAttribute("id","menu-coffe-title")
    coffee_title.textContent = "Coffee"
    menu.appendChild(coffee_title)
    const menu_coffe = document.createElement("div")
    menu_coffe.setAttribute("id","menu-coffe")
    menu.appendChild(menu_coffe)
    const ul = document.createElement("ul")
    menu_coffe.appendChild(ul)
    const li1 = document.createElement("li")
    li1.textContent="The Youkai Mountain Cold Brew - A refreshing cold brew made with dark roast coffee, ice, and a touch of agave syrup, paying homage to the mountainous home of many powerful youkai."
    ul.appendChild(li1)
    const li2 = document.createElement("li")
    li2.textContent="Nitori's Technological Espresso - An innovative espresso with a touch of caramel and a splash of milk foam, in honor of the inventive kappa, Nitori Kawashiro."
    ul.appendChild(li2)
    const li3 = document.createElement("li")
    li3.textContent="The Hourai Elixir Mocha - A rich mocha made with dark chocolate, espresso, and a hint of hazelnut syrup, in honor of the Hourai Elixir, which grants immortality to those who consume it."
    ul.appendChild(li3)
    const cake_title = document.createElement("div")
    cake_title.setAttribute("id","menu-cake-title")
    cake_title.textContent = "Cake"
    menu.appendChild(cake_title)
    const cake_menu = document.createElement("div")
    cake_menu.setAttribute("id","menu-cake")
    menu.appendChild(cake_menu)
    const ul2 = document.createElement("ul")
    cake_menu.appendChild(ul2)
    const li4 = document.createElement("li")
    li4.textContent = "Marisa Kirisame's Starry Sky Cake - A dark chocolate cake with a galaxy frosting design on top, reminiscent of Marisa's witch outfit."
    ul2.appendChild(li4)
    const li5 = document.createElement("li")
    li5.textContent = "Sakuya Izayoi's Pocket Watch Cake - A vanilla cake with a fondant pocket watch design, inspired by Sakuya's time-manipulating abilities."
    ul2.appendChild(li5)
    const li6 = document.createElement("li")
    li6.textContent = "Reimu Hakurei's Shrine Cake - A Japanese-style sponge cake decorated with red and white icing, like the Hakurei Shrine that Reimu tends to."
    ul2.appendChild(li6)
    const li7 = document.createElement("li")
    li7.textContent = "Alice Margatroid's Dollhouse Cake - A cake with small dollhouse elements, such as edible furniture or miniature dolls, inspired by Alice's ability to manipulate dolls."
    ul2.appendChild(li7)

}