import Link, { type LinkInterface, type variant } from './link';

interface LinkListProps {
  links: LinkInterface[];
  variant?: variant;
  children?: JSX.Element;
}

const LinkList = ({ links, variant, children }: LinkListProps) => {
  return (
    <ul className='flex'>
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
