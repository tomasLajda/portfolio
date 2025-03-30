import { Terminal } from 'lucide-react';
import Reveal from '../../../animations/reveal';
import skillsList from '../../../utils/skills-list';
import Wrapper from '../../wrapper';
import Skills from '../skills/skills';

function getYearsDifference(date1: Date, date2: Date): number {
  const diffInMilliseconds = Math.abs(date2.getTime() - date1.getTime());
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
  const diffInYears = diffInMilliseconds / millisecondsInYear;

  return Math.floor(diffInYears);
}

const About = () => {
  const birthDate = new Date('2003-11-22');
  const currentDate = new Date();
  const age = getYearsDifference(birthDate, currentDate);

  return (
    <Wrapper
      bgColor='bg-[hsl(var(--primary))]'
      textColor='white'
      id='About'
      className='pr-8'
    >
      <Reveal>
        <div>
          <h1 className='mb-8'>About</h1>
          <div className='flex items-start'>
            <Terminal className='h-8 min-w-12 md:min-w-16 md:h-12 relative right-3 ' />
            <div>
              <p className='ml-1 mb-2 sm:mb-4'>
                Hello! I'm a {age}-year-old software engineering student at Brno
                University of Technology, passionate about technology and
                innovation. As a fast learner, I thrive on new challenges and am
                always eager to expand my knowledge and skills in the IT.
              </p>

              <p className='ml-1 mb-2 sm:mb-4'>
                My expertise spans low-level coding and web development, giving
                me a well-rounded foundation in software engineering. I have
                under my belt numerous projects, demonstrating my ability to
                solve complex problems and deliver solutions. You can explore my
                work on my{' '}
                <a
                  href='https://github.com/tomasLajda'
                  target='_blank'
                  className='underline hover:opacity-80 text-secondary'
                >
                  GitHub page
                </a>
                .
              </p>

              <p className='ml-1 mb-2 sm:mb-4'>
                I am now seeking my first professional opportunity in the IT
                industry, where I can contribute my skills and enthusiasm to a
                team. I am ready to embrace any challenge that comes my way and
                look forward to growing as a professional in this exciting
                field.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h1 className='my-8'>Experience</h1>
          <div className='space-y-6'>
            <div className='flex items-start'>
              <div className='w-2 h-2 bg-[hsl(var(--primary))] rounded-full mt-1 mr-4'></div>
              <div className='ml-12'>
                <h3 className='font-semibold text-2xl'>Game Developer</h3>
                <h4 className='text-secondary-foreground text-xl font-semibold'>
                  Inlogic Software — September 2024 to March 2025
                </h4>
                <p className='mt-2'>
                  Worked on developing browser games with a team to deliver
                  quality experience. Focused on gameplay mechanics, performance
                  improvements, and debugging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h1 className='my-8'>Education</h1>
          <div className='space-y-6 ml-12'>
            <div className='flex items-start justify-between flex-col xl:flex-row'>
              <div className='w-2 h-2 bg-[hsl(var(--primary))] rounded-full mt-1 mr-4'></div>
              <div className=''>
                <h3 className='font-semibold text-2xl'>
                  Infomation Technology
                </h3>
                <h4 className='text-secondary-foreground text-xl font-semibold'>
                  BUT FIT Brno — September 2023 to June 2026
                </h4>
                <p className='mt-2'>
                  Currently pursuing a Bachelor's degree in Information
                  Technology at BUT FIT Brno. My coursework includes software
                  development, algorithms, and computer systems, providing me
                  with a strong foundation in both theoretical and practical
                  aspects of IT.
                </p>
              </div>
              <div className='pl-0 mt-8 xl:pl-8 xl:mt-0'>
                <h3 className='font-semibold text-2xl'>Exchange studies</h3>
                <h4 className='text-secondary-foreground text-xl font-semibold'>
                  Taltech Tallinn — February 2025 to June 2025
                </h4>
                <p className='mt-2'>
                  Participated in an exchange program at Taltech Tallinn, where
                  I expanded my knowledge in software engineering. This
                  experience allowed me to collaborate with international
                  students, adapt to new environments, and gain a broader
                  perspective on technology, innovation and life in general.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <Skills skills={skillsList} />
      </Reveal>
    </Wrapper>
  );
};

export default About;
