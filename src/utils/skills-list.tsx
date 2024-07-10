import ai from '../assets/icons/ai.svg';
import c from '../assets/icons/c.svg';
import cpp from '../assets/icons/cpp.svg';
import db from '../assets/icons/db.svg';
import linux from '../assets/icons/linux.svg';
import node from '../assets/icons/node.svg';
import react from '../assets/icons/react.svg';
import tailwind from '../assets/icons/tailwind.svg';
import ts from '../assets/icons/ts.svg';

const skillsList = [
  {
    name: 'TypeScript',
    description:
      'I am quite skilled in TypeScript and use it for all my js projects.',
    image: ts,
  },
  {
    name: 'Node.js',
    description: 'My choice for backend development with Express.js.',
    image: node,
  },
  {
    name: 'C',
    description: 'I explore low level programming with C.',
    image: c,
  },
  {
    name: 'C++',
    description: 'If I need to bring bigger guns.',
    image: cpp,
  },
  {
    name: 'React',
    description: 'Frontend framework with which I am most familiar.',
    image: react,
  },
  {
    name: 'Linux',
    description: 'My operating system of choice. I use Fedora.',
    image: linux,
  },
  {
    name: 'CSS',
    description:
      'I use Tailwind CSS for styling. I am also familiar with SCSS.',
    image: tailwind,
  },
  {
    name: 'DB',
    description: 'I worked with MongoDB, SQLite and Prisma for db.',
    image: db,
  },
  {
    name: 'AI',
    description: 'I know how to properly use AI in my projects. I use copilot.',
    image: ai,
  },
];

export default skillsList;
