// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import antdLogo from './assets/tech_logo/ant-design-seeklogo.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
// import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
// import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import acciojobLogo from './assets/company_logo/acciojob_logo.svg';
import bbLogo from './assets/company_logo/logo2.png';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import manuuLogo from './assets/education_logo/malana-azad-university-logo.jpg';
import vpsLogo from './assets/education_logo/bseb.webp';

// Project Section Logo's
import escortskubotatLogo from './assets/work_logo/escortskubota.png';
import tsLogo from './assets/work_logo/TS.png';
import cktrecLogo from './assets/work_logo/kct.png';
import etbriLogo from './assets/work_logo/etBricraft.png';
import sssLogo from './assets/work_logo/sss.png';
import virotronLogo from './assets/work_logo/virotron.png';
import cmsescortskubotatLogo from './assets/work_logo/eklcms.png';
import blinketLogo from './assets/work_logo/blinket.png';
import criptoLogo from './assets/work_logo/crypto.png';
import swcLogo from './assets/work_logo/swc.png';
// import taskremLogo from './assets/work_logo/task_rem.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Antd', logo: antdLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: acciojobLogo,
      role: "Fullstack Developer",
      company: "AccioJob",
      date: "December 2023 - 2024",
      desc: "Completed MERN Stack course at AccioJob, building full-stack web applications. Gained hands-on experience in developing responsive UIs, implementing RESTful APIs, and managing both frontend and backend functionalities through practical projects.",
      skills: [
        "HTML",
        "CSS",
        "CSS",
        "SCSS",
        "Ant Design",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Express JS",
        "MongoDb",
        "Redux",
        "Git",
        "GitHub"
      ],
    },
    {
      id: 1,
      img: bbLogo,
      role: "Web Developments",
      company: "BytecBrick Pvt. Ltd.",
      date: "May 2024 - Present",
      desc: "Contributed to full-stack projects, handling frontend and backend development using Morden Technology Collaborated with the team to deliver responsive, high-performance web applications with enhanced user experience.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "ReactJS",
        "NextJS",
        "NodeJS",
        "ExpressJS",
        "Redux",
        "Tailwind CSS",
        "Ant Design",
        "shadcn/ui",
        "Git",
        "Bitbucket",
        "SQL",
        "MySQL",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: manuuLogo,
      school: "Maulana Azad National Urdu University",
      date: "2020 - 2024",
      grade: "7.41 CGPA",
      desc: "I have completed my Bachelor of Technology (B.Tech) in Computer Science and Information Technology from Maulana Azad National Urdu University. During this time, I built a strong foundation in programming, software development, and core computer science subjects such as Data Structures, Algorithms, Database Management Systems, and Web Development. I also participated in technical events and workshops.",
      degree: "Bachelor of Technology - (B.Tech)",
    },
    {
      id: 1,
      img: manuuLogo,
      school: "Maulana Azad National Urdu University",
      date: "2017 - 2020",
      grade: "7.48 CGPA",
      desc: "I have completed my Diploma in Computer Science Engineering from Maulana Azad National Urdu University. During this time, I built a strong foundation in programming, software development, and core computer science subjects such as Data Structures, Algorithms, Database Management Systems, I also participated in technical events and workshops.",
      degree: "Diploma in Computer Science Enineering",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Bihar School Examination Board Patna (BSEB)",
      date: "2016 - 2017",
      grade: "52%",
      desc: "I completed my class 10 education from R S S j High School Chhaurahi Dalokhar, under the BSEB board, where I studied Physics, Chemistry, and Mathematics, Hindi, Science and English.",
      degree: "BSEB(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Escorts Kubota",
      description:
        "Contributed to the development of the Escorts Kubota corporate website, handling both frontend UI and backend functionality. Developed responsive interfaces, integrated backend logic, and ensured optimal performance and seamless user experience.",
      image: escortskubotatLogo,
      tags: ["HTML", "CSS", "JavaScript","React.js","Next JS","Node.js","Api Integration","Tailwind CSS","Shadcn/ui","MySQL"],
      github: "https://github.com/akram222001",
      webapp: "https://www.escortskubota.com/",
    },
    {
      id: 1,
      title: "Escorts Kubota CMS Pannel",
      description:
        "I contributed to the development of the Escorts Kubota corporate website, working on frontend UI, backend functionality, and performance optimization. I also developed CMS features with CRUD operations to manage website authentication and content management efficiently.",
      image: cmsescortskubotatLogo,
      tags: ["HTML", "CSS", "JavaScript","React.js","Next JS","Node.js","Api Integration","Tailwind CSS","Shadcn/ui","MySQL"],
      github: "https://github.com/akram222001",
      webapp: "https://cms.escortskubota.com/",
    },
    {
      id: 2,
      title: "Technovatic Solutions",
      description:
        "Developed both frontend and backend for the Technovatic Solutions brand website at BytesBrick. Built responsive user interfaces, implemented form APIs, and ensured seamless functionality and optimal performance.",
      image: tsLogo,
      tags: ["HTML", "CSS", "JavaScript","React.js","Next JS", "Node.js", "MySQL", "Express", "Tailwind CSS", "Shadcn/ui"],
      github: "https://github.com/akram222001",
      webapp: "https://technovaticsolutions.com/",
    },
    {
      id: 3,
      title: "College Ke Tashanbaaz",
      description:
        "Worked on the frontend development of Red FM’s College ke Tashanbaaz event website, creating responsive user interfaces to enhance participant engagement and ensure a smooth experience during college events.",
      image: cktrecLogo,
      tags: ["HTML", "CSS", "JavaScript","Next JS", "Tailwind css","Shadcn","Responsive Design"],
      github: "https://github.com/akram222001",
      webapp: "https://collegeketashanbaaz.in/",
    },
    {
      id: 4,
      title: "etBri",
      description:
        "I worked on the frontend development of ETBRI, a jewelry e-commerce website, focusing on core product features and responsive UI. I built product listing and detail pages with filtering, sorting, image galleries, cart, and wishlist functionality to enhance the shopping experience. Additionally, I implemented UI modifications, product zooming, and video support to make product showcases more interactive and engaging.",
      image: etbriLogo,
      tags: ["HTML", "CSS", "JavaScript","React.js","Next JS", "Tailwind css","Responsive Design"],
      github: "https://github.com/akram222001",
      webapp: "https://craftmyjewelry.com/",
    },
    {
      id: 5,
      title: "South Side Story",
      description:
        "I worked on the frontend development of SSS, adding a section for another state to display upcoming singers. I integrated singer images, social media links, and enhanced the UI to provide a more engaging and visually appealing experience.",
      image: sssLogo,
      tags: ["HTML", "CSS","PHP","Responsive Design"],
      github: "https://github.com/akram222001",
      webapp: "https://www.southsidestory.in/",
    },
     {
      id: 6,
      title: "Virotrone Solar Pannel Systems",
      description:
        "I worked on the frontend development of Virotrone, a solar panel systems website. I enhanced the UI Improved responsiveness and user experience across devices. ",
      image: virotronLogo,
      tags: ["HTML", "CSS","JavaScript","React.js","Nextjs","Tailwind CSS","Responsive Design"],
      github: "https://github.com/akram222001",
      webapp: "https://virotron.in/",
    },
    {
      id: 7,
      title: "Blinket Clone Frontend",
      description:
        "I built the frontend of the Blinket Close project in React as a learning exercise, focusing on core concepts of component-based development and responsive UI. Through this project, I practiced implementing UI improvements and feature enhancements to strengthen my frontend skills.",
      image: blinketLogo,
      tags: ["HTML","CSS","React.js","Tailwind CSS","Responsive Design"],
      github: "https://github.com/akram222001/Blinkit-clone-React",
      webapp: "https://react-blinket-clone.netlify.app/",
    },
    {
      id: 8,
      title: "Crypto Fetch Api",
      description:
        "I developed a Crypto Fetch API project where I fetched real-time cryptocurrency data, displayed it in a responsive list, and implemented a search feature for easy filtering. I also added sorting functionality by price, market cap, and percentage changes to enhance data usability and user experience.",
      image: criptoLogo,
      tags: ["HTML","CSS","React.js","Tailwind CSS","Responsive Design"],
      github: "https://github.com/akram222001/crypto-api-fetch-react-f4",
      webapp: "https://fastidious-bubblegum-3b22d0.netlify.app/",
    },
    {
      id: 9,
      title: "Star Wars Characters",
      description:
        "I developed a Star Wars Characters Fetch API project where I fetched Image and its data data, displayed it in a responsive list, and implemented a search feature for easy filtering data usability and user experience.",
      image: swcLogo,
      tags: ["HTML","CSS","React.js","Tailwind CSS","Responsive Design"],
      github: "https://github.com/akram222001/sw-characters",
      webapp: "https://akram222001.github.io/sw-characters/",
    },
    // {
    //   id: 4,
    //   title: "Email Validator NPM Package",
    //   description:
    //     "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    //   image: npmLogo,
    //   tags: ["React JS", "Node.js", "NPM", "Validation"],
    //   github: "https://github.com/codingmastr/cmtk-email-validator",
    //   webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    // },
  ];  