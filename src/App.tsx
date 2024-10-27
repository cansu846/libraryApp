import React from 'react';
import './App.css';
import Navbar from './layouts/NavbarandFooter/Navbar';
import ExploreTopBooks from './layouts/HomePage/components/ExploreTopBooks';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carousel from './layouts/HomePage/components/Carousel';
import ReturnBook from './layouts/HomePage/components/ReturnBook';
import { Heros } from './layouts/HomePage/components/Heros';
import { LibraryServices } from './layouts/HomePage/components/LibraryService';
import { Footer } from './layouts/NavbarandFooter/Footer';
import HomePage from './layouts/HomePage/HomePage';
import SearchBooksPage from './layouts/SearchBooksPage/SearchBooksPage';
import { SearchBook } from './layouts/SearchBooksPage/components/SearchBook';
import BookCheckoutPage from './layouts/BookCheckoutPage/BookCheckoutPage';

export default function App() {
  return (
    <div>
      <Navbar />
      <div className='flex-grow-1'>
        <Routes >
          <Route path='/' element={<HomePage />} />

          <Route path='/home' element={<HomePage />} />
          <Route path='/search' element={<SearchBooksPage />} />
          <Route path='/checkout/:book_id' element={<BookCheckoutPage />} />

        </Routes>
      </div>
      <Footer />

    </div>

  );
}

