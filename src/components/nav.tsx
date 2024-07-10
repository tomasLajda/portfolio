import iconLinks from '../utils/icon-link-list';
import links from '../utils/link-list';
import LinkList from './link-list';
import Logo from './logo';
import { ModeToggle } from './mode-toggle';

const Nav = () => {
  return (
    <nav className='w-10/12 flex flex-row items-center justify-evenly'>
      <Logo />
      <LinkList links={links} variant='ghost' />
      <LinkList links={iconLinks} variant='ghost'>
        <ModeToggle />
      </LinkList>
    </nav>
  );
};

export default Nav;
