import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Contact, Github, Music } from "lucide-react";

const NavbarContent = ({ scrolled }) => (
  <div
    className={`flex items-center transition-all duration-300  ${
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

        <button className="font-bold bg-buttonbg text-lg p-3 rounded-xl flex items-center gap-2">
          <Contact />
          Contact
        </button>
      </div>
    )}

    {/* Scrolled */}
    {scrolled && (
      <button className="font-bold bg-buttonbg text-lg p-3 rounded-xl flex items-center gap-2">
        <Music />
      </button>
    )}
  </div>
);

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
          ? "py-3 bg-primary shadow-lg w-80 top-5 rounded-xl"
          : "p-5 bg-primary w-full"
      }`}
    >
      <NavbarContent scrolled={scrolled} />
    </nav>
  );
};

export default Navbar;
