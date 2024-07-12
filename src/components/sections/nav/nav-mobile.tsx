import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../../ui/navigation-menu';

import sectionList from '../../../utils/section-list';
import LinkList from '../../link-list';

const NavMobile = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='text-lg lg:text-xl font-semibold'>
            Sections
          </NavigationMenuTrigger>
          <NavigationMenuContent className='pb-2'>
            <LinkList links={sectionList} variant='link' direction='column' />
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMobile;
