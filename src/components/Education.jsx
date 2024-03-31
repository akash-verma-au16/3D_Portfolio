import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { education } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const EducationCard = ({ index, point }) => {
  const isOdd = (index) => index % 2 === 1;
  
  return (
        <motion.div 
          variants={fadeIn(isOdd(index) ? "right" : "left", "spring", index * 0.7, 0.75)}
          className="flex items-center gap-6 md:gap-8 mb-4"
        >
          <img
            src={point.logo} 
            alt="college" 
            className='green-pink-gradient p-[1px] rounded overflow-hidden cursor-pointer min-w-16 w-16 h-16 md:w-28 md:h-28'
          />
          <div className="flex flex-col justify-start">
            <h2 className={`text-white text-xs sm:text-sm md:text-[16px] font-semibold mb-1`}>
              {point.degree}
            </h2>
            <h2 className={`text-[#915EFF] text-sm sm:text-md md:text-[20px] font-bold mb-1`}>
              {point.major}
            </h2>
            <p className={`text-secondary text-[8px] sm:text-xs md:text-lg`}>
              {point.college}
            </p>
            <p className={`text-secondary text-[8px] md:text-sm`}>
              {point.duration}
            </p>
          </div>
        </motion.div>
  ) 
}

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Learning Journey
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education
        </h2>
      </motion.div>

      <div className='mt-10 flex items-center'>
        <div className="flex flex-col mx-auto">
          {education.map((el, i) => (
            <EducationCard key={`education-${i}`} index={i} point={el}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
