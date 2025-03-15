import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="hel w-full mx-auto px-10 relative z-30 ">
        <Hero />
        <About />
        <Workflow />
        <Footer />
      </div>
    </>
  );
};

export default App;
