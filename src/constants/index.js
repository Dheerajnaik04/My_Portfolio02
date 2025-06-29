import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  spring01,
  mysql02,
  plsql02,
  // Import your actual company images
  accolade,
  comsoft,
  unified,
  robowave,
  // Import project images
  priscripto,
  ghibili,
  milVision,
  tcrm,
  jonAI,
  maacare,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Coding Teacher",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Java",
    icon: backend, // Using backend icon since you don't have a Java-specific icon
  },
  {
    name: "Spring Boot",
    icon: spring01,
  },
  {
    name: "MySQL",
    icon: mysql02,
  },
  {
    name: "PostgreSQL",
    icon: plsql02,
  }
];

const experiences = [
  {
    title: "Java Developer Intern",
    company_name: "Accolade Solutions",
    icon: accolade,
    iconBg: "#383E56",
    date: "March 2021 - April 2021",
    points: [
      "Developed and maintained Java applications using Spring framework and related technologies.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implemented backend services and APIs for web applications.",
      "Participated in code reviews and provided constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Comsoft Technologies",
    icon: comsoft,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Feb 2022",
    points: [
      "Developed software solutions using various programming languages and frameworks.",
      "Worked on frontend and backend development for client projects.",
      "Implemented responsive design and ensured cross-browser compatibility.",
      "Participated in agile development processes and sprint planning.",
    ],
  },
  {
    title: "Fullstack Developer Intern",
    company_name: "Unified Mentors Pvt. Ltd",
    icon: unified,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developed full-stack web applications using MERN stack technologies.",
      "Built responsive user interfaces with React.js and modern CSS frameworks.",
      "Designed and implemented RESTful APIs using Node.js and Express.",
      "Worked with databases including MongoDB and implemented data modeling.",
    ],
  },
  {
    title: "Full Stack Java Developer Intern",
    company_name: "RoboWave Pvt. Ltd",
    icon: robowave,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Developing full-stack applications using Java Spring Boot and React.js.",
      "Building scalable backend services and microservices architecture.",
      "Implementing modern frontend interfaces with React and TypeScript.",
      "Working with databases, API integrations, and cloud deployment strategies.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Shankar Narayan",
    designation: "Branch Head",
    company: "Jspyders",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "./shankar.jpg",
  },
];

const projects = [
  {
    name: "Priscripto",
    description:
      "A MERN-based doctor appointment booking system enabling patients to schedule appointments, upload prescriptions via Cloudinary, and view their medical history. Doctors and admins can manage profiles, availability, and records.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "cloudinary", color: "pink-text-gradient" },
    ],
    image: priscripto,
    source_code_link: "https://github.com/Dheerajnaik04/priscripto",
  },
  {
    name: "Ghibli AI Generator",
    description:
      "A SaaS platform that lets users generate Studio Ghibli-style images from text prompts. Built with a Spring Boot backend for API logic and a React + Tailwind frontend for a seamless real-time user experience.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "springboot", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: ghibili,
    source_code_link: "https://github.com/Dheerajnaik04/ghibli-ai-generator",
  },
  {
    name: "MilVision",
    description:
      "An AI-powered surveillance tool that uses Python and OpenCV for real-time image recognition and threat detection. Firebase is used for real-time alerts and storing surveillance logs for secure remote monitoring.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
      { name: "opencv", color: "pink-text-gradient" },
    ],
    image: milVision,
    source_code_link: "https://github.com/Dheerajnaik04/milvision",
  },
  {
    name: "PulseCRM (TCRM Hackathon)",
    description:
      "A modern CRM frontend solution built during a hackathon to address TCRM's platform challenges. Developed using Next.js 14, TypeScript, Tailwind, and Framer Motion with responsive design and rich UI/UX.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "framer-motion", color: "pink-text-gradient" },
    ],
    image: tcrm,
    source_code_link: "https://github.com/Dheerajnaik04/pulsecrm",
  },
  {
    name: "AI Resume Niewer",
    description:
      "An AI-powered resume screening system developed for a GeeksforGeeks hackathon. Utilizes NLP and OpenAI to match resumes with job descriptions and provides hiring insights through a responsive React dashboard.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "openai", color: "green-text-gradient" },
      { name: "nlp", color: "pink-text-gradient" },
    ],
    image: jonAI,
    source_code_link: "https://github.com/Dheerajnaik04/ai-resume-niewer",
  },
  {
    name: "Macare",
    description:
      "A DBMS-based blood bank management software designed to streamline donor/recipient registration, inventory management, and blood compatibility checks using Java and SQL.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "sql", color: "green-text-gradient" },
      { name: "dbms", color: "pink-text-gradient" },
    ],
    image: maacare,
    source_code_link: "https://github.com/Dheerajnaik04/macare",
  },
];

export { services, technologies, experiences, testimonials, projects };
