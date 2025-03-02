import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logofx.png';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="navbar fixed top-0 left-0 w-full h-[4rem] bg-transparent  flex justify-between items-center z-50 px-6 md:px-10 transition-all duration-500 ease-in-out">
        
        <div className="logo w-32 h-9 md:w-52 md:h-14 mt-5">
          <img src={logo} alt="Logo" className="w-full h-full" />
        </div>

        <div className="hidden md:flex">
          <ul className="flex gap-2 me-3 text-white font-semibold tracking-wide">
            <Link to="/"><li className="mx-4 menu transition-all duration-300 hover:scale-105 hover:opacity-80">Home</li></Link>
            <li className="mx-2 menu transition-all duration-300 hover:scale-105 hover:opacity-80"><a href="#about">About</a></li>
            <li className="mx-2 menu transition-all duration-300 hover:scale-105 hover:opacity-80"><a href="#events">Events</a></li>
            <li className="mx-2 menu transition-all duration-300 hover:scale-105 hover:opacity-80"><a href="#venue">Venue</a></li>
            <li className="mx-2 menu transition-all duration-300 hover:scale-105 hover:opacity-80"><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="md:hidden text-white text-3xl cursor-pointer transition-all duration-300 hover:scale-110" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        <div className={`absolute top-14 right-0 w-[100%] mx-auto bg-white/10 backdrop-blur-md text-white rounded-lg flex flex-col items-center space-y-5 py-6 transition-transform duration-500 ease-in-out shadow-lg border border-white/20 ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-[100%] opacity-0'} md:hidden`}>
          <Link to="/" onClick={() => setMenuOpen(false)}><p className="text-lg menu transition-all duration-300 hover:scale-105 hover:opacity-80">Home</p></Link>
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-lg menu transition-all duration-300 hover:scale-105 hover:opacity-80">About</a>
          <a href="#events" onClick={() => setMenuOpen(false)} className="text-lg menu transition-all duration-300 hover:scale-105 hover:opacity-80">Events</a>
          <a href="#venue" onClick={() => setMenuOpen(false)} className="text-lg menu transition-all duration-300 hover:scale-105 hover:opacity-80">Venue</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-lg menu transition-all duration-300 hover:scale-105 hover:opacity-80">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
