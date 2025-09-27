import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./components/BlurBlob";

const App = () => {
  return (
    <div className="bg-[#050414] relative min-h-screen overflow-hidden">
      {/* Decorative blur blob */}
      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      />

      {/* Grid background with mask effect */}
      <div
        className="absolute inset-0 
          bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]
          bg-[size:14px_24px] 
          [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]
          pointer-events-none"
      ></div>

      {/* Main content */}
      <div className="relative">
        <Navbar />
        <div className="">
          <About />
          <Skills />
          <Experience />
          <Work />
          <Education />
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
