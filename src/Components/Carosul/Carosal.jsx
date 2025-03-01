import React from 'react';
import techolympicslogo from '../../assets/images/techolympicslogo.png';

const Carosal = () => {
  return (
    <div className="w-full h-[150px] overflow-hidden bg-gradient-to-r from-[#FF3CAC] to-[#3808c9] py-4 mt-20 flex items-center">
      <div className="flex min-w-max animate-scroll">
        {[...Array(20)].map((_, index) => (
          <div key={index} className="w-80 flex-shrink-0 mx-5">
            <img src={techolympicslogo} alt="logo" className="w-full h-auto" />
          </div>
        ))}
        {[...Array(20)].map((_, index) => (
          <div key={`dup-${index}`} className="w-72 flex-shrink-0 mx-5">
            <img src={techolympicslogo} alt="logo" className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carosal;
