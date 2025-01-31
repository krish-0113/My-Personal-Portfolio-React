import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,atm, elearning, doanation, social ,} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title=' A SOCIAL MEDIA PLATFORM FOR MY COLLLAGE'
          des=" Developed a web application for seamless interaction between students and teachers, 
                featuring personal and anonymous accounts for students to share ideas and feedback discreetly.
                Teachers and admins can post updates and announcements, streamlining communication and fostering academic discussions.!"
          src={social}
        />
        <ProjectsCard
          title="E-Learning Platform Development"
          des=" Developed a comprehensive e-learning platform at Skillmate Technologies, enabling seamless course management and
                     user interaction. Leveraged React.js, Node.js, Express.js, and MongoDB to build scalable, user-friendly features like course enrollment, 
                     progress tracking, and interactive dashboards.!"
          src={elearning}
        />
        <ProjectsCard
          title="Donation Platform (2023)"
          des=" Created a secure donation platform supporting multiple methods, including cryptocurrency,
                with API integration. Ensured data security and integrity using SQL for user data management.
               Designed categorized donation options (e.g., food, clothes, books) to streamline assistance for specific needs.
               Technologies: HTML, CSS, JavaScript"
          src={doanation}
        />
        <ProjectsCard
          title="Static Malware Analyzer (2024)"
          des=" Developed a system for detecting malware using object-oriented principles to analyze multiple
                     inputs for security threats. Integrated machine learning models, achieving 75% detection accuracy. Designed a 
                     scalable architecture with APIs and collaborated with cross-functional teams to enhance performance and security.  
                     Technologies: Java, Python, React.js"
          src={projectThree}
        />
        <ProjectsCard
          title="ATM Simulation System"
          des="A Java-based application that simulates essential ATM functionalities like checking balances, updating PINs,
           and withdrawing/depositing money. Users are assigned a unique ATM number with a default PIN, which must be changed. 
           The system uses OOP concepts, HashMap for user data, and ensures secure transactions with exception handling and ATM cash management. It offers a menu-driven interface for a seamless and secure banking experience."
          src={atm}
        />
        {/* <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        /> */}
      </div>
    </section>
  );
}

export default Projects