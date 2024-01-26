import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Layout/Header';
import Listing from './pages/Listing';
import Footer from './Layout/Footer';

function App() {
  return (
    <div>
      <Header />
      <Listing />
      <Footer />
    </div>
  );
}

export default App;
