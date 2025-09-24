import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="my-4 text-white">
      <div className="mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Akram Ansari</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            {
              icon: <FaFacebook />,
              link: "https://www.facebook.com/share/16MbG2GrgL/",
            },
            {
              icon: <FaTwitter />,
              link: "https://x.com/akram_ansarii?t=PCLW4jAJzM97L69VX5NOig&s=09",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/akram-ansari-4a3462217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/er_akramansari?utm_source=qr&igsh=NGVjOHppY205dzlj ",
            },
            {
              icon: <FaYoutube />,
              link: "https://www.youtube.com/@akramansari.91",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Akram Ansari. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
