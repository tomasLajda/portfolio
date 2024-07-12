import { useMediaQuery } from 'react-responsive';
import iconLinks from '../../../utils/icon-link-list';
import sectionList from '../../../utils/section-list';
import LinkList from '../../link-list';
import Logo from '../../logo';
import { ModeToggle } from '../../mode-toggle';

import NavMobile from './nav-mobile';

const Nav = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 865px)' });

  return (
    <div className='flex flex-col items-center mt-8'>
      <nav className='flex flex-row gap-2 items-center justify-between sm:w-8/12'>
        <Logo className='lg:right-2' />
        {isMobile ? (
          <NavMobile />
        ) : (
          <LinkList links={sectionList} variant='ghost' />
        )}
        <LinkList links={iconLinks} variant='ghost'>
          <ModeToggle />
        </LinkList>
      </nav>
    </div>
  );
};

export default Nav;
