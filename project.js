class Book {
    constructor(title, author, isRead){
        this.title = title;
        this.author = author;
        this.isRead = isRead;
    }

    get fullName() {
        return "'" + this.title + "' by " + this.author;
    }
}

class Library {
    constructor(books) {
        this.books = books;
    }

    addBook(title, author) {
        this.books.push(new Book(title, author, false));
    }

    setStatus(title, author, isRead) {
        var isPresent;
        this.books.forEach(function(book) {
            if (book.title === title && book.author === author) {
                book.isRead = isRead;
                isPresent = true;
            } 
        });
        if(!isPresent) {
            console.log("No " + title + " written by " + author + " is present in library")
        }
    }
}

class TestLibrary{
    static instance() {
       var books = [new Book("Sound and Fury", "William Faulkner", true), new Book("Finnegan's Funeral", "James Joyce", false), new Book("1984", "William Orwell", false)];
       return new Library(books);
    }
}

function myReadBooks(library) {
    library.books.forEach(function(book) {
        if (book.isRead) {
            console.log("Already read " + book.fullName);
        } else {
            console.log("You still need to read " + book.fullName);
        }
    })
}

let testLibrary = TestLibrary.instance();
testLibrary.addBook("Song of Ice and Flames", "George R.R. Martin");
testLibrary.setStatus("1984", "William Orwell", true);

myReadBooks(testLibrary);