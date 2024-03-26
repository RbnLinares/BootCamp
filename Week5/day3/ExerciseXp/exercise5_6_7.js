////////////////// Exercise 5

// const container = document.getElementById("container");
// console.log(container);

// const listItems = document.querySelectorAll(".list li");
// listItems.forEach(item => {
//     if (item.textContent === "Pete") {
//         item.textContent = "Richard";
//     }
// });

// const secondList = document.querySelectorAll(".list")[1];
// secondList.removeChild(secondList.children[1]);

// const firstListItems = document.querySelectorAll(".list:first-child li");
// firstListItems.forEach(item => {
//     item.textContent = "Ruben"; 
// });

// const lists = document.querySelectorAll(".list");
// lists.forEach(list => {
//     list.classList.add("student_list");
// });

// document.querySelector(".list:first-child").classList.add("university", "attendance");

// container.style.backgroundColor = "lightblue";
// container.style.padding = "10px";

// listItems.forEach(item => {
//     if (item.textContent === "Dan") {
//         item.style.display = "none";
//     }
// });

// listItems.forEach(item => {
//     if (item.textContent === "Richard") {
//         item.style.border = "1px solid black";
//     }
// });

// document.body.style.fontSize = "18px";

// if (container.style.backgroundColor === "lightblue") {
//     const users = document.querySelectorAll(".list li");
//     const userNames = Array.from(users).map(user => user.textContent).join(" and ");
//     alert(`Hello ${userNames}`);
// }

///////////////////// Exercise 6

// const navBar = document.getElementById("navBar");
// navBar.setAttribute("id", "socialNetworkNavigation");

// const newLi = document.createElement("li");
// const textNode = document.createTextNode("Logout");
// newLi.appendChild(textNode);
// const ul = document.querySelector("ul");
// ul.appendChild(newLi);

// const firstLi = ul.firstElementChild;
// const lastLi = ul.lastElementChild;
// console.log(firstLi.textContent); // "Profile"
// console.log(lastLi.textContent); // "Logout"

/////////////////////////////Exercise 7

const allBooks = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        image: "https://example.com/harry-potter.jpg",
        alreadyRead: true
    },
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        image: "https://example.com/lord-of-the-rings.jpg",
        alreadyRead: false
    }
];

function renderBooks(books) {
    const listBooksSection = document.querySelector('.listBooks');
    books.forEach(book => {
        const bookDiv = document.createElement('div');
        const title = document.createElement('h2');
        const author = document.createElement('p');
        const image = document.createElement('img');

        title.textContent = book.title;
        author.textContent = `Written by ${book.author}`;
        image.src = book.image;
        image.style.width = '100px';

        if (book.alreadyRead) {
            bookDiv.style.color = 'red';
        }

        bookDiv.appendChild(title);
        bookDiv.appendChild(author);
        bookDiv.appendChild(image);
        listBooksSection.appendChild(bookDiv);
    });
}

renderBooks(allBooks);
