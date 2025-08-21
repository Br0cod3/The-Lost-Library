
let librarySection;

const Grimoire = []
const Tomes = []
const Scrolls = []
const Tablets = []
const Chronicles = []
const Manuscripts = []

const Library = [Grimoire, Tomes, Scrolls, Tablets, Chronicles, Manuscripts]

function Book(title, author, numberOfPages, id) {
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

addBookToLibrary("The philosopher's stone", "J.K. Rowling", "800")
console.log(Grimoire)