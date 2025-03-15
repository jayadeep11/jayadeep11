import { useState } from "react";
import imgcode from "../assets/jd@logo.png";
import { navItems } from "../constants";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-transparent px-5 py-4 w-full mt-3">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <img src={imgcode} alt="Logo" className="w-10 h-10" />

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.href}
                                className="text-whie hover:text-orange-500"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? "Close" : "Menu"}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <ul className="flex flex-col items-center mt-4 md:hidden">
                    {navItems.map((item, index) => (
                        <li key={index} className="py-2">
                            <a
                                href={item.href}
                                className="text-gray-800 hover:text-orange-500"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
