import { Terminal } from 'lucide-react';
import skillsList from '../../../utils/skills-list';
import Wrapper from '../../wrapper';
import Skills from '../skills/skills';

const About = () => {
  return (
    <Wrapper bgColor='bg-[hsl(var(--primary))]' textColor='white'>
      <h1 className='mb-4'>About</h1>
      <div className='flex items-start'>
        <Terminal className='h-12 min-w-16 relative right-3' />
        <p className='ml-1'>
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
    </Wrapper>
  );
};

export default About;
