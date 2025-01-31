import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Secured second position in a 24-hour hackathon at Shri Guru Gobind Singhji Institute of Engineering and Technology, Nanded."
            subTitle="A SOCIAL MEDIA PLATFORM FOR MY COLLLAGE."
            result="Success"
            des="A Developed a web application for seamless interaction between students and teachers, 
                    featuring personal and anonymous accounts for students to share ideas and feedback discreetly.
                     Teachers and admins can post updates and announcements, streamlining communication and fostering academic discussions.!"
          />
          <ResumeCard
            title="Secured second position in a 24-hour hackathon at Shri Sant Gajanan Maharaj
                  College of Engineering, Shegaon"
            subTitle="EduBridge: Quality Education for Rural Areas.."
            result="Success"
            des="Developed a solution to bridge the education gap in rural regions,
                focusing on the front-end using React.js, JavaScript, HTML, and CSS. The platform features interactive learning modules,
                resource-sharing tools for students and educators, and collaboration features for virtual classrooms, ensuring accessible and quality education for all."
          />
          <ResumeCard
            title="Participated in a 5-day Flutter workshop at Shri Guru Gobind Singhji Institute of Engineering and Technology, Nanded, and received a certificate."
            subTitle="Earned a certificate for participating in a 5-day Flutter workshop."
            result="Success"
            des="The workshop focused on the basics of Dart and Flutter, covering essential concepts such as widget structure, state management, and UI design. As part of the hands-on learning experience, developed a calculator mobile application, gaining practical
                  skills in building responsive and functional cross-platform applications."
          />
        </div>
      </div>
      {/* <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Achievement;
