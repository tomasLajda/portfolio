import iconLinks from '../../../utils/icon-link-list';
import LinkList from '../../link-list';
import Logo from '../../logo';
import Wrapper from '../../wrapper';

const Footer = () => {
  return (
    <Wrapper className='mb-10' minHeightScreen={false}>
      <div className='border-t-4 border-secondary mb-2'></div>
      <div className='flex justify-between items-center'>
        <Logo className='left-1' />
        <p className='text-center px-3 hidden sm:block'>
          Thanks for visiting! <br />
          If you have any questions, feel free to reach.
        </p>
        <LinkList links={iconLinks} variant='ghost' redirect={true} />
      </div>
      <p className='mt-8 text-center text-secondary'>
        &copy; 2024 All rights reserved | CC0
      </p>
    </Wrapper>
  );
};

export default Footer;
