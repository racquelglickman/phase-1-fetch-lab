// let allData;

function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  let url = 'https://anapioficeandfire.com/api/books'
  return fetch(url).then((res) => {
            // console.log('Res', res)
            return res.json()
        }).then((data) => {
          // console.log(data)
          // allData = data;
          renderBooks(data);
          console.log('done')
      })
  }
console.log('first')
console.log('second')

  


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}


document.addEventListener('DOMContentLoaded', function() {
  console.log('before fetchbooks')
  fetchBooks();
  console.log('after fetch books')
});
