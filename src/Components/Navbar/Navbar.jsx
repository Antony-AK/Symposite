import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logofx.png';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div
        className={`navbar fixed top-0 left-0 w-full h-[4rem] flex justify-between items-center z-50 px-6 md:px-10 transition-all duration-500 ease-in-out 
          ${isScrolled ? 'bg-black/90' : 'bg-transparent'}`}
      >
        <div className="logo w-32 h-9 md:w-52 md:h-14 mt-5" data-aos="fade-right" data-aos-duration="1000">
          <img src={logo} alt="Logo" className="w-full h-full" />
        </div>

        <div className="hidden md:flex">
          <ul className="flex gap-2 me-3 text-white font-semibold tracking-wide">
            <Link to="/">
              <li className="mx-4 menu transition-all duration-300 hover:scale-105 hover:opacity-80" data-aos="fade-up" data-aos-duration="800">
                Home
              </li>
            </Link>
            <li className="mx-2 menu transition-all duration-300 hover:scale-105 hover:opacity-80" data-aos="fade-up" data-aos-duration="900">
              <a href="#about">About</a>
            </li>
            <li className="mx-2 menu transition-all duration-300 hover:scale-105 hover:opacity-80" data-aos="fade-up" data-aos-duration="1000">
              <a href="#events">Events</a>
            </li>
            <li className="mx-2 menu transition-all duration-300 hover:scale-105 hover:opacity-80" data-aos="fade-up" data-aos-duration="1100">
              <a href="#venue">Venue</a>
            </li>
            <li className="mx-2 menu transition-all duration-300 hover:scale-105 hover:opacity-80" data-aos="fade-up" data-aos-duration="1200">
              <a href="#contact">Contact</a>
            </li>
            <button
              className="relative overflow-hidden bg-purple-500/70 text-white px-5 py-2 font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-95 hover:shadow-xl"
            >
              <a
                href="https://forms.gle/FJ8RrP9WGk9UYZrz8"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 font-bold"
              >
                Register
              </a>
              <span className="absolute -top-2 inset-0 left-[-10%] w-10 h-[140%] bg-gradient-to-r from-transparent via-white/60 to-transparent translate-x-[-100%] rotate-12 animate-shine"></span>
            </button>

          </ul>
        </div>

        <div className="md:hidden text-white text-3xl mt-2 cursor-pointer transition-all duration-300 hover:scale-110" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        <div
          className={`absolute top-14 right-0 w-[100%] mx-auto bg-white/10 backdrop-blur-md text-white rounded-lg flex flex-col items-center space-y-5 py-6 transition-transform duration-500 ease-in-out shadow-lg border border-white/20 
          ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-[100%] opacity-0'} md:hidden`}
        >
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <p className="text-lg menu transition-all duration-300 hover:scale-105 hover:opacity-80">Home</p>
          </Link>
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-lg menu transition-all duration-300 hover:scale-105 hover:opacity-80">
            About
          </a>
          <a href="#events" onClick={() => setMenuOpen(false)} className="text-lg menu transition-all duration-300 hover:scale-105 hover:opacity-80">
            Events
          </a>
          <a href="#venue" onClick={() => setMenuOpen(false)} className="text-lg menu transition-all duration-300 hover:scale-105 hover:opacity-80">
            Venue
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-lg menu transition-all duration-300 hover:scale-105 hover:opacity-80">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
