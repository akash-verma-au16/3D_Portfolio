import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { linkedin } from "../assets";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  linkedIn,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-6 md:p-10 rounded-3xl xs:w-[320px] w-full relative cursor-pointer mx-auto'
    onClick={() => window.open(linkedIn, "_blank")}
  >
    <p className='text-white font-black text-[24px] md:text-[48px]'>"</p>

    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
      <div
        onClick={() => window.open(linkedIn, "_blank")}
        className='w-12 h-12 md:w-16 md:h-16 rounded-full flex justify-center items-center cursor-pointer'
      >
        <img
          src={linkedin}
          alt='source code'
          className='w-1/2 h-1/2 object-contain'
        />
      </div>
    </div>

    <div className='mt-1 flex flex-col'>
      <p className='text-white tracking-wider text-[14px] md:text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[14px] md:text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[10px] md:text-[12px]'>
            {designation} at {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-12 h-12 md:w-16 md:h-16 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[220px] sm:min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>What others say</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Testimonials</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-5 md:pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "testimonials");
