
let librarySection;
const addBook = document.querySelector(".add-book")
const cancel = document.querySelector(".cancel")
const form = document.getElementById("side-form")

//SECTION ARRAYS
const Grimoire = []
const Tomes = []
const Scrolls = []
const Tablets = []
const Chronicles = []
const Manuscripts = []


const Library = {
    "Grimoire": Grimoire,
    "Tomes": Tomes,
    "Scrolls": Scrolls,
    "Tablets": Tablets,
    "Chronicles": Chronicles,
    "Manuscripts": Manuscripts
}

const imageMap = {
    Grimoire: "./images/grimoire.jpg",
    Tomes: "./images/tomes.jpg",
    Scrolls: "./images/scroll.jpg",
    Tablets: "./images/tablet.jpg",
    Chronicles: "./images/chronicles.jpg",
    Manuscripts: "./images/manuscript.jpg",
}

function Book(title, author, numberOfPages) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.id = crypto.randomUUID()
}

function addBookToLibrary(title, author, numberOfPages) {
    const book = new Book(title, author, numberOfPages);
    
    const rack = Library[librarySection]
    if (rack) {
        rack.push(book)
    }
}

function renderShelf() {
    const shelf = document.querySelector(".books")
    shelf.querySelectorAll(".book:not(.add-book)").forEach(book => book.remove())

    const books = Library[librarySection];
    for (const book of books) {   
        const archive = document.createElement("div")
        archive.classList.add("book", librarySection)

        const about = document.createElement("div")
        const phrase = document.createElement("p")
        const phrase2 = document.createElement("p")
        const phrase3 = document.createElement("p")
        phrase.textContent = `${book.title}`
        phrase2.textContent = `${book.author}`
        phrase3.textContent = `${book.numberOfPages}`
        about.append(phrase, phrase2, phrase3)

        const pic = document.createElement("img")
        pic.src = imageMap[librarySection]
        pic.alt = librarySection

        const buttons = document.createElement("div")
        buttons.classList.add("buttons")
        const btn1 = document.createElement("button")
        btn1.classList.add("read-status")
        const btn2 = document.createElement("button")
        btn2.classList.add("remove")
        buttons.append(btn1, btn2)

        archive.append(pic, about, buttons)
        shelf.appendChild(archive)
    }
}

//MANUAL BOOKS

librarySection = "Tomes"
addBookToLibrary("The Mahabharata", "Vyasa", 2400)
addBookToLibrary("Infinite Jest", "David Foster Wallace", 1079)

librarySection = "Scrolls"
addBookToLibrary("The Dead Sea Scrolls", "Various Essene scribes", 972)
addBookToLibrary("The Great Isaiah Scroll", "Hebrew scribe", 54)

librarySection = "Tablets"
addBookToLibrary("The Ten Commandments", "Sky Daddy", 1)
addBookToLibrary("Epic of Gilgamesh", "Sumerian scribes", 12)

librarySection = "Chronicles"
addBookToLibrary("Anglo-Saxon Chronicle", "Various monastic scribes", 300)
addBookToLibrary("Chronicles of Narnia", "C.S. Lewis", 767)

librarySection = "Manuscripts"
addBookToLibrary("Voynich Manuscript", "Unknown", 240)
addBookToLibrary("Codex Gigas", "Herman the Recluse", 620)

librarySection = "Grimoire"
addBookToLibrary("The Philosopher's stone", "J.K. Rowling", 352)
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1216)

//SECTION

const sections = document.querySelectorAll("p[class^='section']")

sections.forEach(section => {
    section.addEventListener("click", ()=> {
        sections.forEach(category => {
            if (category.classList.contains("lib-sec")) {
                category.classList.remove("lib-sec")
                category.classList.add("fall")
            }
        })
        section.classList.remove("fall")
        section.classList.add("lib-sec")
        librarySection = section.textContent
        renderShelf()
    })
})

addBook.addEventListener("click", ()=> {
    if (form.classList.contains("fade-out")) {
        form.classList.remove("fade-out")
    }
    form.classList.remove("hidden")
    void form.offsetWidth
    form.classList.add("fade-in")
})

cancel.addEventListener("click", () => {
    form.classList.add("fade-out")
    form.classList.remove("fade-in")
    form.classList.add("hidden")
})

renderShelf()
