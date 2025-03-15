import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../../src/assets/jd@logo.png";
import { useState } from "react";

const HeroSection = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6  lg:px-12">
      <h1 className="text-5xl sm:text-6xl arch lg:text-[8rem] font-extrabold text-center tracking-wide mb-4 lg:mb-6">
        I'm
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "} Jayadeep
        </span>
      </h1>
      <p
        onMouseEnter={() => setHidden(false)}
        onMouseLeave={() => setHidden(true)}
        className="mt-4 lg:mt-8 text-lg lg:text-xl text-center text-neutral-500 hover:text-white transition-all duration-300 max-w-4xl">
        {hidden ? <span>Web Developer</span> : <span>Nothing Over Here</span>}
      </p>

      {/* Icons at the bottom */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8">
        <a href="https://github.com/jayadeep11/" target="_blank" className="text-white transition-all hover:text-orange-500">
          <FaGithub className="w-8 h-8 lg:w-10 lg:h-10" />
        </a>
        <a href="https://www.linkedin.com/in/jayadeep11/" target="_blank" className="text-white transition-all hover:text-orange-500">
          <FaLinkedin className="w-8 h-8 lg:w-10 lg:h-10" />
        </a>
        <a href="https://www.instagram.com/jayadeep__11/" target="_blank" className="text-white transition-all hover:text-orange-500">
          <FaInstagram className="w-8 h-8 lg:w-10 lg:h-10" />
        </a>
        <a href="https://www.twitter.com/" target="_blank" className="text-white transition-all hover:text-orange-500">
          <FaTwitter className="w-8 h-8 lg:w-10 lg:h-10" />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;

