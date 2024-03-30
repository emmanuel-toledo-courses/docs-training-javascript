class Book {
  constructor(title, year, publisher, pages) {
    this.title = title;
    this.year = year;
    this.publisher = publisher;
    this.pages = pages;
    this.isReading = false;
  }

  read() {
    this.isReading = true;
    console.log("The book is beign reader from the class");
  }

  changePage(page) {
    if(this.isReading === true) {
        console.log(`Changing to page: ${page}`);
    } else {
        console.log('Please, start to read the book');
    }
  }
}

// Crear instancia de clase Book
const book = new Book("Las tortugas Ninja", 2008, "LAC", 100);
console.log(book);

book.read();
book.changePage(49);
