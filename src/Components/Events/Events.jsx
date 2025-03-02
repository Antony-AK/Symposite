import React from "react";
import { motion } from "framer-motion";
import tech from '../../assets/images/tech.jpg';
import paperpres from '../../assets/images/paperpres.jpg';
import datathon from '../../assets/images/datathon.png';
import tresurehunt from '../../assets/images/treasure_hunt.jpg';
import addsup from '../../assets/images/addsup.jfif.jpg';
import poster from '../../assets/images/Tech (2).png';
import projectexpo from '../../assets/images/project_expo.png';
import desinathon from '../../assets/images/desinathon.jpg';

const events = [
  { id: 1, title: "Tech Connections", image: tech },
  { id: 2, title: "Paper Presentation", image: paperpres },
  { id: 3, title: "Datathon", image: datathon },
  { id: 4, title: "Tech Treasure Hunt", image: tresurehunt },
  { id: 5, title: "Addsup", image: addsup },
  { id: 6, title: "Poster Making", image: poster },
  { id: 7, title: "Project Expo", image: projectexpo },
  { id: 8, title: "Designathon", image: desinathon },
];

const EventsSection = () => {
  return (
    <section className="mt-24">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-16 tracking-wide">Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 px-6">
          {events.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ scale: 1.05, rotate: 3 }}
              whileTap={{ scale: 0.65 }}
              className="relative bg-white/10 backdrop-blur-lg p-6 rounded-2xl text-white cursor-pointer transition-all overflow-hidden shadow-lg border border-gray-600 hover:border-[#fd68da] hover:shadow-[#fd68da]"
              onClick={() => window.location.href = `/events/${event.id}`}
            >
              <div className="relative overflow-hidden rounded-xl">
                <img src={event.image} alt={event.title} className="w-full h-44 object-cover rounded-xl transition-transform duration-500 hover:scale-110" />
                <div className="absolute inset-x-0 bottom-0 bg-black/60 text-white text-center py-2 text-lg font-semibold">{event.title}</div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#fd68da] to-[#3808c9] animate-pulse" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
