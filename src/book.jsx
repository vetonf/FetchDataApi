import React from 'react';

function Book({ book, index }) {
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
}

export default Book;
