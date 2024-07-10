import { Button } from './ui/button';

interface LinkProps {
  text: string;
  variant?:
    | 'link'
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | null
    | undefined;
  url: string;
  target?: boolean;
  children?: JSX.Element;
}

const Link = (props: LinkProps) => {
  return (
    <li className='mr-2 '>
      <a href={props.url} target={props.target ? '_blank' : ''}>
        <Button
          variant={props.variant || 'default'}
          size={props.children ? 'icon' : 'default'}
          className='text-xl font-semibold'
        >
          {props.children ? props.children : props.text}
        </Button>
      </a>
    </li>
  );
};

export default Link;
