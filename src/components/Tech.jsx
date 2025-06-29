import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";

const TechCard = ({ technology, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.75)}
    className='w-28 h-28'
  >
    <div className='bg-tertiary rounded-xl p-4 flex flex-col items-center justify-center h-full border border-gray-700 hover:border-purple-500 transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105'>
      <div className='w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
        <img
          src={technology.icon}
          alt={technology.name}
          className='w-full h-full object-contain filter group-hover:brightness-110'
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div 
          className='w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg hidden items-center justify-center text-white font-bold text-xs'
        >
          {technology.name.charAt(0)}
        </div>
      </div>
      <p className='text-white text-xs text-center mt-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        {technology.name}
      </p>
    </div>
  </motion.div>
);

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className='text-secondary text-[14px] uppercase tracking-wider'>
          Technologies I Work With
        </p>
        <h2 className='text-white font-black md:text-[40px] sm:text-[30px] xs:text-[20px] text-[24px] mt-2'>
          Tech Stack.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology, index) => (
          <TechCard key={technology.name} technology={technology} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
