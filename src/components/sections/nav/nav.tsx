import iconLinks from '../../../utils/icon-link-list';
import sectionList from '../../../utils/section-list';
import LinkList from '../../link-list';
import Logo from '../../logo';
import { ModeToggle } from '../../mode-toggle';

const Nav = () => {
  return (
    <div className='flex flex-col items-center mt-8'>
      <nav className='flex flex-row items-center justify-between w-8/12'>
        <Logo className='lg:right-2' />
        <LinkList links={sectionList} variant='ghost' />
        <LinkList links={iconLinks} variant='ghost'>
          <ModeToggle />
        </LinkList>
      </nav>
    </div>
  );
};

export default Nav;
