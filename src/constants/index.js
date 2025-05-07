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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
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
    name: "TypeScript",
    icon: typescript,
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
];

const experiences = [
  {
    title: "Full Stack Developer (Intern)",
    company_name: "Systaldyn Consultancy Pvt Ltd",
    icon: starbucks,
    iconBg: "#383E56",
    date: "October 2023 - June 2024",
    points: [
      "Built and maintained web applications using React.js, Node.js, and related technologies to deliver user-focused solutions.",
      "Worked closely with designers and product managers to translate UI/UX designs into responsive, high-quality front-end interfaces.",
      "Assisted in deploying applications to cloud platforms, ensuring smooth releases and minimal downtime.",
      "Contributed to code reviews, enhancing team code quality through actionable feedback and adherence to best practices.",
    ],
  },
  {
    title: "Full Stack Developer (Full Time)",
    company_name: "Systaldyn Consultancy Pvt Ltd",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2024 - Present",
    points: [
      "Developed scalable web applications using React.js, Express.js, and modern backend frameworks to meet client requirements.",
      "Led end-to-end deployment processes, utilizing CI/CD pipelines and cloud services like AWS to ensure reliable application delivery.",
      "Collaborated with cross-functional teams to implement responsive designs and optimize cross-browser performance.",
      "Mentored junior developers and conducted thorough code reviews to maintain high standards and foster team growth.",
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
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Movie Review Website",
    description:
      "A web-based platform that enables users to watch movie trailers, rate their favorite films, and share reviews, fostering an engaging community for movie enthusiasts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/skp544/mern-movie-reiew-app.git",
  },
  {
    name: "Movie App",
    description:
      "A web application that allows users to explore trending movies, discover the latest releases, and preview upcoming films, providing a seamless movie-browsing experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/skp544/movie-app.git",
  },
  {
    name: "Dream Dwellings - A Real Estate Website",
    description:
      "A user-friendly real estate platform that allows users to search for properties, view detailed listings, and connect with agents, streamlining the home-buying process.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/skp544/Dream-Dwellings---A-Real-Estate-Marketplace.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
