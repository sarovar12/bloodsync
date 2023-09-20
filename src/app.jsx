import React from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog';
export default function App() {
  return (
    <>
      <BrowserRouter basename="/bloodsync">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path='/blog' element={<Blog/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
