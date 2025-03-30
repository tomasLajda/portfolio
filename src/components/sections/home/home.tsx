import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import profileImage from '../../../assets/portrait.png';
import Link from '../../link';
import Wrapper from '../../wrapper';

const Home = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });

  return (
    <Wrapper className='mt-12' id='Home'>
      <motion.div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${profileImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'right bottom',
          boxShadow: '0 0 20px 5px rgba(128, 0, 255, 0.5)',
          borderRadius: '10px',
        }}
        whileHover={{
          scale: 1.02,
          rotateY: 4,
          rotateX: 2,
        }}
        transition={{
          duration: 0.4,
          ease: 'easeInOut',
        }}
        className='px-12'
      >
        <div className='h-[70vh] relative flex items-center'>
          <div className='relative z-10 -bottom-12'>
            <h1 className='mb-2'>
              Hi, I'm {isMobile && <br />}
              <span className='font-bold text-6xl text-[hsl(var(--primary))] '>
                Tomáš Lajda
              </span>
            </h1>
            <h3 className='mb-3'>Software Developer</h3>
            <a href=''>
              <Link
                redirect={false}
                text='Contact Me'
                url='#Contact'
                variant='default'
              />
            </a>
          </div>
        </div>
      </motion.div>
    </Wrapper>
  );
};

export default Home;
