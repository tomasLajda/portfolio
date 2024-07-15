import calculajda from '../assets/projects/calculajda.png';
import gameEngine from '../assets/projects/game-engine.png';
import reactApp from '../assets/projects/react-app.png';

const projectList = [
  {
    title: '2D Game Engine with SDL2',
    url: 'https://github.com/tomasLajda/arcade-games',
    description:
      "I recently developed a 2D game engine from scratch using C++ and SDL2. Starting from the basics, I implemented essential graphical elements such as shapes, lines, points, and custom vector logic. The engine also includes game scene management and a basic rendering. As a demonstration, I built a classic breakout game, showcasing the engine's capabilities in handling rendering, controls, and gameplay mechanics. I am now planning to develop a Tetris game to further enhance the engine's functionality.",
    img: gameEngine,
  },
  {
    title: 'Collaborative Calculator Application',
    url: 'https://github.com/tomasLajda/ivs-projekt-2',
    description:
      'This collaborative project focused on developing a calculator application capable of performing basic arithmetic operations. Our main goals were to create a functional and reliable tool while following the best software engineering practices. This included using Git for version control, implementing testing methods, and maintaining high coding standards throughout the development process. I also served as the admin of the GitHub repository and quality assurance of code.',
    img: calculajda,
  },
  {
    title: 'Web Development Skills',
    url: 'https://github.com/tomasLajda?tab=repositories',
    description:
      "I have developed a range of web applications, from simple note-taking apps to more complex projects like blog and e-commerce platform. Throughout these projects, I have gained experience in designing and building user-friendly, functional interfaces and working with APIs to integrate various services. My skills also extend to basic backend development, where I've learned to create and manage server-side functionalities to support dynamic web applications. This diverse experience has equipped me with a solid foundation in both frontend and backend web development.",
    img: reactApp,
  },
];

export default projectList;
