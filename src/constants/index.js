import {
  native,
  backend,
  cloudCompute,
  frontend,
  javascript,
  typescript,
  postgres,
  aws,
  s3,
  ec2,
  lambda,
  dynamodb,
  cognito,
  api,
  cloud,
  amplify,
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
  attainu,
  careerninja,
  peakmind,
  maersk,
  learntube,
  carrent,
  jobit,
  tripguide,
  conestoga,
  bits,
  c1,
  c2,
  c3,
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
    id: "education",
    title: "Education",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "certificates",
    title: "Certificates",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const certificates = [
  {
    credential_id: "3729587",
    title: "Deploy and Manage Cloud Environments with Google Cloud",
    org: "Google Cloud Skills Boost",
    issue_date: "May 2023",
    url: "https://www.cloudskillsboost.google/public_profiles/92814e4f-a785-4e23-87e4-0a728cb08a77/badges/3729587?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    icon: c3,
  },  
  {
    credential_id: "3679201",
    title: "Perform Foundational Infrastructure Tasks in Google Cloud",
    org: "Google Cloud Skills Boost",
    issue_date: "May 2023",
    url: "https://www.cloudskillsboost.google/public_profiles/92814e4f-a785-4e23-87e4-0a728cb08a77/badges/3679201?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    icon: c2,
  },
  {
    credential_id: "3676231",
    title: "Google Cloud Essentials",
    org: "Google Cloud Skills Boost",
    issue_date: "May 2023",
    url: "https://www.cloudskillsboost.google/public_profiles/92814e4f-a785-4e23-87e4-0a728cb08a77/badges/3676231?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    icon: c1,
  }
];

const education = [
  {
    logo: conestoga,
    college: "Conestoga College",
    degree: "Post Graduate Certificate",
    major: "Information Technology Network Security",
    duration: "Jan 2024 - Aug 2024",
    location: "Waterloo, Ontario, Canada",
    technologies: [],
  },  
  {
    logo: conestoga,
    college: "Conestoga College",
    degree: "Post Graduate Certificate",
    major: "Virtualization and Cloud Computing",
    duration: "Jan 2023 - Aug 2023",
    location: "Waterloo, Ontario, Canada",
    technologies: [],
  },  
  {
    logo: bits,
    college: "Birla Institute of Technology, Pilani",
    degree: "Bachelor of Technology",
    major: "Marine Engineering",
    duration: "Aug 2015 - Aug 2019",
    location: "Pune, Maharashtra",
    technologies: [],
  }  
];

const services = [
  {
    title: "Front-end Developer",
    icon: frontend,
  },
  {
    title: "Back-end Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: native,
  },
  {
    title: "Cloud Developer",
    icon: cloudCompute,
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
    company_link: "https://www.linkedin.com/company/careerninja/",
    icon: careerninja,
    iconBg: "#383E56",
    date: "January 2022 - December 2022",
    playstore:"https://play.google.com/store/apps/details?id=com.learntube&hl=en_US",
    app: learntube,
    stack: [javascript, typescript, reactjs, redux, aws, nodejs, tailwind, ec2, s3, dynamodb, amplify],
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
    company_link: "https://www.linkedin.com/company/peakmind-in/",
    icon: peakmind,
    iconBg: "#E6DEDD",
    date: "August 2021 - January 2022",
    stack: [reactjs, redux, aws, docker, typescript, figma, postgres, ec2, lambda, api, cloud, cognito],
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
    company_link: "https://www.linkedin.com/company/attainu/",
    icon: attainu,
    iconBg: "#383E56",
    date: "November 2020 - August 2021",
    stack: [html, css, reactjs, nodejs, mongodb, git],
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
    company_link: "https://www.linkedin.com/company/maersk-line-limited/",
    icon: maersk,
    iconBg: "#E6DEDD",
    date: "March 2019 - August 2020",
    stack: [],
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

export { services, technologies, education, certificates, experiences, testimonials, projects };
