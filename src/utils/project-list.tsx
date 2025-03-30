import calculajda from '../assets/projects/calculajda.png';
import gameEngine from '../assets/projects/game-engine.png';
// import iot from '../assets/projects/iot.png';
import reactApp from '../assets/projects/react-app.png';
import tetris from '../assets/projects/tetris.png';
import turtlebot from '../assets/projects/turtlebot.jpg';

const projectList = [
  {
    title: '2D Game Engine with SDL2',
    url: 'https://github.com/tomasLajda/arcade-games',
    description:
      "I recently developed a 2D game engine from scratch using C++ and SDL2. Starting from the basics, I implemented essential graphical elements such as shapes, lines, points, and custom vector logic. The engine also includes game scene management and a basic rendering. As a demonstration, I built a classic breakout game, showcasing the engine's capabilities in handling rendering, controls, and gameplay mechanics.",
    img: gameEngine,
  },
  {
    title: 'Tetris made with my Game Engine',
    url: 'https://github.com/tomasLajda/arcade-games',
    description:
      "As I mentioned earlier, I developed a 2D game engine with SDL2. Using this engine, I created a Tetris game as a fun project to test and enhance the engine's capabilities. The game features Tetris gameplay, including block rotation, movement, and line clearing. I also implemented a scoring system and level progression to add depth to the gameplay. This project was a great opportunity to apply and improve my development skills, as well as to learn more about game mechanics and design.",
    img: tetris,
  },
  {
    title: 'Low Level Dev',
    url: 'https://github.com/tomasLajda/esp32-iot-gpio',
    description:
      "I am eager to learn more about IoT, robotics and embedded systems. I love delving deep into concepts, and what better way to do it than starting from the basics? I created some basic IoT app that allows users to control and read values from GPIO pins on ESP32 through a browser. The app is built with the Arduino framework in C++ and uses Firebase. For the user interface, I use React with TypeScript. It's still a learning process. recently I am working on Turtlebot with ROS framework, where I implemented PID control with basic mapping and localization.",
    img: turtlebot,
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
