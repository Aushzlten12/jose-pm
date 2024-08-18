import { FaXTwitter, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiMongodb,
  SiMysql,
  SiFlutter,
  SiTailwindcss,
  SiLeetcode,
  SiAstro,
  SiRubyonrails,
} from "react-icons/si";
import { FaNodeJs, FaPython } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "JOSE PM",
  greet: "Hi 👋🏻",
  description:
    "I am a Computer Science student and a passionate FullStack developer. I enjoy building new projects using JavaScript frameworks and have a keen interest in reading articles about Artificial Intelligence.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/Aushzlten12/jose-pm",
  },
  {
    id: 2,
    name: "Airbnb Clone",
    description:
      "An clone of Airbnb using Next.js, TailwindCSS, Prisma and Stripe.",
    image: projectImage2,
    githubLink: "https://github.com/Aushzlten12/Airbnb",
  },
  {
    id: 3,
    name: "Rent Cars",
    description:
      "An app to rent cars using Next.js, TailwindCSS, Clerk and Stripe.",
    image: projectImage3,
    githubLink: "https://github.com/Aushzlten12/renta-carros",
  },
  {
    id: 4,
    name: "Mundo Quechua",
    description: "An app to learn Quechua of interactive and funny way.",
    image: projectImage4,
    githubLink: "https://github.com/Aushzlten12/MundoQuechua",
  },
  {
    id: 5,
    name: "Spotify Clone",
    description:
      "Spotify Clone using Clear Architecture in Flutter and Firebase",
    image: projectImage5,
    githubLink: "https://github.com/Aushzlten12/spotify-android",
  },
];

export const BIO = [
  "Jose PM is currently pursuing a Bachelor of Science in Computer Science at the Universidad Nacional de Ingenieria, with a keen focus on becoming a FullStack developer. Throughout his academic journey, Jose has actively sought to deepen his knowledge by attending specialized courses and independently developing personal applications that showcase his growing expertise",
  "His university coursework has provided him with hands-on experience in various domains, including Artificial Intelligence, Software Development, and Computer Graphics, where he has successfully completed projects that demonstrate his proficiency in both front-end and back-end technologies",
  "Jose PM is passionate about creating efficient and user-friendly applications and is continuously expanding his skill set to stay at the forefront of the ever-evolving tech industry.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "1+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "1 year",
  },
  {
    icon: <SiAstro className="text-4xl text-white lg:text-5xl" />,
    name: "Astro.js",
    experience: "1 year",
  },
  {
    icon: <SiRubyonrails className="text-4xl text-orange-700 lg:text-4xl" />,
    name: "Ruby on Rails",
    experience: "1 year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "1+ years",
  },
  {
    icon: <FaPython className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "Python",
    experience: "1+ year",
  },
  {
    icon: <SiFlutter className="text-4xl text-sky-300 lg:text-5xl" />,
    name: "Flutter",
    experience: "0.5 year",
  },
  {
    icon: <SiTailwindcss className="text-4xl text-sky-400 lg:text-5xl" />,
    name: "TailwindCSS",
    experience: "+1 year",
  },
  {
    icon: <SiMysql className="text-4xl text-white lg:text-5xl" />,
    name: "MySql",
    experience: "1.5+ year",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "1.5+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1+ years",
  },
];

export const EXPERIENCES = [
  {
    title: "Tutor for a Database Course",
    company: "Universidad Nacional de Ingenieria",
    duration: "March 2024 - July 2024",
    description:
      "As a tutor for the Database course, I was responsible for guiding students through complex topics in both SQL and NoSQL databases. My role involved not only explaining theoretical concepts but also providing practical exercises that reinforced their understanding. I designed and conducted review sessions, where I broke down difficult subjects such as database normalization, indexing, and query optimization",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Universidad Nacional de Ingenieria",
    duration: "June 2020 - Present",
    description:
      "Currently pursuing a Bachelor of Science in Computer Science with a focus on developing a solid foundation in software engineering, data analysis, and computational theory. Throughout the program, I have gained experience in various programming languages, including Python, Java, and C++, and have engaged in multiple academic projects that involve problem-solving and the application of complex algorithms.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/auzhlten12",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://discord.com/users/1018786280236134420",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/Aushzlten12",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/josepachasm/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://leetcode.com/u/Aushzlten12/",
    icon: <SiLeetcode fontSize={25} className="hover:opacity-80" />,
  },
];
