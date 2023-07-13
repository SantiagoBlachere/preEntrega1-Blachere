
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import bookData from './components/books.js';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetail from './components/ItemDetail';

import Category from "./components/Category"


function App() {
  const [books, setBooks] = useState([]);
  

  useEffect(() => {
    setBooks(bookData);
  }, []);

  console.log(books);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer books={books} />} />
        <Route path="/genre/:genre" element={<Category books={books} />}></Route>
        <Route path="/book/:id" element={<ItemDetail />} />
      </Routes>  
    </BrowserRouter>
  )
}

export default App
