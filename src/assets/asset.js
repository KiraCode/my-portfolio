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

// react projects images
import TravelList from "./projects/travel-list.png";
import PizzaMenu from "./projects/Pizza-menu.png";

// Javascript projects images
import Calculator from "./projects/calculator.png";
import MusicPlayerLevel2 from "./projects/music-player-2.png";
import MusicPlayerLevel1 from "./projects/music-player-1.png";
import ImageCarousel1 from "./projects/image-carousel-1.png";
import ImageCarousel2 from "./projects/image-carousel-2.png";

// React assignment images
import DigitalClock from "./projects/digital-clock.png";
import VoteApp from "./projects/vote-app.png";
import TaskManageApp from "./projects/task-manage-app.png";
import RecipeFinder from "./projects/recipe-finder.png";
import MoodTracker from "./projects/mood-tracker.png";
import BookRelease from "./projects/book-release.png";
import MovieSearch from "./projects/movie-search.png";

export const profile = {
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

export const projects = [
  // MERN Stack Projects

  // React Projects
  {
    title: "Travel List",
    category: "React",
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
    title: "Pizza Menu",
    category: "React",
    description:
      "React-based Pizza Menu application that dynamically displays a list of available pizzas along with their details such as name, ingredients, price",
    image: PizzaMenu,
    view: {
      liveLink: "https://kiracode-pizza-menu.netlify.app/",
      gitLink: "https://github.com/KiraCode/pizza-menu",
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

  // Java-Springboot Projects

  // React-Springboot Projects

  // NodeJs Projects

  // Javascript Projects
  {
    title: "Music Player",
    category: "Javascript",
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
    category: "Javascript",
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
    category: "Javascript",
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
    category: "Javascript",
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
    category: "Javascript",
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

  // HTML - css Assignments
  {
    title: "",
    category: "HTML-CSS-Assignments",
    description: "",
    image: "",
    view: {
      liveLink: "https://assignments-html-css-wsa.netlify.app/",
      gitLink: "",
      gitIcon: "",
      liveIcon: "",
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
    ],
  },

  // Javascript Assignments
  {
    title: "",
    category: "Javascript-Assignments",
    description: "",
    image: "",
    view: {
      liveLink: "https://assignments-javascript-wsa.netlify.app/",
      gitLink: "",
      gitIcon: "",
      liveIcon: "",
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

  // React Assignmenst
  {
    title: "Digital Clock",
    category: "React Assignments",
    description:
      "A fully functional digital clock as a React component that dynamically updates in real-time to display the current time.",
    image: DigitalClock,
    view: {
      liveLink: "https://assignment-react-digital-clock.netlify.app/",
      gitLink:
        "https://github.com/KiraCode/wsa-react-assignments/tree/main/digital-clock",
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
    title: "MoodTracker",
    category: "React Assignments",
    description:
      "A React application that allows users to log their moods with optional notes and view their mood history.",
    image: MoodTracker,
    view: {
      liveLink: "https://assignment-react-mood-tracker.netlify.app/",
      gitLink:
        "https://github.com/KiraCode/wsa-react-assignments/tree/main/mood-tracker",
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
    title: "Voting Application",
    category: "React Assignments",
    description:
      "A React application that allows users to vote for their favorite fruit and dynamically displays the vote count for each option.",
    image: VoteApp,
    view: {
      liveLink: "https://assignment-react-voting-application.netlify.app/",
      gitLink:
        "https://github.com/KiraCode/wsa-react-assignments/tree/main/voting-application",
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
    title: "RecipeFinder ",
    category: "React Assignments",
    description:
      "A React application that allows users to search for recipes based on ingredients and displays a list of relevant recipes retrieved from an external API.",
    image: RecipeFinder,
    view: {
      liveLink: "https://assignment-react-recipe-finder.netlify.app/",
      gitLink:
        "https://github.com/KiraCode/wsa-react-assignments/tree/main/recipe-finder",
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
    title: "TaskManager ",
    category: "React Assignments",
    description:
      "A React-based Task Manager application that allows users to manage their tasks effectively by adding and deleting tasks.",
    image: TaskManageApp,
    view: {
      liveLink: "https://assignment-react-task-manager-app.netlify.app/",
      gitLink:
        "https://github.com/KiraCode/wsa-react-assignments/tree/main/task-manager-application",
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
    title: "Book Releases Application",
    category: "React Assignments",
    description:
      "A React-based mini-project to manage and display a list of upcoming book releases.You are tasked with creating a mini React application to manage a list of upcoming book releases. ",
    image: BookRelease,
    view: {
      liveLink: "https://assignment-react-book-releases.netlify.app/",
      gitLink:
        "https://github.com/KiraCode/wsa-react-assignments/tree/main/book-releases",
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
    title: "MovieSearch Application",
    category: "React Assignments",
    description:
      "The Habit Tracker App is an application designed to help users monitor their daily habits and track their progress over a week. The app allows users to add new habits, mark their progress for each day, and visualize streaks of continuous completion with a fire icon.",
    image: MovieSearch,
    view: {
      liveLink: "https://assignment-react-movie-search.netlify.app/",
      gitLink:
        "https://github.com/KiraCode/wsa-react-assignments/tree/main/movie-search",
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
];
