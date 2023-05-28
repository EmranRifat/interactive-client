import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar ">
         <Link to="/" className=' font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-500  py-4 md:mb-0  flex '>
        Interactive Learning Platform
      </Link>
      <ul className=" flex justify-end 	justify-items-end ">
      
        <li className="nav-item  	">
          <a href="/" className="nav-link">Home</a>
        </li>
        <li className="nav-item  	">
          <a href="/category/01" className="nav-link">Tutorials</a>
        </li>
        
        <li className="nav-item">
          <a href="/login" className="nav-link">Login</a>
        </li>
        <li className="nav-item">
          <a href="/signup" className="nav-link">Signup</a>
        </li>
      </ul>
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="search-button">Search</button>
      </div>
    </nav>

    );
};

export default Header;