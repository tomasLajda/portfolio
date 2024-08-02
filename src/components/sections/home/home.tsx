import { useMediaQuery } from 'react-responsive';
import profileImage from '../../../assets/portrait.png';
import Link from '../../link';
import Wrapper from '../../wrapper';

const Home = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 550px)' });

  return (
    <Wrapper className='mt-12' id='Home'>
      <div className='h-[70vh] relative flex items-center'>
        <div className='relative z-10 -bottom-12'>
          <h1 className='mb-2'>
            Hi, I'm {isMobile && <br />}
            <span className='font-bold text-6xl text-[hsl(var(--primary))]'>
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
        <div
          className='absolute right-0 bottom-0 z-0'
          style={{
            width: '100%',
            maxWidth: '52vh',
            height: '100%',
            backgroundImage: `url(${profileImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'right bottom',
          }}
        ></div>
      </div>
    </Wrapper>
  );
};

export default Home;
