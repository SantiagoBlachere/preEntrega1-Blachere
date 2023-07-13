import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import bookData from './books.js';

function ItemDetail() {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const selectedBook = bookData.find(book => book.id === parseInt(id));
    setBook(selectedBook);
  }, [id]);

  if (!book) {
    return <div>Loading...</div>; // Show a loading state while fetching the book details
  }

  return (
    <div className="cardContainer">
      <div key={book.id} className="card">
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <p>{book.description}</p>
      </div>
    </div>
  );
}

export default ItemDetail;
