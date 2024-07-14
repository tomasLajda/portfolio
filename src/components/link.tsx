import { Button } from './ui/button';

export type variant =
  | 'link'
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | null
  | undefined;

export interface LinkInterface {
  url: string;
  text: string;
  target?: boolean;
  img?: JSX.Element;
}

interface LinkProps extends LinkInterface {
  variant?: variant;
  redirect: boolean;
  children?: JSX.Element;
}

const Link = ({
  url,
  target,
  variant,
  children,
  text,
  redirect,
}: LinkProps) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute('href');

    if (!target) return;
    const targetElement = document.querySelector(target);
    targetElement?.scrollIntoView({ behavior: 'smooth' });
    history.replaceState(null, '', ' ');
  };

  return (
    <li>
      <a
        href={url}
        target={target ? '_blank' : ''}
        onClick={(e) => redirect || scrollToSection(e)}
      >
        <Button
          variant={variant || 'default'}
          size={children ? 'icon' : 'default'}
          className='text-lg lg:text-xl font-semibold'
        >
          {children || text}
        </Button>
      </a>
    </li>
  );
};

export default Link;
