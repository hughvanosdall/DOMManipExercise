const selectedId = document.getElementById("container")
const selectedIdQuery = document.querySelector("section")
const selectedIdQueryAll = document.querySelectorAll(".second")
const footerDiv = document.querySelector(".footer")

const ol = document.querySelector("ol")
const third = ol.querySelector(".third")

selectedId.innerHTML +="<p>Hello!</p>"

footerDiv.classList.add("main")
footerDiv.classList.remove("main")

function newLi(){
    let newLiElement = document.createElement("li")
    let ul = document.querySelector("ul")
    newLiElement.innerText +="four"
    ul.append(newLiElement)
}

function setBackgroundColorGreen(){
let lis = document.querySelectorAll("ol li")
for(let li of lis) {
    li.style.backgroundColor= "green"
}
}

function removeFooter(){
    let footer = document.querySelector(".footer")
    let body = document.querySelector("body")
    body.removeChild(footer)
}

removeFooter()
newLi()
setBackgroundColorGreen()