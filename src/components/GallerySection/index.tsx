import React from 'react';
import Image from 'next/image';
import animationStyles from '../../styles/animation.module.scss';
import styles from './gallery.module.scss';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import Button from '../Button';
import Link from 'next/link';

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
    <section id="gallery" ref={ref} className="bg-citron">
      <div className={`font-semibold text-[32px] text-center mb-12 opacity-0 ${isVisible && animationStyles.slideDown}`}>Gallery</div>
      <div className="flex justify-center">
        <div className={`${styles.galleryWrapper}`}>
          <div className={`flex lg:grid gap-4 w-full lg:grid-cols-3 lg:gap-6 ${isVisible && animationStyles.slideUp}`}>
            {
              GALLERY.map((image: string, key: number) => (
                <div className={styles.cardPhoto} key={key}>
                  <div className={styles.cardImage}>
                    <Image src={image} fill alt="gallery-1" sizes="300" className="object-cover" />
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="mt-12 mb-4 flex justify-center">
        <Link href="https://www.instagram.com/artbymchiichi/">
          <Button size="lg">
            See More on Instagram
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default GallerySection;