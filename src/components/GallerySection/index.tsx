import React from 'react';
import Image from 'next/image';
import Badge from '../Badge';
import animationStyles from '../../styles/animation.module.scss';
import pageStyles from '../../app/page.module.scss';
import styles from './gallery.module.scss';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import Button from '../Button';

const GallerySection: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({threshold: 0.1});
  return (
    <section id="gallery" ref={ref} className="bg-citron">
      <div className={`font-semibold text-[32px] text-center mb-12 opacity-0 ${isVisible && animationStyles.slideDown}`}>Gallery</div>
      <div className="flex justify-center">
        <div className="grid gap-4 w-full lg:grid-cols-3 lg:gap-6 lg:w-[80%]">
          <div className={styles.cardPhoto}>
            <div className={styles.cardImage}>
              <Image src="/gallery-1.JPG" fill alt="gallery-1" />
            </div>
          </div>
          <div className={styles.cardPhoto}>
            <div className={styles.cardImage}>
              <Image src="/gallery-1.JPG" fill alt="gallery-1" />
            </div>
          </div>
          <div className={styles.cardPhoto}>
            <div className={styles.cardImage}>
              <Image src="/gallery-1.JPG" fill alt="gallery-1" />
            </div>
          </div>
          <div className={styles.cardPhoto}>
            <div className={styles.cardImage}>
              <Image src="/gallery-1.JPG" fill alt="gallery-1" />
            </div>
          </div>
          <div className={styles.cardPhoto}>
            <div className={styles.cardImage}>
              <Image src="/gallery-1.JPG" fill alt="gallery-1" />
            </div>
          </div>
          <div className={styles.cardPhoto}>
            <div className={styles.cardImage}>
              <Image src="/gallery-1.JPG" fill alt="gallery-1" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 mb-4 flex justify-center">
        <Button size="lg">
          See More
        </Button>
      </div>
    </section>
  );
};

export default GallerySection;