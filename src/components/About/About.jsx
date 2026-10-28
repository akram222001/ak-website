import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.png";

const About = () => {
  return (
    <section id="about" className="container py-24">
      <div className="md:container flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Akram Ansari
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                "Frontend Developer",
                "React.js Developer",
                "Next.js Developer",
                "Full-Stack Developer",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            Frontend-focused Web Developer with 2+ years of professional
            experience building responsive, scalable, and production-ready web
            applications. Currently working as a Frontend Developer at IM
            Digital Solutions with React.js, Next.js, JavaScript, and
            TypeScript, while also contributing to backend development and CMS
            integrations using Payload CMS.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1SO663DBdzzIlfFZDmnF5RjXApZFi68Fg/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-2 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
          {/* Agency CTA Button */}
          <a
            href="https://asnit-frontend.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[#c4a3ff] py-2 px-8 rounded-full mt-5 ml-0 sm:ml-4 text-lg font-bold border-2 border-[#8245ec] transition duration-300 transform hover:scale-105 hover:bg-[#8245ec] hover:text-white"
            style={{
              boxShadow: "0 0 2px #8245ec, 0 0 20px #8245ec",
            }}
          >
            HIRE MY AGENCY →
          </a>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[25rem] md:h-[25rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Akram Ansari"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
