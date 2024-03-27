import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  postgres,
  aws,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "CareerNinja",
    icon: starbucks,
    iconBg: "#383E56",
    date: "January 2022 - December 2022",
    points: [
      "Spearheaded development of Android Native app using React Native, creating a seamless and enriching learning experience for users (100K+ downloads on Play Store).",
      "Developed multiple features for the comprehensive ed-tech platform using MERN stack, resulting in increased user engagement and reduced user churn.",
      "Collaborated with cross-functional teams to design, develop, and deploy features, resulting in increased user adoption and satisfaction.",
      "Optimized platform performance and managed security compliance, ensuring adherence to industry standards and regulations.",
      "Integrated third-party APIs to enhance website functionality and provide additional services to users.",
    ],
  },
  {
    title: "Full Stack Engineer",
    company_name: "Peakmind",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "August 2021 - January 2022",
    points: [
      "Spearheaded the creation of APIs in a Serverless backend with AWS Lambda and API Gateway, improving improved agility and cost-efficiency for the APIs.",
      "Implemented secure authentication and authorization mechanisms with AWS Cognito and IAM, ensuring compliance with industry standards and regulations.",
      "Optimized database queries to improve overall system performance with AWS RDS and S3, reducing latency in data access.",
      "Developed reusable code and libraries for future use, improving efficiency and reducing time spent on repetitive tasks.",
      "Streamlined development processes with the implementation of Scrum and Agile methodologies, aligning development cycles with business goals.",
    ],
  },
  {
    title: "Full Stack Developer Trainee",
    company_name: "AttainU",
    icon: shopify,
    iconBg: "#383E56",
    date: "November 2020 - August 2021",
    points: [
      "Developed user-friendly web forms with validation and error handling.",
      "Designed RESTful APIs for seamless integration between frontend components and backend services of web applications.",
      "Developed reusable code and libraries for future use, improving efficiency and reducing time spent on repetitive tasks.",
      "Performed unit testing of web applications and troubleshot issues.",
    ],
  },
  {
    title: "Junior Engineer",
    company_name: "Maersk Line",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "March 2019 - August 2020",
    points: [
      "Collaborated within a team of engineers for Engine Room Monitoring and Watchkeeping, ensuring seamless operations.",
      "Assisted in the installation of new marine engineering systems, improving overall ship functionality.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
