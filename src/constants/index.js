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
  intuit,
  nityo,
  pixelBlend,
  portfolio,
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "certificates",
    title: "Certificates",
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
    icon: c1,
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
    icon: c3,
  }
];

const education = [
  // {
  //   logo: conestoga,
  //   college: "Conestoga College",
  //   degree: "Post Graduate Certificate",
  //   major: "Information Technology Network Security",
  //   duration: "Jan 2024 - Aug 2024",
  //   location: "Waterloo, Ontario",
  //   technologies: [],
  // },  
  {
    logo: conestoga,
    college: "Conestoga College",
    degree: "Post Graduate Certificate",
    major: "Cloud Computing and Network Security",
    duration: "Jan 2023 - Aug 2024",
    location: "Waterloo, Ontario",
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
    title: "Software Developer",
    company_name: "Intuit",
    icon: intuit,
    iconBg: "#383E56",
    date: "December 2022 - Present",
    stack: [javascript, typescript, reactjs, redux, aws, nodejs, tailwind, ec2, s3, dynamodb, amplify],
    points: [
      "Assisted in the development of web applications using JavaScript, HTML, CSS, and Vue JS, contributing to multiple successful project launches.",
      "Participated in Agile ceremonies and collaborated with product owners to refine user stories and acceptance criteria.",
      "Managed version control using Git and GitHub, ensuring code integrity and facilitating collaborative development.",
      "Developed database solutions using MongoDB and MySQL, optimizing data retrieval processes and enhancing application performance.",
      "Engaged in troubleshooting and debugging applications, improving overall system reliability.",
    ],
  },
  {
    title: "Junior Software Developer",
    company_name: "Nityo Infotech",
    icon: nityo,
    iconBg: "#E6DEDD",
    date: "October 2019 - November 2022",
    stack: [reactjs, redux, aws, docker, typescript, figma, postgres, ec2, lambda, api, cloud, cognito],
    points: [
      "Developed and maintained responsive web applications using React JS and Next JS, enhancing user experience and performance.",
      "Collaborated with cross-functional teams to implement RESTful APIs and microservices architecture, improving system scalability.",
      "Utilized AWS services such as EC2 and S3 for deploying applications and managing cloud storage, resulting in a 30% reduction in operational costs.",
      "Implemented CI/CD pipelines using Azure DevOps, streamlining the deployment process and reducing release times by 40%.",
      "Conducted unit testing and integration testing using Jest and Cypress, ensuring high-quality deliverables.",
    ],
  }
];

const projects = [
  {
    name: "PixelBlend Studio",
    description: [
      "Image manipulation with Cloudinary AI.",
      "Authentication with Clerk webhooks.",
      "Payment support with Stripe.",
      "Database management with MongoDB.",
      "Styled UI components with Shadcn."
    ],
    tags: [
      {
        name: "Cloudinary AI",
        color: "blue-text-gradient",
      },
      {
        name: "Stripe",
        color: "green-text-gradient",
      },
      {
        name: "Clerk",
        color: "pink-text-gradient",
      },
      {
        name: "Shadcn",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "NextJS",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: pixelBlend,
    source_code_link: "https://github.com/akash-verma-au16/PixelBlend-Studio",
    deployed_link: "https://pixel-blend-studio.vercel.app/",
  },
  {
    name: "3D Portfolio",
    description: [
      "3D rendered DOM objects with ThreeJS.",
      "Fluid animations with Framer-Motion.",
      "Email support with EmailJS.",
      "GitHub CI/CD with Gihub Actions.",
      "Styled UI components with Tailwind."
    ],
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "EmailJS",
        color: "blue-text-gradient",
      },
      {
        name: "Framer-Motion",
        color: "green-text-gradient",
      },
      {
        name: "Vite",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/akash-verma-au16/3D_Portfolio",
    deployed_link: "https://akash-verma-au16.github.io/3D_Portfolio/",
  },
];

export { services, technologies, education, certificates, experiences, projects };
