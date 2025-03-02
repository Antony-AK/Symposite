import React from 'react';
import v1 from '../../assets/images/headerv1.mp4';
import sympologo1 from '../../assets/images/1.png';
import CountdownTimer from '../CountDownTimer/CountDownTimer';

const Header = () => {
  return (
    <div>
      <div className="header relative w-full h-[700px] flex justify-center items-center" id="home">
        <video autoPlay muted loop src={v1} className="w-full h-full object-cover"></video>

        <div className="sympologo absolute w-48 h-48 md:w-72 md:h-72 z-20 rounded-full -mt-[20rem] md:-mt-[19rem]">
          <img src={sympologo1} alt="" className="rounded-full w-full h-full" />
        </div>

        <div className="title absolute z-20 text-center -mt-[7rem] md:mt-[2rem] text-yellow-400 font-bold font-logo">
          <h1 className="text-2xl md:text-3xl">TECH OLYMPICS’25</h1>
        </div>

        <div className="event-details absolute z-20 text-center mt-[4rem] md:mt-[12rem] px-4">
          <h1 className="text-white text-2xl md:text-4xl font-bold leading-snug">
            4th NATIONAL LEVEL TECHNICAL SYMPOSIUM
          </h1>
          <p className="text-white text-base md:text-lg mt-3 md:mt-5">
            Department of Artificial Intelligence and Data Science
          </p>
        </div>

        <div className="countdownbox w-[90%] md:w-[70%] h-[100px] md:h-[120px] rounded-sm bg-white flex justify-center items-center absolute mt-[20rem] md:mt-[28rem] shadow-[-5px_5px_0px_rgba(240,46,170,0.4),5px_5px_0px_rgba(240,46,170,0.4),-10px_10px_0px_rgba(240,46,170,0.3),10px_10px_0px_rgba(240,46,170,0.3),-15px_15px_0px_rgba(240,46,170,0.2),15px_15px_0px_rgba(240,46,170,0.2),-20px_20px_0px_rgba(240,46,170,0.1),20px_20px_0px_rgba(240,46,170,0.1),-25px_25px_0px_rgba(240,46,170,0.05),25px_25px_0px_rgba(240,46,170,0.05)]">
          <CountdownTimer />
        </div>
      </div>
    </div>
  );
};

export default Header;
