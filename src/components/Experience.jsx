import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  const openInNewTab = (link) => window.open(link, "_blank");

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            onClick={() => openInNewTab(experience.company_link)}
            alt={experience.company_name}
            className='object-contain rounded-full overflow-hidden cursor-pointer'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-[#915EFF] text-[16px] font-semibold cursor-pointer'
          style={{ margin: 0 }}
          onClick={() => openInNewTab(experience.company_link)}
        >
          {experience.company_name}
        </p>
        {experience?.stack?.length > 0 && <ul className='mt-2 flex flex-wrap list-disc gap-2'>
          {experience.stack.map((el, i) => (
            <img
              key={`stack-${i}`}
              className='h-6 w-6'
              src={el}
            />
          ))}
        </ul>}
      </div>

      <ul className='mt-3 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
            {experience?.playstore && index === 0 && <span 
                className="mt-2 flex flex-row gap-1 items-center cursor-pointer"  
                onClick={() => openInNewTab(experience.playstore)}
              >
                <span className='hidden sm:flex text-secondary text-xs'>
                  Checkout the app on Playstore
                </span>
                <img src={experience.app} className="h-4 w-4 rounded-md"/>
                <span className='text-[#915EFF] text-xs font-semibold'>
                  LearnTube
                </span>
              </span>
            }
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
