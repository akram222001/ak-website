import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="container mb:py-16 pb-16 font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center md:mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center md:mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              className={`relative w-full sm:w-5/12 mt-10 sm:mt-0 p-6 rounded-2xl bg-[#151529] border border-[#23233a] shadow-lg hover:shadow-[0_0_25px_rgba(130,69,236,0.4)] transition duration-300 ${
                index % 2 === 0 ? "sm:ml-auto" : "sm:mr-auto"
              }`}
            >
              <h3 className="text-xl font-semibold text-white">
                {experience.role}
              </h3>
              <h4 className="text-sm text-gray-400">{experience.company}</h4>
              <p className="text-xs text-gray-500 mt-1">{experience.date}</p>

              <p className="mt-4 text-gray-300 leading-relaxed">
                {experience.desc}
              </p>

              {/* Skills */}
              <div className="mt-4">
                <h5 className="font-medium text-white text-sm mb-2">Skills</h5>
                <ul className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-[#8245ec1a] text-[#cbbaf7] px-3 py-1 text-xs rounded-lg border border-[#8245ec40]"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
