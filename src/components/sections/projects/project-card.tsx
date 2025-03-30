import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { CarouselItem } from '../../ui/carousel';

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  img: string;
}

const ProjectCard = ({ img, title, description, url }: ProjectCardProps) => {
  return (
    <CarouselItem className='lg:basis-1/2'>
      <Card className='flex flex-col items-center p-5 bg-primary h-full hover:bg-primary-hover'>
        <CardHeader className='min-h-28'>
          <CardTitle className='font-bold mb-4'>{title}</CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col items-center flex-grow'>
          <img src={img} alt='' className='object-cover mb-12 rounded-sm' />
          <p className='max-w-[450px] text-secondary-foreground text-justify leading-relaxed text-sm lg:text-base'>
            {description} <br />
            <a
              href={url}
              target='_blank'
              className='text-secondary underline font-medium hover:opacity-80'
            >
              Learn more
            </a>
          </p>
        </CardContent>
      </Card>
    </CarouselItem>
  );
};

export default ProjectCard;
