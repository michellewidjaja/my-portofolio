"use client";
import React from 'react';
import Image from 'next/image';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const GALLERY = [
  '/gallery-1.JPG',
  '/gallery-2.png',
  '/gallery-3.png',
  '/gallery-4.png',
  '/gallery-5.png',
  '/gallery-6.png',
]

const GallerySection: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({threshold: 0.1});
  return (
    <section id="gallery" ref={ref}>
      <div className={`group cursor-pointer font-poppins text-2xl tracking-widest uppercase mb-8 md:mb-12 opacity-0 transition-all duration-500 ${isVisible ? 'animate-slideDown opacity-100' : ''}`}>
        Gallery
        <div className="border-b-[3px] border-blue-500 w-8 mt-1 transition-all duration-300 ease-in-out group-hover:w-12"></div>
      </div>
      <div className="relative h-full">
        <Carousel>
          <CarouselContent>
          {
              GALLERY.map((image: string, key: number) => (
                <CarouselItem key={key} className="basis-full md:basis-1/3">
                  <div className="relative w-full h-64"> 
                  <Image
                      src={image}
                      alt={`gallery-${key + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                    <div className="absolute dark:inset-0 dark:bg-black/10 dark:bg-black/30"></div>
                  </div>
                </CarouselItem>
              ))
            }
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
      {/* <div className="mt-12 mb-4 flex justify-center">
        <Link href="https://www.instagram.com/artbymchiichi/">
          <Button size="md" className="flex gap-2 dark:bg-gradient-to-b dark:from-blue-500 dark:to-purple-500">
            <Instagram size={24} /> View More on Instagram
          </Button>
        </Link>
      </div> */}
    </section>
  );
};

export default GallerySection;