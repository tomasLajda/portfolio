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
  children?: JSX.Element;
}

const Link = ({ url, target, variant, children, text }: LinkProps) => {
  return (
    <li className='mr-2 '>
      <a href={url} target={target ? '_blank' : ''}>
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
