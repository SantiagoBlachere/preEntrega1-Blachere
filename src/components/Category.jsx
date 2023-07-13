import React from 'react';
import { useParams } from 'react-router-dom';

function Category({ books }) {
  const { genre } = useParams();
  const filteredBooks = books.filter(
    book => book.genre.toLowerCase() === genre.toLowerCase()
  );

  return (
    <div className="cardContainer">
      {filteredBooks.map(book => (
        <div key={book.id} className="card">
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>{book.genre}</p>
          <p>{book.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Category;