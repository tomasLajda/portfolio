import { Terminal } from 'lucide-react';
import skillsList from '../../../utils/skills-list';
import Wrapper from '../../wrapper';
import Skills from '../skills/skills';

const About = () => {
  return (
    <Wrapper bgColor='bg-[hsl(var(--primary))]' textColor='white' id='About'>
      <h1 className='mb-8'>About</h1>
      <div className='flex items-start'>
        <Terminal className='h-12 min-w-16 relative right-3' />
        <div>
          <p className='ml-1 mb-2 sm:mb-4'>
            Hello! I'm a 20-year-old software engineering student at Brno
            University of Technology, passionate about technology and
            innovation. As a fast learner, I thrive on new challenges and am
            always eager to expand my knowledge and skills in the IT.
          </p>

          <p className='ml-1 mb-2 sm:mb-4'>
            My expertise spans low-level coding and web development, giving me a
            well-rounded foundation in software engineering. I have under my
            belt numerous projects, demonstrating my ability to solve complex
            problems and deliver solutions. You can explore my work on my{' '}
            <a
              href='https://github.com/tomasLajda'
              target='_blank'
              className='underline hover:opacity-80'
            >
              GitHub page
            </a>
            .
          </p>

          <p className='ml-1 mb-2 sm:mb-4'>
            I am now seeking my first professional opportunity in the IT
            industry, where I can contribute my skills and enthusiasm to a team.
            I am ready to embrace any challenge that comes my way and look
            forward to growing as a professional in this exciting field.
          </p>
        </div>
      </div>
      <Skills skills={skillsList} />
    </Wrapper>
  );
};

export default About;
