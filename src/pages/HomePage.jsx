import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Project from '../components/Project';
import '../app.css';
import React from 'react';

export default function App() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <Project />
        <Footer />
      </div>
    </>
  );
}
