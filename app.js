let library = []
let booksDiv = document.getElementById('books');
const bookForm = document.getElementById('bookForm');
bookForm.addEventListener('submit', addBook);


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

	// Empty the div 
	booksDiv.innerHTML = ""

	// Populate "books" div 
	library.forEach((book, index) => {
		const bookInfo = document.createElement('p');
		// delete and toggle buttons binded with the bookid data
		bookInfo.innerHTML = `${book.info} | <button data-bookid="${index}">Delete</button> | <button data-bookid="${index}">Toggle Read Status</button>`;
		booksDiv.appendChild(bookInfo);
	});
	
	// Create buttons used for removing books from array
	// and changing the read status 
	const alterButtons = booksDiv.querySelectorAll('button[data-bookid]');
	alterButtons.forEach((button) => {
		button.addEventListener('click', (event) => {
			const bookId = event.target.dataset.bookid;
			if (button.textContent === 'Delete') {
				deleteBook(bookId);
				booksDiv.removeChild(event.target.parentElement);
			} else if (button.textContent === 'Toggle Read Status') {
				toggleReadStatus(bookId);
				const bookInfo = event.target.parentElement;
				const book = library[bookId];
				bookInfo.innerHTML = `${book.info} | <button data-bookid="${bookId}">Delete</button> | <button data-bookid="${bookId}">Toggle Read Status</button>`;
			}
		});
	});
	
	function deleteBook(index) {
		library.splice(index, 1);
	}

	function toggleReadStatus(index) {
		const book = library[index];
		book.read = !book.read;
	}
}