import { ArrowUpToLineIcon } from 'lucide-react';
import { useState } from 'react';

const ScrollUpButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <ArrowUpToLineIcon
      size='42'
      onClick={scrollToTop}
      className={`${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } fixed z-10 left-[90%] bottom-6 hover:text-gray-500 cursor-pointer transition-all duration-300 ease-in-out`}
    />
  );
};

export default ScrollUpButton;
