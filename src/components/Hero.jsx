import { ArrowRight } from "lucide-react";
import handdraw from "./handdraw.png";

const HeroSection = () => {
  return (
    <div id="hero" className="bg-primary text-lb min-h-screen flex flex-col justify-between items-center py-10">
        {/* <img */}
        {/*   src={handdraw} */}
        {/*   alt="handdraw" */}
        {/*   className="absolute  top-20 hidden lg:block right-5 w-full max-w-xs sm:max-w-xs h-auto object-cover" */}
        {/* /> */}
      {/* Name  */}
      <div className="flex-grow flex flex-col justify-center items-center gap-3 p-3">
        <h1 className="sm:text-9xl text-6xl font-acorn text-center">
          I'm JayAdeep
        </h1>
        <p className="text-center text-lg">
          Web Developer and Linux Enthusiast.
        </p>

        <button className="group hover:bg-black hover:text-primary mt-3 font-bold bg-buttonbg text-lg p-3 rounded-xl b flex items-center gap-2 transition-all duration-300 ">
      <a href="#about">

          About me
      </a>
          {/* <ArrowRight className="w-5 h-5 hidden group-hover:block transition-all duration-300 ease-in-out" /> */}
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
