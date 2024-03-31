import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => (
        <motion.div variants={fadeIn("down", "spring", index * 0.1, 0.75)} className='flex flex-col justify-between w-28 h-28 hover:text-[#915EFF]' key={technology.name}>
          <img src={technology.icon} className="hover:scale-110"/>
          <p className="text-center">{technology.name}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
