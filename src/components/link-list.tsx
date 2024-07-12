import Link, { type LinkInterface, type variant } from './link';

interface LinkListProps {
  links: LinkInterface[];
  variant?: variant;
  children?: JSX.Element;
  direction?: 'row' | 'column';
}

const LinkList = ({ links, variant, children, direction }: LinkListProps) => {
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
        >
          {link.img}
        </Link>
      ))}
      {children}
    </ul>
  );
};

export default LinkList;
