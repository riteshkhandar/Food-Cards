   import React from 'react';
   import './Navbar.css';
   
   const Navbar = () => {
     return (
        <nav className='Navbar'>
        <Link to="/">Pizzas</Link> |{" "}
        <Link to="/Burgers">Burgers</Link> |{" "}
        <Link to="/Pastas">Pastas</Link> |{" "}
        <Link to="/Fries">Fries</Link>
      </nav>
     )
   }
   
   export default Navbar