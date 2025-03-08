import React from 'react';
import sympologo1 from '../../assets/images/1.png';
import CountdownTimer from '../CountDownTimer/CountDownTimer';

const Header = () => {
  return (
    <div className="header relative w-full h-[800px] flex justify-center items-center" id="home">
      
      {/* Background GIF */}
      <img
        src="https://res.cloudinary.com/dgrkxzvn1/video/upload/ac_none,f_gif,q_auto/v1741449372/5453622-uhd_3840_2160_24fps_kizesl.gif"
        alt="Background animation"
        className="absolute w-full h-full object-cover"
      />

      {/* Logo */}
      <div 
        className="sympologo absolute w-48 h-48 md:w-72 md:h-72 z-20 rounded-full -mt-[24rem] md:-mt-[25rem]" 
        data-aos="zoom-in" data-aos-duration="1000"
      >
        <img src={sympologo1} alt="Symposium Logo" className="rounded-full w-full h-full" />
      </div>

      {/* Title */}
      <div 
        className="title absolute z-20 text-center -mt-[11rem] md:-mt-[6rem] text-yellow-400 font-bold font-logo"
        data-aos="zoom-in" data-aos-duration="1200"
      >
        <h1 className="text-2xl md:text-3xl">TECH OLYMPICS’25</h1>
      </div>

      {/* Event Details */}
      <div 
        className="event-details absolute z-20 text-center -mt-[1rem] md:mt-[4rem] px-4"
        data-aos="zoom-in" data-aos-duration="1400"
      >
        <h1 className="text-white text-2xl md:text-4xl font-bold leading-snug">
          4th NATIONAL LEVEL TECHNICAL SYMPOSIUM
        </h1>
        <p className="text-white text-base md:text-lg mt-2 md:mt-5">
          Department of Artificial Intelligence and Data Science
        </p>
      </div>

      {/* Countdown Timer */}
      <div 
        data-aos="flip-down" data-aos-duration="1700"
        className="countdownbox w-[85%] md:w-[65%] h-[100px] md:h-[120px] rounded-sm bg-black/30 flex justify-center items-center absolute mt-[14rem] md:mt-[20rem] 
        shadow-[-5px_5px_0px_rgba(240,46,170,0.4),5px_5px_0px_rgba(240,46,170,0.4),-10px_10px_0px_rgba(240,46,170,0.3),10px_10px_0px_rgba(240,46,170,0.3),-15px_15px_0px_rgba(240,46,170,0.2),15px_15px_0px_rgba(240,46,170,0.2),-20px_20px_0px_rgba(240,46,170,0.1),20px_20px_0px_rgba(240,46,170,0.1),-25px_25px_0px_rgba(240,46,170,0.05),25px_25px_0px_rgba(240,46,170,0.05)]"
      >
        <CountdownTimer />
      </div>

      {/* Register Button */}
      <div className="group-button absolute bottom-36 sm:hidden">
        <button className="relative overflow-hidden bg-purple-500/70 text-white px-5 py-2 font-semibold rounded-sm shadow-lg transition-all duration-300 hover:scale-95 hover:shadow-xl">
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
      </div>

    </div>
  );
};

export default Header;
