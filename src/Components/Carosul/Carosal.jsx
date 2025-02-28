import React from 'react';
import techolympicslogo from '../../assets/images/techolympicslogo.png';

const Carosal = () => {
  return (
    <div className="w-full h-[150px] overflow-hidden bg-gradient-to-r from-[#f150cb] to-[#4223f1] py-4 mt-20 flex justify-center items-center">
      <div className="flex animate-scroll gap-10">
        {[...Array(20)].map((_, index) => (
          <div key={index} className="w-72 flex-shrink-0">
            <img src={techolympicslogo} alt="logo" className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carosal;
