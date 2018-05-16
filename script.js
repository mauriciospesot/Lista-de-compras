var button = document.getElementById("enter");
var input = document.getElementById("input");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var deleteBtns = document.getElementsByClassName("delete");


function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    var button = document.createElement("button");
    button.appendChild(document.createTextNode("X"));
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    li.appendChild(button)
    input.value = "";
    li.addEventListener("click", toggleDone);
    li.classList.add("items");
    button.addEventListener("click", deleteItem);
    button.classList.add("delete");
}

function addNewItemAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addNewItemAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function toggleDone() {
    this.classList.toggle("done");
}

function deleteItem(){
    var child = document.activeElement.parentNode;
    ul.removeChild(child);
}

function manageGroupTag(tag, event, action) { 
    for (let i = 0; i < tag.length; i++) {
        tag[i].addEventListener(event, action);
    }
}

button.addEventListener("click", addNewItemAfterClick);
input.addEventListener("keypress", addNewItemAfterKeypress);
manageGroupTag(li, "click", toggleDone);
manageGroupTag(deleteBtns, "click", deleteItem);



