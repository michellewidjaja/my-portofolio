"use client";
import React from 'react';
import Image from 'next/image';
import animationStyles from '../../styles/animation.module.scss';
import styles from './gallery.module.scss';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import Button from '../Button';
import Link from 'next/link';
import { Instagram } from 'react-feather';

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
      <div className={`group cursor-pointer font-poppins text-[24px] tracking-widest uppercase mb-4 md:mb-12 opacity-0 ${isVisible && animationStyles.slideDown}`}>
        Gallery
        <div className="border-b-[3px] border-blue h-[2.5px] w-[8%] mt-1 transition-all duration-300 ease-in-out group-hover:w-[12%]"></div>
      </div>
      <div className={`${styles.galleryWrapper}`}>
        <div className={`flex md:grid gap-4 w-full md:grid-cols-[1fr_1fr_1fr] md:gap-6 ${isVisible && animationStyles.slideUp}`}>
          {
            GALLERY.map((image: string, key: number) => (
              <div className={styles.cardPhoto} key={key}>
                <div className={styles.cardImage}>
                  <Image src={image} fill alt="gallery-1" sizes="250" className="object-cover" />
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="mt-12 mb-4 flex justify-center">
        <Link href="https://www.instagram.com/artbymchiichi/">
          <Button size="md" className="flex gap-2 dark:bg-gradient-to-b dark:from-blue-500 dark:to-purple-500">
            <Instagram size={24} /> View More on Instagram
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default GallerySection;