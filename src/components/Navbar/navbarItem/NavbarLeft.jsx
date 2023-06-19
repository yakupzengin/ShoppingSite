import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function NavbarLeft() {
  return (
    <div className="flex items-center justify-center">
      <Link to="/" className="link text-4xl font-bold text-gray-800 px-4 py-2 rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 transition duration-300" >
        Shopping Site
      </Link>
    </div>
  );
}

export default NavbarLeft;