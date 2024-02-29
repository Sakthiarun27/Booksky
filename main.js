var popupbox = document.querySelector(".popup")
var add=document.querySelector(".add")

add.addEventListener("click",function(){
    popupbox.style.display="block"
})

var cancel = document.querySelector("#cancel-book")

cancel.addEventListener("click",function(event){
    event.preventDefault()
    popupbox.style.display="none"
})

var container = document.querySelector(".container")
var title=document.querySelector("#book-title")
var author=document.querySelector("#book-author")
var textar=document.querySelector("#book-description")
var addbtn=document.querySelector("#add-book")

addbtn.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${title.value}</h2>
    <h5>${author.value}</h5>
    <p>${textar.value}</p>
    <button onclick="delet(event)"> Delete</button>`
    container.append(div)
    popupbox.style.display="none"
})

function delet(event){
    event.target.parentElement.remove()
}