const mediaQuery = window.matchMedia('(max-width: 769px)')

const hamburgerMenuButtons = document.getElementsByClassName("menu-button");
const newPostButtons = document.getElementsByClassName("new-post-button");
const submitNewPostButtom = document.querySelector(".submit-post-button");

const cancelPostButton = document.querySelector(".cancel-post");

const newTitle = document.querySelector("#new-title");
const newDescription = document.querySelector("#new-description");

const menu = document.querySelector(".menu");
const mainContainer = document.querySelector(".container-main");
const formContainer = document.querySelector(".container-new-post");
const cardsContainer = document.querySelector(".cards-container");


const library = new Library();
renderLibrary();

Array.from(hamburgerMenuButtons).forEach(element => {
    element.onclick = function() {
        toggleMenu();
        if (mainContainer.classList.contains("hide")) {
            formContainer.classList.add("hide");
            mainContainer.classList.remove("hide");
        }   
    }
})

Array.from(newPostButtons).forEach(element => {
    element.onclick = function () {
        openNewBookForm();
    }
})

cancelPostButton.onclick = function () {
    closeNewBookForm();
    
    newTitle.value = "";
    newDescription.value = "";

}

formContainer.addEventListener("submit", function (e) {
    e.preventDefault();
    insertNewBook();

    closeNewBookForm();
})

cardsContainer.onclick = function(e) {
    const trashButton = e.target.closest(".trash-button");
    const readButton = e.target.closest(".read-button");
    
    if (trashButton == null && readButton == null)
        return;

    const card = e.target.closest(".card");
    const bookId = Number(card.dataset.id.split("-")[1]);

    if (trashButton != null) {
        library.deleteBookAtId(bookId);
        card.remove();
    }

    if (readButton != null) {
        const read = card.querySelector(".read-button");
        library.getBookAtID(bookId).setRead(true);
        read.classList.toggle("book-read");
        card.classList.toggle("card-read");
    }

    console.log(library);
}


function insertNewBook() {
    const book = new Book(newTitle.value, newDescription.value);
    library.addBook(book);    
    cardsContainer.append(book.renderCard());
    

    console.log(library);
}

function closeNewBookForm() {
    mainContainer.classList.toggle("hide");
    formContainer.classList.toggle("hide");

    newTitle.value = "";
    newDescription.value = "";
    handleScreenChange(mediaQuery);
}

function openNewBookForm() {
    if (mainContainer.classList.contains("hide"))
        return;

    removeMenu();
    mainContainer.classList.toggle("hide");
    formContainer.classList.toggle("hide");
}

function removeMenu() {
    menu.classList.add("hide");
}

function toggleMenu() {
    menu.classList.toggle("hide");
    console.log("clicked");

}

function handleScreenChange(mediaQuery) {
    if (mediaQuery.matches) {
        // 769px or smaller: show menu
        menu.classList.remove("hide");
    } else {
        // bigger than 769px: hide menu
        menu.classList.add("hide");
    }
}

mediaQuery.addEventListener('change', handleScreenChange);
handleScreenChange(mediaQuery);

function renderLibrary() {

    if (library.getSize() == 0)
        return;

    for(const [id, book] of library.map) {
        cardsContainer.append(book.renderCard());
    }

}