import iconLinks from '../utils/icon-link-list';
import sectionList from '../utils/section-list';
import LinkList from './link-list';
import Logo from './logo';
import { ModeToggle } from './mode-toggle';

const Nav = () => {
  return (
    <nav className='flex flex-row items-center justify-between w-8/12 mx-auto'>
      <Logo />
      <LinkList links={sectionList} variant='ghost' />
      <LinkList links={iconLinks} variant='ghost'>
        <ModeToggle />
      </LinkList>
    </nav>
  );
};

export default Nav;
