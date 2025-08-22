
let librarySection = "Grimoire";
const addBook = document.querySelector(".add-book")
const cancel = document.querySelector(".cancel")
const form = document.getElementById("side-form")

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
    })
})

//SECTION ARRAYS
const Grimoire = []
const Tomes = []
const Scrolls = []
const Tablets = []
const Chronicles = []
const Manuscripts = []

const Library = [Grimoire, Tomes, Scrolls, Tablets, Chronicles, Manuscripts]

function Book(title, author, numberOfPages) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.id = crypto.randomUUID()
}

function addBookToLibrary(title, author, numberOfPages) {
    const book = new Book(title, author, numberOfPages);
    
    switch (librarySection) {
        case "Tomes":
            Tomes.push(book)
            break;
        
        case "Scrolls":
            Scrolls.push(book)
            break;

        case "Tablets":
            Tablets.push(book);
            break;

        case "Chronicles":
            Chronicles.push(book)
            break;

        case "Manuscripts":
            Manuscripts.push(book)
            break;
    
        default:
            Grimoire.push(book)
            break;
    }

}

addBookToLibrary("Harry Potter and the Philosopher's stone", "J.K. Rowling", 352)
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1216)

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
