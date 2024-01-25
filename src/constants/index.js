import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma
} from "../assets";
import  pipetech from "../assets/company/pipetech.jpg"
import  Yocket from "../assets/company/Yocket.png"
import  Alegria from "../assets/company/Alegria.jpg"
import  CSI from "../assets/company/CSI.png"
import  NGO from "../assets/company/NGO.jpg"
import  jio from "../assets/company/jio.png"
import  Weather from "../assets/Weather.png"
import  blog from "../assets/blog.jpeg"
import  fb from "../assets/fb.png"



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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "SEO development",
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  }
];

const experiences = [
  {
    title: "Frontend Web Developer",
    company_name: "Pipetech blog website",
    icon: pipetech,
    iconBg: "white",
    date: "May 2021",
    points: [
      "Worked on development of two of their websites along with random webpages along with hosting.",
    ],
  },
  {
    title: "SEO Web Developer Intern",
    company_name: "Yocket",
    icon: Yocket,
    iconBg: "orange",
    date: "12 Aug 2021 - 12 Nov 2021",
    points: [
      "Working on CMS along with analysis of some SEO content ,dealing with excel and website analysis.",
    ],
  },
  {
    title: "Frontend Web Developer Intern",
    company_name: "Alegria Website - Pillai College",
    icon: Alegria,
    iconBg: "#ffdbac",
    date: "Dec 2021-Feb 2021",
    points: [
      "Designed and developed webpages for website of college fest.",
    ],
  },
  {
    title: "Editor",
    company_name: "CSI_PCE",
    icon: CSI,
    iconBg: "WHITE",
    date: "Dec 2022-Mar 2023",
    points: [
      "Edited the entire tech magazine and publishing own article as well.",
    ],
  },
  {
    title: "Frontend Web Developer",
    company_name: "Ngo Website",
    icon: NGO,
    iconBg: "white",
    date: "May 2023",
    points: [
      "Api integration and website building in React.",
    ],
  },
  {
    title: "Jr Assistant Manager",
    company_name: "Jio",
    icon: jio,
    iconBg: "white",
    date: "Dec 2023 - Present",
    points: [
      "As an Assistant Manager at Jio Bond Team, I initially started my journey with the company in the capacity of a Graduate Engineer Trainee through the Jio Ignite program.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Being at a position that will contribute to mine as well as company's growth and being consistent to it. Enthusiastically accepting the chance that will be leveraging my learnings.",
    name: "CAREER OBJECTIVE:",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:[
      "PUBLICITY MEMBER (CSI 2020-21), CONTENT MANAGER (CSI 2021-22), EDITOR (CSI 2022-23)",
    ],
    name: "VOLUNTEER EXPERIENCE:",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Painting, Dancing, Conducted a workshop on game development using python in committee, Taking drawing classes since 3 years",
    name: "HOBBIES & EXTRA ACTIVITIES:",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Weather App",
    description:
      "Gives detailed information about the weather in a particular area on search of that location in search bar provided. The ui changes according to the weather of location and is made by fetching api through openweathermap.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: Weather,
    source_code_link: "https://github.com/",
  },
  {
    name: "BLOG Website",
    description:
      "Created a blogging website based on interior designing. Users read our updated blogs, like and review it and can search for various options. After signing in user can upload their individual blogs and that will be open for others to read and look into.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      }
    ],
    image: blog,
    source_code_link: "https://github.com/",
  },
  {
    name: "Flappy Bird",
    description:
      "Creating a basic Flappy Bird game in Python using a graphical library Pygame. Pygame provides functionalities for handling graphics, input events, and more, making it suitable for simple game development. ",
    tags: [
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "pygame",
        color: "pink-text-gradient",
      },
    ],
    image: fb,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
