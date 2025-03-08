import { motion } from "framer-motion";
import { useMemo } from "react";

const teamMembers = [
  { name: "Antony Kavin", role: "FullStack Developer" },
  { name: "Stephen Raj", role: "React Developer" },
  { name: "Nizamudeen", role: "UI/UX Designer" },
  { name: "Selvan", role: "Editor" },
];

export default function OurTeam() {
  const teamList = useMemo(
    () =>
      teamMembers.map((member, index) => (
        <motion.div
          key={index}
          className="relative p-4 bg-gray-800 rounded-xl shadow-lg overflow-hidden w-60 h-20 text-center cursor-pointer hover:bg-gray-700 transition"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          whileHover={{ scale: 1.05 }}
          style={{ willChange: "transform, opacity" }} 
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#fd68da] to-[#3808c9] opacity-70"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ willChange: "transform" }} 
          />
          <h3 className="text-xl font-semibold relative z-10">{member.name}</h3>
          <p className="text-sm text-gray-300 relative z-10">{member.role}</p>
        </motion.div>
      )),
    []
  );

  return (
    <div className="relative bg-gray-900 py-12 w-[80%] md:w-[85%] mx-auto md:h-[180px] text-white text-center mt-14 rounded-2xl shadow-2xl">
      <h2 className="text-lg md:text-2xl font-bold mb-6 -mt-7 text-gradient">
        Design and Development Team
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-8">
        {teamList}
      </div>
    </div>
  );
}
