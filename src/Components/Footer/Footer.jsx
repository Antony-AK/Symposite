import React, { useState, useEffect } from "react";
import techolympicslogo from "../../assets/images/techolympicslogo.png";

const Footer = () => {
  const eventDate = new Date("2025-03-26T09:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(eventDate - new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(eventDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (ms) => {
    if (ms <= 0) return "🎉 Event Started! 🎉";
    let days = Math.floor(ms / (1000 * 60 * 60 * 24));
    let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((ms / (1000 * 60)) % 60);
    let seconds = Math.floor((ms / 1000) % 60);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <footer className="relative bg-gradient-to-r from-[#fd68da] to-[#3808c9] text-white pt-10 pb-6 overflow-hidden mt-14">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full">
          <path
            fill="url(#footerGradient)"
            fillOpacity="1"
            d="M0,64L80,80C160,96,320,128,480,138.7C640,149,800,139,960,133.3C1120,128,1280,128,1360,128L1440,128V320H0Z"
          ></path>
          <defs>
            <linearGradient id="footerGradient" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#ff00ff" />
              <stop stopColor="#007bff" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-16 relative z-10 text-center">
        <div>
          <div className="w-48 h-20 font-bold mx-auto">
            <img src={techolympicslogo} alt="Tech Olympics Logo" />
          </div>
          <p className="text-gray-300 mt-1">Innovate. Compete. Conquer. – The Future Begins Here!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div>
            <h3 className="text-xl font-semibold">Explore</h3>
            <ul className="mt-3 space-x-4 ms-10 text-lg font-medium flex">
              <li><a href="#" className="hover:text-yellow-400 transition-all">About</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-all">Events</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-all">Venue</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-all">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex justify-center space-x-4 mt-3">
              <a href="#" className="hover:text-blue-400"><i className="fab fa-facebook-f text-2xl"></i></a>
              <a href="#" className="hover:text-black"><i className="fab fa-x-twitter text-2xl"></i></a>
              <a href="#" className="hover:text-pink-500"><i className="fab fa-instagram text-2xl"></i></a>
              <a href="#" className="hover:text-blue-600"><i className="fab fa-linkedin-in text-2xl"></i></a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Event Starts In</h3>
            <div className="text-3xl font-bold mt-3" id="countdown">
              {formatTime(timeLeft)}
            </div>
          </div>
        </div>

        <div className="text-gray-300 mt-6 border-t border-gray-400 pt-4">
          &copy; {new Date().getFullYear()} Tech Olympics'25. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
