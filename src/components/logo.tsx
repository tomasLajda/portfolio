import logoDark from '../assets/icons/logo-dark.png';
import logoLight from '../assets/icons/logo-light.png';
import { useTheme } from './theme-provider';

const Logo = () => {
  const { theme } = useTheme();

  return (
    <img
      src={theme === 'dark' ? logoDark : logoLight}
      alt='logo'
      width='120px'
      className='relative right-12'
    />
  );
};

export default Logo;
