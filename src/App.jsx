import React, { useState, useEffect } from 'react';
import './App.css';
import Book from './book.jsx';

function App() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiURL = 'https://www.anapioficeandfire.com/api/books?pageSize=30';

  const fetchBooks = async () => {
    try {
      setLoading(true); 
      const response = await fetch(apiURL);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setBooks(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching books:', error);
      setError('Error fetching books. Please try again later.');
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchBooks();
    };

    fetchData();
  }, []); 

  return (
    <div className="App">
      <h1>Game of Thrones Books</h1>
      <h2>Fetch a list from an API and display it</h2>

      <div>
        <button className="fetch-button" onClick={fetchBooks} disabled={loading}>
          Fetch Data
        </button>
        <br />
      </div>

      <div className="books">
        {books &&
          books.map((book, index) => (
            <Book key={index} book={book} index={index} /> 
          ))}
      </div>
    </div>
  );
}

export default App;
