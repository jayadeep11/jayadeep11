import logo from "./../assets/prop.jpg";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { BsReddit } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { Contact, Github } from "lucide-react";
import { MdArrowOutward } from "react-icons/md";

const About = () => {
  const navlinks = {
    Home: "#hero",
    Projects: "#projects",
    Workflow: "#workflow",
    Contact: "#contact",
  };
  
  return (
    <div id="about" className="bg-[#121212] min-h-screen flex items-center justify-center py-8 md:py-16 lg:py-20 px-2 sm:px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 lg:gap-20 p-2 sm:p-4 md:p-8 lg:p-12">
        {/* Left Section */}
        <div className="flex flex-col items-center col-span-12 md:col-span-5 lg:col-span-4 gap-4 md:gap-6 text-center rounded-xl py-4 md:py-10">
          <img
            src={logo}
            alt="logo"
            className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-xl shadow-lg object-cover"
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-neutral-100/90 mt-2">
            Jayadeep
          </h1>
          {/* Social Icons */}
          <div className="flex justify-center items-center gap-4 sm:gap-6 text-buttonbg text-xl sm:text-3xl">
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
              <BsReddit />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
              <CiLinkedin />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
              <Github className="transition-all duration-300 group-hover:fill-current" />
            </a>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="flex flex-col justify-center text-neutral-100 col-span-12 md:col-span-7 lg:col-span-8 space-y-4 md:space-y-8 overflow-hidden">
          {/* Paragraph with Gradient Background */}
          <div className="w-full rounded-lg  p-1">
            <div className="bg-[#121212] rounded-lg p-3">
              <p className="text-base text-neutral-500 sm:text-lg md:text-4xl lg:text-5xl xl:text-6xl text-center sm:text-left font-acorn  break-words">
                Hello, I'm Jayadeep. <br />
                I'm a frontend developer from India. 
                I'm currently working on my first project.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-6">
            <button className="px-3 py-2 md:px-6 md:py-3 bg-white hover:bg-blue-700 text-lb font-semibold rounded-lg transition-all duration-300 w-full sm:w-auto text-sm sm:text-base">
              Download CV
            </button>
            <button className="px-3 py-2 md:px-6 md:py-3 bg-transparent  border hover:bg-blue-700 text-primary font-semibold rounded-lg transition-all duration-300 w-full sm:w-auto text-sm sm:text-base">
      About me
            </button>
            
            {/* <a href="mailto:contact@jayadeep.com" className="flex items-center gap-2 text-violet-400 hover:text-blue-300 transition-colors duration-300 text-sm sm:text-base"> */}
            {/*   <Contact size={16} /> */}
            {/*   <span className="truncate">contact@jayadeep.com</span> */}
            {/* </a> */}
          </div>
          
          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            {Object.keys(navlinks).map((key) => (
              <a
                key={key}
                href={navlinks[key]}
                className="px-2 py-2 md:px-4 md:py-3 flex gap-1 items-center justify-center bg-[#1e1e1e] hover:bg-[#2a2a2a] text-white font-medium rounded-lg transition-all duration-300 text-sm sm:text-base"
              >
                <MdArrowOutward size={14} className="flex-shrink-0" />
                <span>{key}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
