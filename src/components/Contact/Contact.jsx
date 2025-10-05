import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uruwmao",
        "template_1ctjp3z",
        form.current,
        "VYjdn2Sn3YxgRIRw4"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section id="contact" className="container py-16 bg-[#220533]">
      <ToastContainer />
      <div className="">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side Content */}
          <div className=" flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Let’s Work Together 🤝
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Whether you have a question, want to collaborate, or just say
              hello, feel free to reach out. I’m always open to discussing new
              projects, creative ideas, or opportunities to be part of your
              vision.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 text-gray-200">
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-purple-400" /> New Delhi, India
              </p>
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-purple-400" />{" "}
                akramansari222001@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <FaPhone className="text-purple-400" /> +91 9661399192
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 mt-6 text-xl text-gray-300">
              <a
                href="https://www.linkedin.com/in/akram222001"
                target="_blank"
                className="hover:text-purple-400 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/akram222001"
                target="_blank"
                className="hover:text-purple-400 transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="p-4 rounded-2xl shadow-lg border border-gray-600">
            <h3 className="text-xl font-semibold text-white text-center">
              Connect With Me 🚀
            </h3>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="mt-6 flex flex-col space-y-4"
            >
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-md bg-[#220533] text-white border border-gray-500 focus:outline-none focus:border-purple-400"
              />
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-md bg-[#220533] text-white border border-gray-500 focus:outline-none focus:border-purple-400"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full p-3 rounded-md bg-[#220533] text-white border border-gray-500 focus:outline-none focus:border-purple-400"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                required
                className="w-full p-3 rounded-md bg-[#220533] text-white border border-gray-500 focus:outline-none focus:border-purple-400"
              />

              <button
                type="submit"
                disabled={isSent}
                className={`w-full py-3 text-white font-semibold rounded-md transition 
                ${
                  isSent
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90"
                }`}
              >
                {isSent ? "Sent ✅" : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
