import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import paperpres from '../../assets/images/fusionpitch.jpg';
import ideas from '../../assets/images/idea.jpg';
import datathon from '../../assets/images/datathon.png';
import quiz from '../../assets/images/quiz.jpeg.jpg';
import codewars from '../../assets/images/code-wars.png';
import connections from '../../assets/images/connections.jpg';
import ipl from '../../assets/images/IPL.jpeg.jpg';
import desinathon from '../../assets/images/desinathon.jpg';

const events = [
  { id: 1, title: "Code Wars", slug: "code-wars", image: codewars },
  { id: 2, title: "Paper Presentation", slug: "paper-presentation", image: paperpres },
  { id: 3, title: "Datathon", slug: "datathon", image: datathon },
  { id: 4, title: "Tech Quiz", slug: "tech-quiz", image: quiz },
  { id: 5, title: "Connexions", slug: "connexions", image: connections },
  { id: 6, title: "Fusion Pitch", slug: "fusion-pitch", image: ideas },
  { id: 7, title: "Investment Premier League (IPL)", slug: "ipl", image: ipl },
  { id: 8, title: "Designathon", slug: "designathon", image: desinathon },
];

const EventsSection = () => {
  return (
    <section className="mt-24" id="events">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-16 tracking-wide">Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 px-6">
          {events.map((event) => (
            <Link to={`/events/${event.slug}`} key={event.id}>
            <motion.div
                whileHover={{ scale: 1.05, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-white/10 backdrop-blur-lg p-6 rounded-2xl text-white cursor-pointer transition-all overflow-hidden shadow-lg border border-gray-600 hover:border-[#fd68da] hover:shadow-[#fd68da]"
              >
                <div className="relative overflow-hidden rounded-xl" data-aos="flip-right" data-aos-duration="1200">
                  <img src={event.image} alt={event.title} className="w-full h-44 object-cover rounded-xl transition-transform duration-500 hover:scale-110" />
                  <div className="absolute inset-x-0 bottom-0 bg-black/60 text-white text-center py-2 text-lg font-semibold">{event.title}</div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#fd68da] to-[#3808c9] animate-pulse" />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;