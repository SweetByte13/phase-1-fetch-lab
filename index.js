


function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((json) => {
      renderBooks(json);

});
}


function renderBooks(books) {   
  // creating a variable main, that variable is pulling from doc the Dom element 'main'
  const main = document.querySelector('main');
  //for each elemnt of book do the following
  books.forEach(book => {
  //making a variable h2, which is using doc and creating the Dom element 'h2'
    const h2 = document.createElement('h2');
  //setting the variable h2 property innerHMTL equal to the name of the book 
    h2.innerHTML = book.name;
  //h2 is being appended in main
    main.appendChild(h2);
  });

}

document.addEventListener('DOMContentLoaded', function () {
  fetchBooks();
});
