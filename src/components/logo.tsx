import logoDark from '../assets/icons/logo-dark.png';
import logoLight from '../assets/icons/logo-light.png';
import { useTheme } from './theme-provider';

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  const { theme } = useTheme();

  return (
    <img
      src={theme === 'dark' ? logoDark : logoLight}
      alt='logo'
      className={`relative w-12 lg:w-16 ${className ? className : ''}`}
    />
  );
};

export default Logo;
