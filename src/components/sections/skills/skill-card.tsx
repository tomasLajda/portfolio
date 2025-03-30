import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardTitle } from '../../ui/card';

export interface SkillCardProps {
  name: string;
  description: string;
  image: string;
}

const SkillCard = ({ image, name, description }: SkillCardProps) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotateX: 0,
        rotateY: 0,
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
    >
      <Card className='w-56 h-56 lg:w-72 lg:h-72 flex flex-col items-center justify-center text-center'>
        <img src={image} alt='' className='mb-2 w-20 h-20 lg:w-36 lg:h-36' />
        <CardContent>
          <CardTitle className='mb-2'>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SkillCard;
