import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import "./index.css";
import AudioPlayer from "./components/AudioPlayer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <div className="fixed bottom-10 right-5 px-10">
      <AudioPlayer />

      </div>
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
