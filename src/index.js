import './style.css';
import {mainPage} from './page1'
import {menu} from './page2'
import {contacts} from "./page3"
let page = 0;
const mainpage = document.querySelector("#mainpage")
const menupage = document.querySelector("#menupage")
const contactpage = document.querySelector("#contactpage")
const contents = document.querySelector("#content")
mainPage()
menupage.addEventListener("click",function mainpage1(){
    if(page!==1)
    {
    page=1;
    contents.innerHTML=" "
    menu()
    console.log(page)
    }
})
mainpage.addEventListener("click",function mainpage0()
{
    if(page!==0)
    {
        page=0;
        contents.innerHTML=" "
        mainPage()
        console.log(page)
    }
});
contactpage.addEventListener("click",function mainpage2(){
    if (page!==2)
    {
        page = 2;
        contents.innerHTML = " "
        contacts()
        console.log(page)
    }
})