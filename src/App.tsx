import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Layout/Header';
import Listing from './pages/Listing';
import { MOCK_PROJECTS } from './type/MockItems';

function App() {
  return (
    <>
    <Header />
    <Listing projects={MOCK_PROJECTS} />
    </>
  );
}

export default App;
