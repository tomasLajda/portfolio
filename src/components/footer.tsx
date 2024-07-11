import iconLinks from '../utils/icon-link-list';
import LinkList from './link-list';
import Logo from './logo';
import Wrapper from './wrapper';

const Footer = () => {
  return (
    <Wrapper className='mb-10'>
      <div className='border-t-4 border-secondary mb-2'></div>
      <div className='flex justify-between items-center'>
        <Logo className='left-1' />
        <p>
          Thanks for visiting! <br />
          If you have any questions, feel free to reach.
        </p>
        <LinkList links={iconLinks} variant='ghost' />
      </div>
      <p className='text-center mt-8 text-secondary'>
        &copy; 2024 All rights reserved | CC0
      </p>
    </Wrapper>
  );
};

export default Footer;
