import { Terminal } from 'lucide-react';
import skillsList from '../utils/skills-list';
import Skills from './skills';

const About = () => {
  return (
    <>
      <h1 className='text-5xl mb-4 font-semibold'>About</h1>
      <div className='flex items-start'>
        <Terminal className='h-12 min-w-16 relative right-3' />
        <p className='text-xl ml-1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore porro
          quos delectus, mollitia, aut esse nihil quibusdam illum explicabo quis
          voluptas suscipit in neque nesciunt doloribus, temporibus veniam
          molestiae harum. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Pariatur placeat laborum iusto? Voluptate non consequatur cumque
          officia ipsa fuga molestiae! Earum accusantium sapiente qui autem ex
          soluta modi ratione animi.
        </p>
      </div>
      <Skills skills={skillsList} />
    </>
  );
};

export default About;
