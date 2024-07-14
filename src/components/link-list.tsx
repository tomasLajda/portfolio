import Link, { type LinkInterface, type variant } from './link';

export interface LinkListProps {
  links: LinkInterface[];
  variant?: variant;
  direction?: 'row' | 'column';
  redirect: boolean;
  children?: JSX.Element;
}

const LinkList = ({
  links,
  variant,
  children,
  direction,
  redirect,
}: LinkListProps) => {
  return (
    <ul
      className={`flex ${
        direction === 'column' ? 'flex-col items-center' : 'gap-2'
      }`}
    >
      {links.map((link, i) => (
        <Link
          key={i}
          url={link.url}
          text={link.text}
          target={link.target}
          variant={variant || 'default'}
          redirect={redirect}
        >
          {link.img}
        </Link>
      ))}
      {children}
    </ul>
  );
};

export default LinkList;
