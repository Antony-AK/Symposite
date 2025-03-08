import React, { useRef, useState } from 'react';

const aboutdata = [
  {
    id: 1,
    description: 'Our last symposium saw 500+ participants showcasing their skills across tech and non-tech events, turning ideas into impact. From AI challenges to creative problem-solving, the energy was unstoppable.',
  },
  {
    id: 2,
    description: 'Beyond competitions, it’s a hub of learning and inspiration. With industry experts, workshops, and tech talks, attendees gain insights that shape their future while networking with like-minded innovators.',
  },
  {
    id: 3,
    description: 'Whether you’re into coding, strategy, or creativity, there’s something for everyone. It’s not just about winning—it’s about challenging yourself, exploring new ideas, and having fun.',
  },
  {
    id: 4,
    description: 'This year, we’re going even bigger! Expect thrilling competitions, greater rewards, and an electrifying atmosphere that fuels your passion. Get ready for an unforgettable experience!',
  }
];

const About = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true); 

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div>
      <div className="about w-full h-full mt-24" id="about">
        <div className="heading text-white text-center text-4xl font-bold font-main tracking-wider mb-16" data-aos="fade-up" data-aos-duration="1200">
          About
        </div>
        <div className="content-box relative h-[70vh] w-[80%] flex flex-wrap gap-x-20 gap-y-10 justify-center items-center mx-auto">
          {aboutdata.map((data, index) => (
            <div key={index} className="about-box relative w-96 h-56 bg-darkblue rounded-lg flex justify-center items-center text-center text-main font-medium text-white p-5" data-aos="flip-up" data-aos-duration="1000">
              <p className="text-base sm:text-lg font-body z-30">{data.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="sympovideo w-[90%] md:w-[70%] md:h-[80vh] h-[28vh] mx-auto mt-[540px] md:mt-20 bg-white rounded-lg p-[8px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF3CAC] to-[#3808c9] rounded-lg"></div>

        <div className="relative bg-white h-full w-full rounded-lg overflow-hidden" data-aos="zoom-up-out" data-aos-duration="1000">
          <video 
            ref={videoRef} 
            className="w-full h-full object-cover rounded-lg" 
            autoPlay 
            loop 
            muted={isMuted} 
            preload="metadata"
            playsInline 
            src="/video/Sympo 25.mp4">
          </video>

          <button 
            onClick={toggleMute} 
            className="absolute bottom-5 right-5 bg-black bg-opacity-10 text-white px-4 py-2 rounded-lg text-sm md:text-lg transition-transform hover:scale-105"
            aria-label={isMuted ? "Unmute video" : "Mute video"}>
            {isMuted ? "🔇" : "🔊"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
