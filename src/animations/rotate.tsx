import { motion } from 'framer-motion';

const Rotate = ({ children }: { children: JSX.Element }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2, rotate: 360 }}
      transition={{ duration: 0.35, delay: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default Rotate;
