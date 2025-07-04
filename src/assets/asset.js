import portfolioLogo from "./logo/portfolio-logo.png";
import profilePic from "./logo/profile-pic.png";
import expImgWhite from "./experience/expImgWhite.svg";
import expImgBlack from "./experience/expBlack.svg";

// technology - programming logo
import css from "./technology/css.svg";
import html from "./technology/html.svg";
import java from "./technology/java.svg";
import javascript from "./technology/javascript.svg";
import mongodb from "./technology/mongoDB.svg";
import mysql from "./technology/mysql.svg";
import nodejs from "./technology/nodejs.svg";
import react from "./technology/react.svg";
import springboot from "./technology/spring-boot.svg";
import spring from "./technology/spring.svg";
import git from "./technology/git.svg";
import tailwind from "./technology/tailwind.svg";
import postman from "./technology/postman.svg";
import github from "./technology/github.svg";
import live from "./technology/live.png";

// top projects images
import Calculator from "./top-project/calculator.png";
import TravelList from "./top-project/travel-list.png";
import MusicPlayerLevel2 from "./top-project/music-player-2.png";
import MusicPlayerLevel1 from "./top-project/music-player-1.png";
import ImageCarousel1 from "./top-project/image-carousel-1.png";
import ImageCarousel2 from "./top-project/image-carousel-2.png";

export const assets = {
  portfolioLogo,
  profilePic,
};

export const exp = {
  expImgWhite,
  expImgBlack,
};

export const experienceData = [
  {
    id: 1,
    company: "Wissen Infotech",
    jobtitle: "Junior Software Developer",
    startYear: "2022",
    endYear: "2024",
  },
];

export const skillsData = [
  {
    id: 1,
    name: "Java",
    image: java,
  },
  {
    id: 2,
    name: "Spring",
    image: spring,
  },
  {
    id: 3,
    name: "Spring Boot",
    image: springboot,
  },
  {
    id: 5,
    name: "JavaScript",
    image: javascript,
  },
  {
    id: 6,
    name: "React",
    image: react,
  },
  {
    id: 7,
    name: "Node JS",
    image: nodejs,
  },
  {
    id: 8,
    name: "HTML",
    image: html,
  },
  {
    id: 9,
    name: "CSS",
    image: css,
  },
  {
    id: 10,
    name: "MySQL",
    image: mysql,
  },
  {
    id: 11,
    name: "Mongo DB",
    image: mongodb,
  },
  {
    id: 12,
    name: "GIT",
    image: git,
  },
  {
    id: 13,
    name: "Tailwind",
    image: tailwind,
  },
  {
    id: 14,
    name: "Postman",
    image: postman,
  },
];

export const topProjects = [
  {
    title: "Travel List",
    description:
      "Create a Web page to display the name of six cities with different headings. Write minimum five sentences for each city. Refer the following image.",
    image: TravelList,
    view: {
      liveLink: "https://kira-travel-list.netlify.app/",
      gitLink: "https://github.com/KiraCode/travel-list",
      gitIcon: github,
      liveIcon: live,
    },
    icons: [
      {
        name: "Html",
        src: html,
      },
      {
        name: "Css",
        src: css,
      },
      {
        name: "Javascript",
        src: javascript,
      },
      {
        name: "React",
        src: react,
      },
    ],
  },
  {
    title: "Music Player",
    description:
      "Create a Web page to display the name of six cities with different headings. Write minimum five sentences for each city. Refer the following image.",
    image: MusicPlayerLevel2,
    view: {
      liveLink: "https://kira-music-player-level2.netlify.app/",
      gitLink: "https://github.com/KiraCode/music-player-level2",
      gitIcon: github,
      liveIcon: live,
    },
    icons: [
      {
        name: "Html",
        src: html,
      },
      {
        name: "Css",
        src: css,
      },
      {
        name: "Javascript",
        src: javascript,
      },
    ],
  },
  {
    title: "Simple Music Player",
    description:
      "Create a Web page to display the name of six cities with different headings. Write minimum five sentences for each city. Refer the following image.",
    image: MusicPlayerLevel1,
    view: {
      liveLink: "https://kira-music-player-level1.netlify.app/",
      gitLink: "https://github.com/KiraCode/music-player-level1",
      gitIcon: github,
      liveIcon: live,
    },
    icons: [
      {
        name: "Html",
        src: html,
      },
      {
        name: "Css",
        src: css,
      },
      {
        name: "Javascript",
        src: javascript,
      },
    ],
  },
  {
    title: "Image Carousel ",
    description:
      "Create a Web page to display the name of six cities with different headings. Write minimum five sentences for each city. Refer the following image.",
    image: ImageCarousel2,
    view: {
      liveLink: "https://kira-image-carousel-level2.netlify.app/",
      gitLink: "https://github.com/KiraCode/image-carousel-level2",
      gitIcon: github,
      liveIcon: live,
    },
    icons: [
      {
        name: "Html",
        src: html,
      },
      {
        name: "Css",
        src: css,
      },
      {
        name: "Javascript",
        src: javascript,
      },
    ],
  },
  {
    title: "Simple Image Carousel",
    description:
      "Create a Web page to display the name of six cities with different headings. Write minimum five sentences for each city. Refer the following image.",
    image: ImageCarousel1,
    view: {
      liveLink: "https://kira-image-carousel-level1.netlify.app/",
      gitLink: "https://github.com/KiraCode/image-carousel-level1",
      gitIcon: github,
      liveIcon: live,
    },
    icons: [
      {
        name: "Html",
        src: html,
      },
      {
        name: "Css",
        src: css,
      },
      {
        name: "Javascript",
        src: javascript,
      },
    ],
  },
  {
    title: "Calculator",
    description:
      "Create a Web page to display the name of six cities with different headings. Write minimum five sentences for each city. Refer the following image.",
    image: Calculator,
    view: {
      liveLink: "https://kira-calculator.netlify.app/",
      gitLink: "https://github.com/KiraCode/calculator-level-2",
      gitIcon: github,
      liveIcon: live,
    },
    icons: [
      {
        name: "Html",
        src: html,
      },
      {
        name: "Css",
        src: css,
      },
      {
        name: "Javascript",
        src: javascript,
      },
    ],
  },
  {
    title: "Calculator",
    description:
      "Create a Web page to display the name of six cities with different headings. Write minimum five sentences for each city. Refer the following image.",
    image: Calculator,
    view: {
      liveLink: "https://kira-calculator.netlify.app/",
      gitLink: "https://github.com/KiraCode/calculator-level-2",
      gitIcon: github,
      liveIcon: live,
    },
    icons: [
      {
        name: "Html",
        src: html,
      },
      {
        name: "Css",
        src: css,
      },
      {
        name: "Javascript",
        src: javascript,
      },
    ],
  },
  {
    title: "Calculator",
    description:
      "Create a Web page to display the name of six cities with different headings. Write minimum five sentences for each city. Refer the following image.",
    image: Calculator,
    view: {
      liveLink: "https://kira-calculator.netlify.app/",
      gitLink: "https://github.com/KiraCode/calculator-level-2",
      gitIcon: github,
      liveIcon: live,
    },
    icons: [
      {
        name: "Html",
        src: html,
      },
      {
        name: "Css",
        src: css,
      },
      {
        name: "Javascript",
        src: javascript,
      },
    ],
  },
];




