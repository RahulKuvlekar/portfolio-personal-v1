import {
  Project1,
  Project2,
  Project3,
  Project4,
  Project5,
} from "../Assets/Projects";
import {
  bootstrap,
  css,
  express,
  figma,
  firestore,
  git,
  github,
  html,
  javascript,
  mongodb,
  nextjs,
  nodejs,
  postman,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
  univ,
} from "../Assets/icons";

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        image: html,
      },
      {
        name: "CSS",
        image: css,
      },
      {
        name: "SASS",
        image: sass,
      },
      {
        name: "JavaScript",
        image: javascript,
      },
      {
        name: "TypeScript",
        image: typescript,
      },
      {
        name: "React Js",
        image: react,
      },
      {
        name: "Next Js",
        image: nextjs,
      },
      {
        name: "Redux",
        image: redux,
      },
      {
        name: "Tailwind CSS",
        image: tailwindcss,
      },
      {
        name: "Bootstrap",
        image: bootstrap,
      },
      {
        name: "Material UI",
        image:
          "data:image/png;base64,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",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: nodejs,
      },
      {
        name: "Express Js",
        image: express,
      },
      // {
      //   name: "Graph Ql",
      //   image: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
      // },
      // {
      //   name: "Python",
      //   image:
      //     "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      // },
      // {
      //   name: "MySQL",
      //   image:
      //     "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      // },
      // {
      //   name: "Postgresql",
      //   image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      // },
      {
        name: "MongoDB",
        image: mongodb,
      },
      {
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
      {
        name: "Firestore",
        image: firestore,
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image: git,
      },
      {
        name: "GitHub",
        image: github,
      },
      // {
      //   name: "Docker",
      //   image:
      //     "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      // },
      {
        name: "Netlify",
        image:
          "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image: postman,
      },
      // {
      //   name: "Adobe XD",
      //   image:
      //     "https://camo.githubusercontent.com/c205ecbe12500177d102169d97bc1c17c545155fdf5ec78c08d54ac53e5b38c1/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f61646f62652d78642e737667",
      // },
      {
        name: "Figma",
        image: figma,
      },
    ],
  },
];

export const experiences = [
  {
    title: "Software Developer",
    company_name: "UNIV.AI",
    icon: univ,
    iconBg: "#accbe1",
    date: "January 2022 - Present",
    points: [
      {
        title: "Job Portal Development : ",
        desc: "Engineered a dynamic job portal by integrating REST API’s for real-time job listings. Implemented advanced features such as sorting, filtering, and dynamic job application processes. Enabled seamless student job applications",
      },
      {
        title: "Subscription Model : ",
        desc: "Implemented a comprehensive a subscription management system where users could easily view available subscription plans and their respective features provided by the company. Additionally, integrated a secure payment gateway to facilitate the purchase of subscriptions.",
      },
      {
        title: "Project Migration : ",
        desc: "Led the migration from React 16 to Next.js 13 for a highly responsive and performant web application, ensuring seamless navigation and user experience.",
      },
      {
        title: "Authentication : ",
        desc: "Integrated Google, GitHub APIs, and custom email authentication for robust user access control.",
      },
      {
        title: "Admin Panel Development : ",
        desc: "Designed a user-friendly admin panel enabling course management, including CRUD operations.",
      },
      {
        title: "Certification System : ",
        desc: "Built a dynamic certificate generation and validation system.",
      },
      {
        title: "Dashboard Widgets : ",
        desc: "Crafted intuitive widgets for events and job progress statistics.",
      },
      {
        title: "Referral System : ",
        desc: "Developed a referral system to stimulate user growth and engagement.",
      },
      {
        title: "User Feedback System : ",
        desc: "Established a feedback mechanism to drive system improvements.",
      },
      {
        title: "Dynamic User Profiles : ",
        desc: "Enhanced user profiles for increased personalization.",
      },
      {
        title: "UI Enhancements : ",
        desc: "Resolved UI issues and introduced system-wide dark mode for a consistent user experience.",
      },
      {
        desc: "Collaborated closely with UI/UX designers to ensure a visually appealing and user-friendly interface, adhering to design guidelines and branding requirements.",
      },
    ],
  },
];

export const PROJECTS = [
  {
    id: 111,
    title: "Shoes Store",
    img: Project1,
    desc: "Developed an e-commerce application using React.js, vanilla CSS, React Bootstrap, and Firebase, providing a user-friendly platform for online product purchasing. Implemented features for visitors to browse, search, and sort available products, while registered members enjoy the convenience of purchasing multiple items with flexible payment options, including cash on delivery and online payments",
    viewCode: "https://github.com/RahulKuvlekar/shoes-store",
    liveApp: "https://shoes-store-rk.netlify.app",
    tags: [
      "React",
      "Context API",
      "Vanilla CSS",
      "React Bootstrap",
      "Firebase",
      "Firestore",
    ],
  },
  {
    id: 222,
    title: "Social Talks",
    img: Project2,
    desc: "Developed a social networking application using React.js, Redux, Vanilla CSS, and Firebase, facilitating the sharing of ideas, thoughts, and information within virtual communities. Empowered members to create and delete posts, upload, and share your posts, fostering an interactive and engaging online community.",
    viewCode: "https://social-talks-rk.netlify.app",
    liveApp: "",
    tags: [
      "React",
      "Redux",
      "Redux-Toolkit",
      "Vanilla CSS",
      "Firebase",
      "Firestore",
    ],
  },
  {
    id: 333,
    title: "Quiz Games",
    img: Project3,
    desc: "Developed an engaging Quiz Games app using ReactJS, providing users with a fun and interactive platform to test and enrich their knowledge on Marvel and DC Comics characters. Implemented user-friendly features to create an enjoyable quiz experience centered around superhero themes.",
    viewCode: "https://github.com/RahulKuvlekar/quiz-games",
    liveApp: "https://quizgames-rk.netlify.app",
    tags: [
      "React",
      "Context API",
      "Vanilla CSS",
      "React Bootstrap",
      "Firebase",
      "Firestore",
    ],
  },
  {
    id: 444,
    title: "Video Library Store",
    img: Project4,
    desc: "Developed and implemented robust authentication, login, and signup features for a video library store app, ensuring secure access and personalized user experiences.Engineered an intuitive and feature-rich video management system, including dynamic video listing, category-based product filtering, playlist management, likes/dislikes functionality, and comprehensive user history tracking for enhanced user engagement and satisfaction.",
    viewCode: "https://github.com/RahulKuvlekar/video-library-store",
    liveApp: "https://video-library-store-rk.netlify.app",
    tags: ["React", "Context API", "Vanilla CSS", "mockman-js"],
  },
  {
    id: 555,
    title: "Component Library",
    img: Project5,
    desc: "Engineered a custom HTML, CSS and JavaScript component library, accelerating UI development with reusable components for faster project timelines and enhanced design consistency. Led the design and implementation of a modular component library, optimizing code reusability and maintenance to ensure visually appealing and responsive UI across diverse applications.",
    viewCode: "https://github.com/RahulKuvlekar/ComponentLibrary",
    liveApp: "https://component-library-rk.netlify.app",
    tags: ["HTML", "CSS", "JavaSript"],
  },
];
