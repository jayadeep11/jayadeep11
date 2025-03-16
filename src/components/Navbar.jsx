import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Contact, Github } from "lucide-react";
import { Instagram, X } from "lucide-react";
import { SiReddit } from "react-icons/si";
import AudioPlayer from "./AudioPlayer"; 
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { BsReddit } from "react-icons/bs";

const NavbarContent = ({ scrolled }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`flex items-center transition-all duration-300 ${
        scrolled ? "h-12 justify-between px-5" : "h-20 justify-between px-10"
      }`}
    >
      {/* Logo */}
      <h1
        className={`font-bold text-lb transition-all duration-300 ${
          scrolled ? "text-3xl" : "text-4xl"
        }`}
      >
        <Link to="/">JD</Link>
      </h1>

      {/* Not Scrolled */}
      {!scrolled && (
        <div className="flex gap-5">
          <button className="group">
            <Link to="https://github.com/jayadeep11/" target="_blank">
              <Github className="transition-all duration-300 group-hover:fill-current" />
            </Link>
          </button>

          {/* Contact Button */}
          <div
            className={`font-bold bg-buttonbg text-lg p-3 rounded-xl flex items-center gap-2 transition-all duration-300 cursor-pointer ${
              expanded ? "w-ful h-12 p-6" : "w-32 h-12"
            }`}
            onClick={() => setExpanded(!expanded)}
          >
            <Contact className={`${expanded ? "hidden" : ""}`} /> {/* has to change */}
            {expanded ? <div className="flex justify-center items-center gap-3 text-3xl">

                    <FaInstagram />
                    <BsReddit />
                    <FaLinkedin />


                </div> : "Contact"}
          </div>
        </div>
      )}

      {/* Show AudioPlayer when scrolled */}
      {scrolled && <AudioPlayer />}
    </div>
  );
};

// Main Navbar Component
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 930);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 transition-all text-lb ease-in-out duration-300 ${
        scrolled
          ? "py-3 bg-primary shadow-lg w-80 top-3 rounded-xl"
          : "p-5 bg-primary w-full"
      }`}
    >
      <NavbarContent scrolled={scrolled} />
    </nav>
  );
};

export default Navbar;

