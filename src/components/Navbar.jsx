import { useState } from "react";
import imgcode from "../assets/jd@logo.png";
import { navItems } from "../constants";
import { Contact } from "lucide-react";
import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 bg-primary p-5 w-full">
      <div className="flex justify-between items-center px-20">
        {/* Logo */}
        {/* <img src={imgcode} alt="Logo" className="w-10 h-10" /> */}
        <h1 className="font-bold font-acorn text-4xl">Jayadeep</h1>

        <div className="flex gap-7 ">
          <button>
            <Github />
          </button>

          <button className=" font-bold bg-buttonbg text-2xl p-4 rounded-xl flex items-center gap-2">
            <Contact />
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
