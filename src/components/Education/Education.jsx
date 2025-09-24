import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative px-3 sm:px-28">
        {/* Vertical line */}
        <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-12 relative ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-4 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-9 h-9 sm:w-14 sm:h-14 rounded-full flex justify-center items-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-6 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0
                  ? "sm:ml-0 sm:mr-auto ml-4"
                  : "sm:mr-0 sm:ml-auto ml-4"
              }`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-4 sm:space-x-6">
                {/* School Logo/Image */}
                <div className="w-20 sm:w-18 bg-white rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm sm:text-md text-gray-300">
                      {edu.school}
                    </h4>
                  </div>
                  {/* Date */}
                  <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
                    {edu.date}
                  </p>
                </div>
              </div>

              {/* Grade and Description */}
              <p className="mt-3 text-gray-400 text-sm sm:text-base font-medium">
                Grade: {edu.grade}
              </p>
              <p className="mt-2 text-gray-400 text-sm sm:text-base">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
