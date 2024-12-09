// Predefined Books
const books = [
    "BOOK1",
    "BOOK2",
    "BOOK3",
    "BOOK4",
    "BOOK5"
];

// Issued Books Data
const issuedBooks = [];

// Elements
const loginSection = document.getElementById("login-section");
const dashboardSection = document.getElementById("dashboard-section");
const booksList = document.getElementById("books-list");
const issueForm = document.getElementById("issue-form");
const issueMessage = document.getElementById("issue-message");
const issuedBooksTable = document.getElementById("issued-books-table").querySelector("tbody");

// Populate Books List
function displayBooks() {
    booksList.innerHTML = "";
    books.forEach((book) => {
        const li = document.createElement("li");
        li.textContent = book;
        booksList.appendChild(li);
    });
}

// Display Issued Books
function displayIssuedBooks() {
    issuedBooksTable.innerHTML = "";
    issuedBooks.forEach(({ bookName, studentId }) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${bookName}</td>
            <td>${studentId}</td>
        `;
        issuedBooksTable.appendChild(row);
    });
}

// Handle Login
document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation
    if (username === "admin" && password === "admin") {
        loginSection.style.display = "none";
        dashboardSection.style.display = "block";
        displayBooks();
    } else {
        alert("Invalid username or password!");
    }
});

// Handle Book Issue
issueForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const bookName = document.getElementById("book-name").value;
    const studentId = document.getElementById("student-id").value;

    if (books.includes(bookName)) {
        books.splice(books.indexOf(bookName), 1); // Remove issued book
        issuedBooks.push({ bookName, studentId }); // Add to issued books
        displayBooks();
        displayIssuedBooks();
        issueMessage.textContent = `Book "${bookName}" issued to Student ID: ${studentId}`;
        issueMessage.style.color = "green";
    } else {
        issueMessage.textContent = `Book "${bookName}" is not available!`;
        issueMessage.style.color = "red";
    }

    // Clear form fields
    issueForm.reset();
});
