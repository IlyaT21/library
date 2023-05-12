// Initialize empty array
let library = []
// Get the div where the library whill be printed
let booksDiv = document.getElementById('books');

// Define Book 
class Book {
  constructor(title, author, pages, read) {
    this._title = title;
    this._author = author;
    this._pages = pages;
    this._read = read;
  }

  get title() {
    return this._title;
  }

  set title(newTitle) {
    this._title = newTitle;
  }

  get author() {
    return this._author;
  }

  set author(newAuthor) {
    this._author = newAuthor;
  }

  get pages() {
    return this._pages;
  }

  set pages(newPages) {
    this._pages = newPages;
  }

  get read() {
    return this._read;
  }

  set read(newRead) {
    this._read = newRead;
  }

  get info() {
    return `Book title: ${this._title}, author: ${this._author}, Pages: ${this._pages}, Read: ${this._read ? 'Yes' : 'No'}`;
  }
}

function addBook(event) {
	event.preventDefault(); // Prevent form submission

	// Retrieve values from the form fields
	const title = document.getElementById('title').value;
	const author = document.getElementById('author').value;
	const pages = document.getElementById('pages').value;
	const read = document.getElementById('read').checked;

	// Create a new Book object
	const newBook = new Book(title, author, pages, read);

	// Add the new Book object to the library array
	library.push(newBook);

	// Clear the form fields
	document.getElementById('title').value = '';
	document.getElementById('author').value = '';
	document.getElementById('pages').value = '';
	document.getElementById('read').checked = false;

	console.log('New book added:', newBook);
	console.log('Updated library:', library);
}

const bookForm = document.getElementById('bookForm');
bookForm.addEventListener('submit', addBook);

function displayLibrary() {
	library.forEach((book, index) => {
		console.log(book.info);
	});
}