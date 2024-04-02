import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { certificates } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CertificateCard = ({index, point}) => {
  const openInNewTab = (link) => window.open(link, "_blank");

  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)} 
      className='bg-tertiary rounded-2xl'
    >
          <img
            src={point.icon}
            alt='project_image'
            className='w-[180px] h-[150px] object-cover rounded-2xl cursor-pointer hover:scale-125'
            onClick={() => openInNewTab(point.url)}
          />
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Skills and Competencies</p>
        <h2 className={`${styles.sectionHeadText}`}>Certificates</h2>
      </motion.div>

    <div className="flex flex-col items-center sm:items-start mx-auto">
      <div className='mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-7'>
        {certificates.map((el, i) => (
          <CertificateCard key={`certificate-${i}`} index={i} point={el} />
        ))}
      </div>
    </div>
    </>
  );
};

export default SectionWrapper(Certificates, "certificates");
