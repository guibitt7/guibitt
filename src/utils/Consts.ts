import { link } from "fs";

export const BRtime = new Intl.DateTimeFormat('pt-BR', {
    hour: 'numeric',
    minute: 'numeric'
  })

export const USER_ID = process.env.discordUserId || "422103990214459412";
 
export const github_url = "https://github.com/guibitt7";
export const linkedin_url = "https://www.linkedin.com/in/guibitt7/";
export const spotify_url = "https://open.spotify.com/user/dsq8wmtxpqd87at48fbb2rgfb";
export const discord_url = "https://discord.com/users/422103990214459412";
export const instagram_url = "https://instagram.com/guibi.tt";
export const email_url = "mailto:guilhermebittencourtdasilva@gmail.com";


export const projects = [
  {
    name: "Portifolio",
    description: "My personal site. The site you’re visiting was built with TypeScript, Next.js, Tailwind CSS, and Three.js, incorporating clean architecture and object-oriented programming principles. This approach ensures a scalable, maintainable, and high-performance web experience, reflecting modern best practices in web development. 😊",
    status: "Completed",
    technologies: [
      {
        label: "TypeScript",
        icon: "/Tech/TypeScript.png"
      },
      {
        label: "Next.js",
        icon:"/Tech/Next.js.png"
      },
      {
        label: "TailwindCSS",
        icon: "/Tech/Tailwind CSS.png"
      },
      {
        label: "Three.js.png",
        icon: "/Tech/Three.js.png"
      }
    ],
    cover: "/Projects/portifolio.png",
    link:  "https://github.com/guibitt7/Portifolio"
  },
  {
    name: "TCC(Final Paper)",
    description: "I’m creating a mobile app for managing a university athletic association. Using Laravel for the API and Flutter for the interface, the app will improve student engagement and participation in extracurricular activities. It covers API setup, user authentication, and features like member registration and event viewing.",
    status: "In Progress",
    technologies: [
      {
        label: "PHP",
        icon: "/Tech/PHP.png"
      },
      {
        label: "Laravel",
        icon: "/Tech/Laravel.png"
      },
      {
        label: "Flutter",
        icon: "/Tech/Flutter.png"
      },
      {
        label: "PostgreSQL",
        icon: "/Tech/PostgresSQL.png"
      },
      {
        label: "Redis",
        icon: "/Tech/Redis.png"
      },
      {
        label: "Docker",
        icon: "/Tech/Docker.png"
      },
    ],
    cover: "/Projects/inprogress.jpg",
    link: "#"
  },
  {
    name: "Guarapuava Social Assistance",
    description: "A web-based system integrated for the Department of Social Assistance and Development, which organizes and disseminates information about social assistance entities and their events. The site allows users to read news and enables the administration to add and manage entities and related news.",
    status: "Completed",
    technologies: [
      {
        label: "PHP",
        icon: "/Tech/PHP.png"
      },
      {
        label: "Laravel",
        icon: "/Tech/Laravel.png"
      },
      {
        label: "TailwindCSS",
        icon: "/Tech/Tailwind CSS.png"
      },
      {
        label: "Docker",
        icon: "/Tech/Docker.png"
      },
      {
        label: "MySQL",
        icon: "/Tech/MySQL.png"
      },
    ],
    cover: "/Projects/assistSocial.png",
    link:  "https://github.com/guibitt7/Projeto-Assistencia-Social"
  },
  {
    name: "MusicApp using Flutter",
    description: "MusicSound is a Flutter-based music app that offers an intuitive interface for local music playback. It features a modern design and will soon integrate with the Spotify API and Firebase to enhance functionality and connectivity with popular music platforms and cloud services.",
    status:"Complete with plans for future improvements",
    technologies: [
      {
        label: "Flutter",
        icon: "/Tech/Flutter.png"
      },
      {
        label: "Dart",
        icon: "/Tech/Dart.png"
      }
    ],
    cover: "/Projects/appmusic.png",
    link: "https://github.com/guibitt7/ProvaWebIII"
  },
  {
    name: "Department store with Mercado Livre API",
    description: "Project of a department store where I use the Mercado Livre API to search for products, with the ability to add them to localStorage. For future improvements, I plan to connect it to PostgreSQL and enhance the application's front-end.",
    status: "Complete with plans for future improvements",
    technologies: [
      {
        label: "React",
        icon: "/Tech/React.png"
      },
      {
        label: "JavaScript",
        icon: "/Tech/JavaScript.png"
      },
      {
        label: "CSS",
        icon: "/Tech/CSS3.png"
      }
    ],
    cover: "/Projects/LojaML.png",
    link: "https://github.com/guibitt7/proj-mlapi"
  },
  {
    name: "JEG Store",
    description: "A store built with Laravel, Tailwind, MariaDB, and phpMyAdmin, enabling admins to manage products, prices, and sales, and users to make purchases with full validation. It incorporates API consumption via Jetstream, PHP OOP, PDO for database connections, Ajax for asynchronous tasks, and follows the MVC architecture.",
    status: "Completed",
    technologies: [
      {
        label: "PHP",
        icon: "/Tech/PHP.png"
      },
      {
        label: "Laravel",
        icon: "/Tech/Laravel.png"
      },
      {
        label: "TailwindCSS",
        icon: "/Tech/Tailwind CSS.png"
      },
      {
        label: "MySQL",
        icon: "/Tech/MySQL.png"
      }
    ],
    cover: "/Projects/LojaPhp.png",
    link: "https://github.com/guibitt7/proj-lojajeg"
  },
  {
    name: "Software Quality Assurance (QA)",
    description: "In this project, we conducted automated tests for our Web Development course project as part of the QA exam using Cypress. Cypress is a modern end-to-end testing framework that offers fast, reliable testing with features like real-time browser preview and easy debugging.",
    status: "Completed",
    technologies: [
      {
        label: "JavaScript",
        icon: "/Tech/JavaScript.png"
      },
      {
        label: "Cypress",
        icon: "/Tech/Cypress (1).png"
      }
    ],
    cover: "/Projects/cypress.png",
    link: "https://github.com/guibitt7/prova-QA"
  }
];




