import { useState } from 'react';
import React from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState(null);

  const apiURL = 'https://www.anapioficeandfire.com/api/books?pageSize=30';
function fetchBooks() {
  fetch(apiURL)
  .then(resp => resp.json())
  .then(data => {
    setBooks(data);
  })

}
  return (
    <div className="App">
      <h1>Game of Thrones Books</h1>
      <h2>Fetch a list from an API and display it</h2>

      <div>
        <button className="fetch-button" onClick={fetchBooks}>Fetch Data</button>
        <br />
      </div>

      <div className="books">
        {books &&
          books.map((book, index) => {
            const authors = book.authors.join(", ");

            return (
            <div className="book" key={index}>
            <h3>Book {index + 1}</h3>
            <h2>{book.name}</h2>

            <div className="info">
            <p>{authors}</p>
            <p>{book.numberOfPages} pages</p>
            <p>{book.country}</p>
            <p>{book.released}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}


export default App