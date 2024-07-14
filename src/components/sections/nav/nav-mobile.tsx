import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../../ui/navigation-menu';

import LinkList, { LinkListProps } from '../../link-list';

const NavMobile = ({ links, variant, redirect }: LinkListProps) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='text-lg lg:text-xl font-semibold'>
            Sections
          </NavigationMenuTrigger>
          <NavigationMenuContent className='pb-2'>
            <LinkList
              links={links}
              variant={variant}
              direction='column'
              redirect={redirect}
            />
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMobile;
