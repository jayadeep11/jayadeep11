import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-primary text-lb min-h-screen flex flex-col justify-between items-center py-10">
      {/* Name Section (Centered) */}
      <div className="flex-grow flex flex-col justify-center items-center gap-2">
        <h1 className="sm:text-9xl text-6xl font-acorn text-center">I'm JayAdeep</h1>
        <p className="text-center text-lg">Web Developer and Linux Enthusiast.</p>
      </div>

      {/* Button Section (At Bottom) */}
      <button className="group font-bold bg-buttonbg text-lg p-3 rounded-xl flex items-center gap-2 transition-all duration-300 ">
        About me
        <ArrowRight className="w-5 h-5 hidden group-hover:block transition-all duration-300 ease-in-out" />
      </button>
    </div>
  );
};

export default HeroSection;

