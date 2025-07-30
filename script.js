var popupOverlay = document.querySelector(".popup-overlay")
var popupBox = document.querySelector(".popup-box")
var addBookPopup = document.getElementById("add-book-popup")

addBookPopup.addEventListener("click", function(){
    popupOverlay.style.display = 'block'
    popupBox.style.display = 'block'
})

var cancelButton = document.getElementById("close-popup")
cancelButton.addEventListener("click", function(event){
    event.preventDefault()
    popupOverlay.style.display = 'none'
    popupBox.style.display = 'none'
})

var container = document.querySelector(".container")
var addBook = document.getElementById("add-book")
var bookTitle = document.getElementById("book-title")
var bookAuthor = document.getElementById("book-author")
var bookDescription = document.getElementById("book-description")

addBook.addEventListener("click", function (event) {
    event.preventDefault();
    if (bookTitle.value.trim() === "" ||bookAuthor.value.trim() === "" ||bookDescription.value.trim() === "") {
        alert("Please enter a title, author, and description.");
        return; 
    }
    var div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML = `<h2>${bookTitle.value}</h2>
            <h5>${bookAuthor.value}</h5>
            <p>${bookDescription.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupOverlay.style.display = 'none'
    popupBox.style.display = 'none'
})

function deletebook(event) {
    event.target.parentElement.remove()
}

