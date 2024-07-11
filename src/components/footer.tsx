import Nav from './nav';
import Wrapper from './wrapper';

const Footer = () => {
  return (
    <Wrapper className='mb-8'>
      <div className={`border-t-4 border-secondary`}></div>
      <Nav />
    </Wrapper>
  );
};

export default Footer;
