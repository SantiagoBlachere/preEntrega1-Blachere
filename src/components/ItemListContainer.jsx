

import { Link } from 'react-router-dom';


function ItemListContainer( {books}) {
  

  return (
    <div className="cardContainer">
      
      {books.map(book => (
        <div key={book.id} className="card">
          <h3 className="card-title">{book.title}</h3>
          <p className="card-author">{book.author}</p>
          <p className="card-genre">{book.genre}</p>
          <Link className="card-link"to={`/book/${book.id}`}>Details</Link>
        </div>
      ))}
      
    </div>
  );
}

export default ItemListContainer;




 


