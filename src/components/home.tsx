import profileImage from '../assets/aiony-haust-3TLl_97HNJo-unsplash.jpg';
import { Button } from './ui/button';

const Home = () => {
  return (
    <div className='h-[70vh] relative flex items-center'>
      <div className='relative z-10'>
        <h1 className='text-5xl font-semibold mb-2'>
          Hi, I'm{' '}
          <span className='font-bold text-6xl text-[hsl(var(--primary))]'>
            Tomáš Lajda
          </span>
        </h1>
        <p className='text-3xl'>Software Engineer</p>
        <a href=''>
          <Button className='text-2xl mt-4'>Contact Me</Button>
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
  );
};

export default Home;
