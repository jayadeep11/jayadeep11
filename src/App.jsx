import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <Navbar />
       {/* h-[calc(100vh-4rem)] Todo */}
      <div className="w-full "> 
        <Hero />
        <About />
        <Workflow />
        <Footer />
      </div>
    </div>
  );
};

export default App;
