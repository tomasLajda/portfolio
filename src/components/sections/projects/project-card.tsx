import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { CarouselItem } from '../../ui/carousel';

interface ProjectCardProps {
  img: string;
  title: string;
  description: string;
  url: string;
}

const ProjectCard = ({ img, title, description, url }: ProjectCardProps) => {
  return (
    <CarouselItem className='lg:basis-1/2'>
      <Card className='flex flex-col items-center p-5 bg-primary h-full'>
        <CardHeader>
          <CardTitle className='underline underline-offset-3 mb-4 hover:opacity-80'>
            <a href={url} target='_blank'>
              {title}
            </a>
          </CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col items-center flex-grow'>
          <img src={img} alt='' className='object-cover mb-8 rounded-sm' />
          <p className='max-w-[500px] text-secondary-foreground text-justify'>
            {description}
          </p>
        </CardContent>
      </Card>
    </CarouselItem>
  );
};

export default ProjectCard;
