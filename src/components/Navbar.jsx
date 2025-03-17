import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AudioPlayer from "./AudioPlayer";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { BsReddit } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { Contact, Github } from "lucide-react";

const NavbarContent = ({ scrolled }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`flex z-30 items-center transition-all duration-300 ${
        scrolled ? "h-10 justify-between px-4" : "h-20 justify-between sm:px-10"
      }`}
    >
      {/* Logo */}
      <h1
        className={`font-bold text-lb transition-all duration-300 ${
          scrolled ? "text-3xl" : "text-4xl"
        }`}
      >
        <a href="#hero">JD</a>
      </h1>

      <div className="flex gap-5">
        <AudioPlayer />

        <div
          className={`font-bold bg-buttonbg text-lg p-3 rounded-xl flex items-center gap-2 transition-all duration-300 cursor-pointer ${
            expanded ? "w-ful h-12 px-6" : "w-32 h-12"
          } ${scrolled ? "hidden" : ""}`}
          onClick={() => setExpanded(!expanded)}
        >
          <Contact className={`${expanded ? "hidden" : ""}`} />{" "}
          {/* has to change */}
          {expanded ? (
            <div className="flex justify-center items-center gap-3 text-3xl">
              <FaInstagram />
              <BsReddit />
              <CiLinkedin />
              <Github className="transition-all duration-300 group-hover:fill-current" />
            </div>
          ) : (
            "Contact"
          )}
        </div>
      </div>
    </div>
  );
};

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
          ? "py-3 bg-buttonbg shadow-lg w-80 top-3 rounded-xl"
          : "p-5 bg-primary w-full"
      }`}
    >
      <NavbarContent scrolled={scrolled} />
    </nav>
  );
};

export default Navbar;
