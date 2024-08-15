import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Reveal = ({ children }: { children: JSX.Element }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const animateControl = useAnimation();

  useEffect(() => {
    if (inView) {
      animateControl.start('visible');
    }
  }, [inView]);

  return (
    <div ref={ref} className='relative overflow-hidden'>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={animateControl}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div>{children}</div>
      </motion.div>
    </div>
  );
};

export default Reveal;
