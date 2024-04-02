import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => (
        <motion.div 
          variants={fadeIn("down", "spring", index * 0.1, 0.75)} 
          className='flex flex-col justify-between w-10 h-10 sm:w-28 md:h-28 hover:text-[#915EFF]' 
          key={technology.name}
        >
          <img src={technology.icon} className="hover:scale-110"/>
          <p className="text-center text-[8px] sm:text-[14px]">{technology.name}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
