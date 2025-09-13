const tagline = {
  tag: "#full-stack #softwaredev #quality-assurance-tester #computer-science-graduate",
};

const scope = {};
const person = {
  name: {
    fname: "STANLEY ERNST",
    lname: "GONATICE",
    get fullname() {
      return `${this.fname} ${this.lname}`;
    },
  },
  photo: {
    img: "../src/assets/Gonatice_PHOTO.jpg",
    border: "../src/assets/border.gif",
  },
  bio: {
    birth: "August 31, 2003",
    citizenship: "Filipino",
    location: {
      country: "Philippines",
      province: "South Cotabato",
      city: "Koronadal",
      get loc() {
        return `${this.city} , ${this.province} , ${this.country}`;
      },
    },
  },

  socials: {
    github: {
      name: "github",
      label: "Github",
      title: "Github Profile",
      icon: "fab fa-github",
      url: "https://github.com/StanleyEG31",
    },
    facebook: {
      name: "facebook",
      label: "Facebook",
      title: "facebook Profile",
      icon: "fab fa-facebook",
      url: "https://www.facebook.com/Stanley.Ernst31",
    },
    linkedin: {
      name: "linkedin",
      label: "LinkedIn",
      title: "LinkedIn Profile",
      icon: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/stanleyernst",
    },
  },
};

const info = {
  titleDesc:
    "A passionate and creative Full-Stack Developer with a strong foundation in software engineering, design, and innovation. Dedicated to building responsive, user-focused web solutions with clean code and thoughtful design.",
};

const typedTitle = {
  title: [
    { text: "FULL-STACK DEVELOPER", color: "text-amber-400" },
    { text: "SOFTWARE DEVELOPER", color: "text-blue-400" },
    { text: "QUALITY ASSURANCE TESTER", color: "text-pink-400" },
    { text: "CS GRADUATE", color: "text-green-400" },
  ],
};

const navLink = [
  {
    id: "about",
    name: "About",
  },
  {
    id: "timeline",
    name: "Timeline",
  },
  {
    id: "skills",
    name: "Skills",
  },
  {
    id: "projects",
    name: "Projects",
  },
  {
    id: "contact",
    name: "Contact",
  },
];
const about = {
  bio: {
    aboutme: `I’m Stanley Ernst D. Gonatice, whose path into technology began in an unexpected way back in high school. I wasn’t sure what course to take in college, but my love for gaming and technology sparked a curiosity about how machines worked. During my Computer Science studies, I learned coding from scratch—working with C++, Java, Python, Flutter, and more. My On-the-Job Training gave me hands-on experience building a Tabulation System, where I focused on front-end development while also improving my back-end skills. I even had the chance to go on-site during events, handling technical setup and ensuring the system ran smoothly.

I’m driven by continuous learning, problem-solving, and collaboration, always aiming to create functional, efficient, and user-friendly products. My mission is to keep growing as a developer and use technology to make everyday tasks easier, smarter, and more impactful.`
,
    objective:
      "A Computer Science graduate with hands-on experience in backend development, AI projects, and mobile applications. Skilled in building systems ranging from grading and business management tools to full-stack apps and ERP platforms, with a focus on creating efficient, scalable, and user-friendly solutions.",
    scopes: [
      { text: "Full Stack Developer" },
      { text: "Mobile App Developer" },
      { text: "Database Designer" },
      { text: "Web App Developer" },
      { text: "Quality Assurance Tester"},
    ],
  },
};

import cppLogo from "../assets/utilities/c++.png";
import rubyLogo from "../assets/utilities/ruby.png";
import dartLogo from "../assets/utilities/dart.png";
import javaLogo from "../assets/utilities/java.png";
import jsLogo from "../assets/utilities/js.png";
import phpLogo from "../assets/utilities/PHP-logo.svg.png";
import htmlLogo from "../assets/utilities/html5.png";
import css3Logo from "../assets/utilities/css3.jpg";
import mysqlLogo from "../assets/utilities/mysq-logo.png";
import flutterLogo from "../assets/utilities/Flutter_logo.svg.png";
import firebaseLogo from "../assets/utilities/firebase.png";
import nodejsLogo from "../assets/utilities/nodejs.png";
import expressLogo from "../assets/utilities/expressjs.png";
import mongodbLogo from "../assets/utilities/mongodb.svg";
import pythonLogo from "../assets/utilities/python.png";
import vuejsLogo from "../assets/utilities/vuejs.png";
import railsLogo from "../assets/utilities/rails.png";
import graphqlLogo from "../assets/utilities/graphql.png"
import cloudLogo from "../assets/utilities/cloudinary.png"
import laravelLogo from "../assets/utilities/Laravel.png";
import reactLogo from "../assets/utilities/react.png";
import bootstrapLogo from "../assets/utilities/bootstrap.png";
import postgresqlLogo from "../assets/utilities/postgresql.png";
import ndmuLogo from "../assets/utilities/NDMU.avif";
import diabetesImg from "../assets/projects/diabetes_pred.png";
import strayImg from "../assets/projects/stray.png";
import mbcImg from "../assets/projects/mbc.png";
import no404 from "../assets/projects/404.png";

// Programming Languages
const programmingLogos = [
  cppLogo,
  dartLogo,
  javaLogo,
  jsLogo,
  pythonLogo,
  phpLogo,
  rubyLogo,
  htmlLogo,
  css3Logo,
];

