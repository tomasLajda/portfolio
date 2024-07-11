import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useState } from 'react';

import projectList from '../utils/project-list';
import ProjectCard from './project-card';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from './ui/carousel';

const Projects = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <h1 className='text-5xl font-bold mb-8 text-center'>Projects</h1>
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <CarouselContent>
          {projectList.map((project, index) => (
            <ProjectCard {...project} key={index} />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className='mt-6 text-center text-xl text-muted-foreground'>
        Slide {current} of {count}
      </div>
    </>
  );
};

export default Projects;
