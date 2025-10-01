import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Pizzas from './components/Pizzas';
import Burgers from './components/Burgers';
import Fries from './components/Fries';
import Pastas from './components/Pastas';
import './components/Navbar.css'
import './App.css'



const App = () => {
  return (
    <BrowserRouter>
      <nav className='Navbar'>
        <Link to="/">Fries</Link> 
        <Link to="/Burgers">Burgers</Link>
        <Link to="/Pastas">Pastas</Link> 
        <Link to="/Pizzas">Pizzas</Link>
      </nav>
     
    

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Fries />} />
        <Route path="/Burgers" element={<Burgers />} />
        <Route path="/Pastas" element={<Pastas />} />
        <Route path="/Pizzas" element={<Pizzas />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
