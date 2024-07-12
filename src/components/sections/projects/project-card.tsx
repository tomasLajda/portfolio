import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../ui/card';
import { CarouselItem } from '../../ui/carousel';

interface ProjectCardProps {
  img: string;
  title: string;
  description: string;
}

const ProjectCard = ({ img, title, description }: ProjectCardProps) => {
  return (
    <CarouselItem className='lg:basis-1/2'>
      <Card className='flex flex-col items-center p-5 bg-primary'>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <img
            src={img}
            alt=''
            className='max-w-xl max-h-[640px] w-full object-cover mb-4'
          />
          <CardDescription className='text-secondary-foreground'>
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </CarouselItem>
  );
};

export default ProjectCard;
