import React from 'react';
import { FaGithub, FaInstagram, FaJava, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <a
            href="https://github.com/krish-0113"
            target="_blank"
            rel="noreferrer"
            className="bannerIcon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/krish__6268/"
            target="_blank"
            rel="noreferrer"
            className="bannerIcon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/krishna-jadhav-31760a28a/"
            target="_blank"
            rel="noreferrer"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <FaJava />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Media;
