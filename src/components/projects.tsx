import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useState } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';

import imgTest from '../assets/aiony-haust-3TLl_97HNJo-unsplash.jpg';

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
          <CarouselItem className='lg:basis-1/2'>
            <Card className='flex flex-col items-center p-5 bg-primary'>
              <CardHeader>
                <CardTitle>2D Game Engine</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src={imgTest}
                  alt=''
                  className='max-w-xl max-h-[640px] w-full object-cover mb-4'
                />
                <CardDescription className='text-neutral-800'>
                  Game engine built with C++ and SDL2. Features include 2D
                  rendering, input handling.
                </CardDescription>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className='lg:basis-1/2'>
            <Card className='flex flex-col items-center p-5'>
              <CardHeader>
                <CardTitle>2D Game Engine</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src={imgTest}
                  alt=''
                  className='max-w-xl max-h-[640px] w-full object-cover mb-4'
                />
                <CardDescription>
                  Game engine built with C++ and SDL2. Features include 2D
                  rendering, input handling.
                </CardDescription>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className='lg:basis-1/2'>
            <Card className='flex flex-col items-center p-5'>
              <CardHeader>
                <CardTitle>2D Game Engine</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src={imgTest}
                  alt=''
                  className='max-w-xl max-h-[640px] w-full object-cover mb-4'
                />
                <CardDescription>
                  Game engine built with C++ and SDL2. Features include 2D
                  rendering, input handling.
                </CardDescription>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className='py-2 text-center text-sm text-muted-foreground'>
        Slide {current} of {count}
      </div>
    </>
  );
};

export default Projects;
