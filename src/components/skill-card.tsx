import { Card, CardContent, CardDescription, CardTitle } from './ui/card';

export interface SkillCardProps {
  name: string;
  description: string;
  image: string;
}

const SkillCard = (props: SkillCardProps) => {
  return (
    <Card className='w-56 h-56 lg:w-72 lg:h-72 flex flex-col items-center justify-center text-center'>
      <img
        src={props.image}
        alt=''
        className='mb-5 rounded-full w-24 h-24 lg:w-36 lg:h-36'
      />
      <CardContent>
        <CardTitle>{props.name}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
