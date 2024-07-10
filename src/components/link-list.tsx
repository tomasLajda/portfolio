import Link from './link'; // Changed 'link' to 'Link' to match the component name

interface LinkProps {
  links: {
    url: string;
    text: string;
    img?: JSX.Element;
  }[];
  variant?:
    | 'link'
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | null
    | undefined;
  children?: JSX.Element;
}

const LinkList = (props: LinkProps) => {
  return (
    <ul className='flex'>
      {props.links.map(
        (
          link,
          i // Added curly braces to wrap the map function
        ) => (
          <Link
            key={i}
            url={link.url}
            text={link.text}
            variant={props.variant || 'default'}
          >
            {link.img}
          </Link>
        )
      )}
      {props.children}
    </ul>
  );
};

export default LinkList;
