import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Layout/Header';
import Listing from './pages/Listing';
import Footer from './Layout/Footer';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Listing />
      <Footer />
    </div>
  );
}

export default App;