// Technologies / Frameworks
const utilityLogos = [
  flutterLogo,
  laravelLogo,
  reactLogo,
  nodejsLogo,
  bootstrapLogo,
  railsLogo,
  vuejsLogo,
  graphqlLogo,
];

// Databases
const databaseLogos = [
  mongodbLogo,
  mysqlLogo,
  firebaseLogo,
  postgresqlLogo,
];


const timeline = {
  education: [
    {
      school: "Notre Dame of Marbel University (NDMU)",
      degree: "Computer Science (Bachelor Degree)",
      start: "2021",
      graduated: "2025",
      description:
        "Completed a rigorous curriculum in algorithms, data structures, and software engineering.",
      logo: [ndmuLogo],
      certificate: "",
      modal: "",
    },
  ],
  experience: [
    {
      title: "Full-Stack Internship at Eulap",
      start: "June 2024",
      end: "August 2024",
      description:
        "Developed real-time scoring and results platforms for the 2024 SOXITECH Startup Hackathon and the 2024 T’nalak Festival Street Dancing Competition using PHP, HTML, CSS, JavaScript, MySQL, Flutter, and Firebase.",
      logo: [phpLogo, htmlLogo, jsLogo, css3Logo, mysqlLogo, flutterLogo, firebaseLogo],
      certificate: "",
      modal: "",
    },
    {
      title: "Quality Assurance Tester",
      start: "June 2025",
      end: "July 2025",
      description:
        "Tested and ensured the quality and reliability of web applications by conducting regression, performance, and functional testing to validate product stability. Assisted in quality assurance reviews, maintained detailed documentation of test cases and results, and collaborated closely with developers to identify, track, and resolve defects prior to deployment.",
      logo: [],
      certificate: "",
      modal: "",
    },
  ],
};

// projects
const projects = [
  {
    title: "Customer Segmentation",
    description:
      "Developed as part of our Thesis at Notre Dame of Marbel University, this PHP‑powered web application delivers a comprehensive, responsive admin dashboard that lets you drill into every table and record—customers, orders, products, users—and filter, sort, search, or export on demand; it also displays real‑time site metrics such as total customers, sales, and active sessions, while providing full user administration to create, edit, or revoke access for any number of admin or staff accounts. Beyond the LAMP‑stack front end, the repository includes a Python module built on pandas and scikit‑learn that preprocesses raw transaction data and applies the DBSCAN algorithm—using both RFM and LRFMP feature sets—to uncover natural customer clusters, which can then be visualized or fed back into the PHP dashboard for targeted marketing campaigns. Although the system has been discontinued following our successful thesis defense, it remains a complete full‑stack illustration of how to integrate a classic PHP/MySQL dashboard with a modern data‑science backend for real‑world customer‑segmentation workflows.",
    url: {
      github:
        "https://github.com/StanleyEG31/Customer-Segmentation",
      live: "",
    },
    image: customerImg,
    languages: ["PHP", "HTML", "CSS", "JAVASCRIPT", "PYTHON", "MySQL"],
    live: false,
  },
  {
    title: "E-Commerce",
    description:
      "Developed a static e-commerce website prototype focusing on front-end design. Implemented features such as product search, add-to-cart, checkout simulation, and receipt display. Built as a simple proof-of-concept to showcase my strengths in web development, with plans to expand functionality in the future.",
    url: {
      github:
        "https://github.com/StanleyEG31/e-coms",
      live: "https://stanleyeg31.github.io/e-coms",
    },
    image: ecomImg,
    languages: ["HTML", "CSS", "JAVASCRIPT"],
    live: true,
  },
  {
    title: "Tabulation System",
    description:
      "A web-based tabulation system designed to streamline the scoring and results management process for events and competitions. Built with a focus on user-friendly interfaces and real-time data handling, the system allows judges to easily input scores, while administrators can efficiently manage participants and generate comprehensive reports. The application is developed using PHP for server-side logic, MySQL for database management, and incorporates HTML, CSS, and JavaScript for a responsive front-end experience. This project was created during my internship at Eulap Solutions, where I contributed to both front-end and back-end development tasks.",
    url: {
      github: "https://github.com/StanleyEG31/Tnalak-Street-Dancing",
      live: "",
    },
    image: no404,
    languages: ["PHP", "HTML", "CSS", "JAVASCRIPT", "MySQL"],
    live: false,
  },
  {
    title: "2024 SOXITECH Startup Hackathon Scoring System",
    description:
      "A comprehensive web application designed to facilitate the scoring and results management for the 2024 SOXITECH Startup Hackathon. This system allows judges to efficiently input scores for various competition categories, while providing administrators with tools to manage participants and generate detailed reports. Built using PHP, MySQL, HTML, CSS, and JavaScript, the application ensures a seamless user experience with real-time data handling capabilities. The project was developed during my internship at Eulap Solutions, where I played a key role in both front-end and back-end development.",
    url: {
      github: "https://github.com/StanleyEG31/SOXITECH",
      live: false,
    },
    image: soxitechImg,
    languages: ["PHP", "HTML", "CSS", "JAVASCRIPT", "MySQL", "Flutter", "Firebase"],
    live: false,
  },
];

export {
  person,
  scope,
  tagline,
  typedTitle,
  info,
  navLink,
  about,
  programmingLogos,
  utilityLogos,
  timeline,
  projects,
  databaseLogos,
};
