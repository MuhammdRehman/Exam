import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/Header';
import Footer from './components/Footer';



const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home  />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
