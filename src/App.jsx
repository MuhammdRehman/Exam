import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/searchbar';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/header' element={<Navbar/>}/>
          <Route path='/footer' element={<Footer/>}/>
          <Route path='/searchbar' element={<SearchBar/>}/>
          
        </Routes>
      </Router>
    </>
  );
};

export default App;
