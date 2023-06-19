import React from 'react';
import NavbarLeft from './navbarItem/NavbarLeft';
import NavbarRight from './navbarItem/NavbarRight';

function Navbar() {
  return (
    <nav className="navbar" style={{ position: 'sticky', top: 0, zIndex: 999, background: '#ffffff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <div className="container flex items-center  justify-between    px-4 py-2">
        <NavbarLeft />
        <NavbarRight />
      </div>
    </nav>
  );
}

export default Navbar