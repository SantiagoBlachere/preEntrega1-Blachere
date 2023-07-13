import React, { useEffect, useState } from 'react';
import bookData from './books.js';
import { Link } from 'react-router-dom';

function ItemListContainer() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(bookData);
  }, []);

  console.log(books);

  return (
    <div className="cardContainer">
      {books.map(book => (
        <div key={book.id} className="card">
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <Link to={`/book/${book.id}`}>Details</Link>
          
        </div>
      ))}
    </div>
  );
}

export default ItemListContainer;
