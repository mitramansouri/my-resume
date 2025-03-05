import project1 from "../assets/projects/project-e.png";
import project2 from "../assets/projects/project-2.jpg";
import cyfrin from "../assets/projects/cyf.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import projc from "../assets/projects/projc.jpg";
import machineLearningImg from '../assets/projects/machineLearningImg.jpg';
import aiTelegramBotImg from '../assets/projects/aiTelegramBotImg.jpg';
export const ABOUT_TEXT = "👋 Welcome! I’m Mitra Barkeshloo Mansouri. \nI’m an AI Engineer, Software Developer, and Tech Enthusiast with a strong passion for machine learning, blockchain, and full-stack development. Currently pursuing my Master’s in Artificial Intelligence at Alpen-Adria-Universität Klagenfurt, I thrive at the intersection of cutting-edge AI research and real-world applications. \nWith hands-on experience in Python, React, Solidity, and cloud computing, I specialize in building scalable AI-driven solutions and decentralized applications. From optimizing web applications to developing predictive models and smart contracts, I love turning complex problems into innovative solutions.\nBeyond coding, I enjoy participating in hackathons, collaborating on open-source projects, and sharing insights on AI and software development. My goal is to bridge the gap between AI and practical applications, making technology more efficient and accessible."

export const HERO_CONTENT = 'I specialize in Artificial Intelligence, Blockchain Development, and Full-Stack Engineering, turning complex challenges into cutting-edge solutions. Passionate about machine learning, cloud computing, and decentralized technologies, I thrive on innovation and problem-solving.'
export const EXPERIENCES = [
  {
    year: " May 2024 - Present",
    role: "React Developer",
    company: "Freelance",
    description: `Worked in a team developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Figma", "Figma-ui/ux"],
  },
  {
    year: "December 2022 - May 2024",
    role: "Product Manager",  
    company: "Ayten Studio",
    description: `Led a cross-functional team at Ayten Studio, driving the development and launch of multiple digital products from concept to delivery. Collaborated with design, development, and marketing teams to define product requirements, set priorities, and manage timelines. Facilitated stakeholder communication to align business goals with product strategy. Focused on team-building, ensuring smooth collaboration and continuous improvement of processes. Utilized soft skills such as teamwork, team management, and leadership to optimize team performance and deliver successful products.`,
    technologies: ["SoftSkills" , "Team Work", "Team Building" ,"Team Management"],
  },
  {
    year: "2021 - 2022",
    role: "Flutter Developer",
    company: "Kaarzan",
    description: `Developed and maintained web applications using Flutter, Django, and firebase.`,
    technologies: ["Flutter", "Firebase"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Farhaan",
    description: `Contributed to the development of applications using python. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Python", "QT5", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Machine Learning Projects",
    image: machineLearningImg, // Add a relevant image
    description:
      "A collection of Jupyter Notebook projects covering various machine learning concepts, from data preprocessing to model building and evaluation. This repository serves as an exploration of ML techniques and algorithms.",
    technologies: ["Python", "Jupyter Notebook", "Scikit-Learn", "TensorFlow", "Pandas"],
    link: "https://github.com/mitramansouri/machine-learning",
  },
  {
    title: "AI Agent Model - Telegram Bot Integration",
    image: aiTelegramBotImg, // Add a relevant image
    description:
      "A fork of the Eliza Mode Example with added functionality for integrating AI-driven actions into a Telegram bot client. Enhances chatbot capabilities with dynamic responses and intelligent interaction handling.",
    technologies: ["Python", "Shell Scripting", "Docker", "Telegram API"],
    link: "https://github.com/mitramansouri/eliza-mode-example",
  },
  {
    title: "Time booking system",
    image: projc,
    description:
      "An automated system that scrapes a website and quickly books available time slots. Built with React, Python, and Selenium, it ensures fast and efficient scheduling through continuous monitoring.",
    technologies: ["HTML", "CSS", "React", "python", "selenium", ],
  },
  {
    title: "FundMe",
    image: cyfrin,
    description:
      "This project is a Web3-based crowdfunding dApp built as part of the Cyfrin Updraft 'Remix Fund Me' course. It demonstrates the use of Solidity smart contracts to manage and interact with a decentralized funding system. ",
    technologies: [ "solidity"],
  },
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Investment calculator app",
    image: project3,
    description:
      "A website for calculating monthly interest of invested money.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Tic-Tac-Toe",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Klagenfurt am Worthesee, Carinthia, Austria  ",
  phoneNo: "+43 664 99061557",
  email: "mitramansouri78@gmail.com",
};
