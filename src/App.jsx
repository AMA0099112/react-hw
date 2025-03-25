import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router'
import Book from './pages/Book'
import Category from './pages/Category'
import { HelmetProvider } from 'react-helmet-async'


function App() {
  return (
    <HelmetProvider context={{}} >
      <BrowserRouter>
        <Routes>
          {/*對應網站首頁"/"，會渲染Home*/}
          <Route path='/' element={<Home />} />
          <Route path='books'>
            {/* :是可改變動態變數 */}
            <Route path="category/:categoryName" element={<Category />} />
            <Route path='ID/:bookID' element={<Book />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
