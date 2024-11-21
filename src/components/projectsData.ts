// Define project types and mock data
export type ProjectCategory = "All" | "Websites" | "Applications" | "Mobile";

export interface Project {
  title: string;
  description: string;
  image: string;
  images: string[];
  height: string;
  category: ProjectCategory;
  techStack: string[];
  demoLink: string;
  githubLink: string;
  duration: string;
  achievements: string[];
  longer_description: string;
}

export const projects: Project[] = [
  // *********************************************
  // AGTIA
  // *********************************************
  {
    title: "Agtia",
    description:
      "AGTIA is a <span style='font-weight: bold;'>microservice-based</span> to-do app with task management, subtasks, and task insights.",
    image: "../../assets/Agtia/3Agtia.png",
    images: [
      "../../assets/Agtia/1Agtia.png",
      "../../assets/Agtia/2Agtia.png",
      "../../assets/Agtia/3Agtia.png",
      "../../assets/Agtia/4Agtia.png",
      "../../assets/Agtia/5Agtia.png",
      "../../assets/Agtia/6Agtia.png",
      "../../assets/Agtia/7Agtia.png",
    ],
    height: "400px",
    category: "Websites",
    techStack: [
      "Reactjs",
      "Nodejs",
      "ExpressJs",
      "MongoDB",
      "JavaScript",
      "Git",
      "Github",
      "Redux",
      "Figma",
    ],
    demoLink: "https://demo.com",
    githubLink: "https://github.com/Med-1-Amine-9-Chakroun/AGTIA",
    duration: "2 Months",
    achievements: [
      "Developed using a microservice architecture for better scalability and maintainability.",
      "Implemented drag-and-drop functionality to move tasks between 'To Do', 'Doing' and 'Done' lists.",
      "Enabled users to add and modify tasks and subtasks with ease.",
      "Integrated a calendar view to display tasks by date for better planning.",
      "Created a dashboard to visualize task-related insights using interactive charts.",
      "Designed a user-friendly interface for a seamless task management experience.",
    ],
    longer_description:
      "AGTIA is a <span style='font-weight: bold;'>microservice-based</span> to-do application that helps users manage their tasks efficiently with features like drag-and-drop task management, subtasks, a calendar view, and a dashboard displaying task insights through charts.",
  },
  // *********************************************
  // DOG STORE
  // *********************************************
  {
    title: "Pawpedia",
    description:
      "Pawpedia is a React Native app that lets users explore dog breeds and view detailed information.",

    image: "../../assets/DogStore/1.png",
    images: [
      "../../assets/DogStore/1.png",
      "../../assets/DogStore/2.png",
      "../../assets/DogStore/3.png",
    ],
    height: "400px",
    category: "Mobile",
    techStack: ["React Native", "The Dog API", "Git", "Github"],
    demoLink: "https://demo.com",
    githubLink: "https://github.com/Med-1-Amine-9-Chakroun/online-dog-show",
    duration: "1 Week",
    achievements: [
      "Integrated the Dog API to fetch and display dog breed data dynamically.",
      "Implemented smooth scrolling to load more dog breeds as the user navigates through the list.",
      "Created a detailed view for each dog breed, showcasing unique characteristics and images.",
      "Designed a mobile-friendly and visually appealing interface for a seamless user experience.",
    ],
    longer_description:
      "Pawpedia is a React Native app that lets users explore dog breeds and view detailed information.",
  },

  // *********************************************
  // GYM TRACKER
  // *********************************************
  {
    title: "Gym Tracker",
    description:
      "GymTracker lets users log in and track workouts, including exercises, sets, and progress.",
    image: "../../assets/GymTracker/3Gym.png",
    images: [
      "../../assets/GymTracker/1Gym.png",
      "../../assets/GymTracker/2Gym.png",
      "../../assets/GymTracker/3Gym.png",
    ],
    category: "Websites",
    height: "400px",
    techStack: [
      "Reactjs",
      "Nodejs",
      "JavaScript",
      "Redux",
      "MongoDb",
      "Git",
      "Github",
    ],
    demoLink: "https://demo.com",
    githubLink: "https://github.com/Med-1-Amine-9-Chakroun/Gym-Tracker",
    duration: "1 Week",
    achievements: [
      "User authentication with sign-up and login functionality.",
      "Ability to log and track workouts with detailed data (sets, reps, weight).",
      "View workout history and track progress over time.",
      "User-friendly interface for easy workout management.",
      "Data stored securely.",
    ],
    longer_description:
      "GymTracker is an app that allows users to create an account, log in, and track their workouts efficiently. It helps users keep track of exercises, sets, reps, and progress over time.",
  },

  // *********************************************
  // PHARMIN
  // *********************************************
  {
    title: "Pharmin",
    description:
      "Pharmint is a pharmacy management app for tracking medications and containers, with user login and sign-up features.",
    image: "../../assets/Pharmin/1Pharmin.png",
    images: [
      "../../assets/Pharmin/1Pharmin.png",
      "../../assets/Pharmin/2Pharmin.png",
      "../../assets/Pharmin/3Pharmin.png",
      "../../assets/Pharmin/4Pharmin.png",
    ],
    category: "Websites",
    height: "400px",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    demoLink: "https://demo.com",
    githubLink: "https://github.com/Med-1-Amine-9-Chakroun/Pharmin",
    duration: "3 Weeks",
    achievements: [
      "User authentication with login and signup functionality.",
      "Manage medications and their details (name, dosage, etc.).",
      "Manage containers and their respective details (size, quantity, etc.).",
      "Intuitive interface for easy inventory management.",
      "Secure data storage for medications and containers.",
    ],
    longer_description:
      "Pharmint is a pharmacy management app that allows users to log in, sign up, and manage medications and their respective containers. The app is designed to help pharmacies efficiently organize and track medications and containers.",
  },

  // *********************************************
  // SEA MASTER
  // *********************************************

  {
    title: "SeaMaster",
    description:
      "Sea Master is a desktop app for managing fishing vessel finances, including invoices and reports.",
    image: "../../assets/SeaMaster/1.png",
    images: [
      "../../assets/SeaMaster/1.png",
      "../../assets/SeaMaster/2.png",
      "../../assets/SeaMaster/3.png",
      "../../assets/SeaMaster/4.png",
      "../../assets/SeaMaster/5.png",
      "../../assets/SeaMaster/6.png",
    ],
    category: "Applications",
    height: "400px",
    techStack: ["Python", "QtDesigner", "Sqlite3", "FPDF"],
    demoLink: "https://demo.com",
    githubLink: "",
    duration: "2 Months",
    achievements: [
      "Vessel management: Add vessels and manage their information.",
      "Employee management: Add employees to each vessel and manage their data.",
      "Invoice management: Record invoices for each vessel and distribute costs accordingly.",
      "Final report generation: Generate final reports with recorded data and shared invoices.",
      "User-friendly interface: Provide an intuitive interface for managing the finances of fishing vessels.",
      "Secure system: Ensure secure storage of financial and personal information.",
    ],
    longer_description:
      "Sea Master is a desktop app designed for accountants to manage the finances of fishing vessels. It allows users to add vessels, associate employees with each vessel, input invoices, and generate final reports, including a shared breakdown and a final invoice.",
  },

  // *********************************************
  // RAPIDO
  // *********************************************

  {
    title: "Rapido",
    description:
      "Rapido is a desktop app for admins to manage deliveries, drivers, and vehicles.",
    image: "../../assets/Rapido/2.png",

    images: [
      "../../assets/Rapido/1.png",
      "../../assets/Rapido/2.png",
      "../../assets/Rapido/3.png",
      "../../assets/Rapido/4.png",
      "../../assets/Rapido/5.png",
      "../../assets/Rapido/6.png",
      "../../assets/Rapido/7.1.png",
      "../../assets/Rapido/7.2.png",
      "../../assets/Rapido/8.png",
      "../../assets/Rapido/9.png",
    ],
    category: "Applications",
    height: "400px",
    techStack: ["Python", "QtDesigner", "Firebase"],
    demoLink: "https://demo.com",
    githubLink: "",
    duration: "3 Months",
    achievements: [
      "User authentication: Admin sign-up and sign-in functionality.",
      "Vehicle management: Add and manage available vehicles for deliveries.",
      "Driver management: Add and manage drivers for deliveries.",
      "Delivery assignment: Assign available drivers and vehicles to deliveries.",
      "Delivery tracking: Visualize the status of deliveries.",
      "Company management: Track companies receiving the shipments.",
      "User-friendly interface for efficient management of logistics.",
    ],
    longer_description:
      "Rapido is a desktop app that allows admins to sign up, sign in, and manage vehicles, delivery drivers, and shipments. It enables assigning available drivers and vehicles to deliveries, visualizing delivery status, and tracking the companies that the shipments are being delivered to.",
  },

  // *********************************************
  // ONLYCODE
  // *********************************************

  {
    title: "OnlyCode",
    description:
      "Code Only is a desktop app that counts code lines, comments, and empty lines in a file.",
    image: "../../assets/OnlyCode/1.png",
    images: ["../../assets/OnlyCode/1.png"],
    category: "Applications",
    height: "400px",
    techStack: ["Python", "QtDesigner"],
    demoLink: "https://demo.com",
    githubLink: "https://github.com/Med-1-Amine-9-Chakroun/CodeMeter",
    duration: "5 Days",
    achievements: [
      "File selection for code files.",
      "Count and display the number of code lines.",
      "Count and display the number of comment lines.",
      "Count and display the number of empty lines.",
      "User-friendly interface to easily upload and analyze code files.",
    ],
    longer_description:
      "Code Only is a desktop app that allows users to select a code file and provides a summary of the file's content, including the number of code lines, comments, and empty lines.",
  },

  // *********************************************
  // PLANT STORE
  // *********************************************

  {
    title: "Plant Store",
    description:
      "Plant Store is a web app for browsing and adding plants to the cart.",
    image: "../../assets/PlantStore/PlantStore.png",
    images: ["../../assets/PlantStore/PlantStore.png"],
    category: "Websites",
    height: "400px",
    techStack: ["Reactjs", "CSS", "LocalStorage"],
    demoLink: "https://demo.com",
    githubLink: "https://github.com/Med-1-Amine-9-Chakroun/PlantStore",
    duration: "1 Week",
    achievements: [
      "Browse Plants: Display a list of plants available for purchase.",
      "Filter Plants: Allow users to filter plants by categories (e.g., type, size, etc.).",
      "Add to Cart: Enable users to add selected plants to their cart.",
    ],
    longer_description:
      "Plant Store is a web app that enables users to explore a variety of plants, filter them by category, and add their favorites to the shopping cart for a seamless shopping experience.",
  },

  // *********************************************
  // TODO APP
  // *********************************************

  {
    title: "ToDo App",
    description: "Mobile application for tracking workouts and nutrition",
    image: "../../assets/ToDoApp/ToDoApp.png",
    images: ["../../assets/ToDoApp/ToDoApp.png"],
    category: "Websites",
    height: "400px",
    techStack: ["Reactjs", "JavaScript", "CSS"],
    demoLink: "https://demo.com",
    githubLink: "https://github.com/Med-1-Amine-9-Chakroun/ToDoList",
    duration: "1 Day",
    achievements: [
      "Add new tasks to the list.",
      "Mark tasks as completed by checking them off.",
      "Remove tasks from the list when they are no longer needed.",
      "Display tasks in a simple and clean interface.",
    ],
    longer_description:
      "To Do App is a simple task management app that allows users to add, check, or remove tasks easily, helping them stay organized and on track.",
  },
];
