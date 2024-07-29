import { useMediaQuery } from 'react-responsive';
import iconLinks from '../../../utils/icon-link-list';
import LinkList from '../../link-list';
import Logo from '../../logo';

import NavMobile from './nav-mobile';

const Nav = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 865px)' });

  const sectionList = [
    {
      url: '#Home',
      text: 'Home',
    },
    {
      url: '#About',
      text: 'About',
    },
    {
      url: '#Projects',
      text: 'Projects',
    },
    {
      url: '#Contact',
      text: 'Contact',
    },
  ];

  return (
    <div className='flex flex-col items-center mt-8'>
      <nav className='flex flex-row gap-2 items-center justify-between sm:w-8/12'>
        <Logo className='lg:right-2' />
        {isMobile ? (
          <NavMobile links={sectionList} variant='link' redirect={false} />
        ) : (
          <LinkList links={sectionList} variant='ghost' redirect={false} />
        )}
        <LinkList
          links={iconLinks}
          variant='default'
          redirect={true}
        ></LinkList>
      </nav>
    </div>
  );
};

export default Nav;
