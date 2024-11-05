import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './contact.module.scss';
import animationStyles from '../../styles/animation.module.scss';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

interface ContactProps {
  title: string;
  image: string;
  url: string;
}

const CONTACT: ContactProps[] = [
  {
    title: 'Email',
    url: 'mailto:michelle.widjaja@gmail.com',
    image: '/email.png'
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/michelle-lee-widjaja-65610797/',
    image: '/linkedin.png'
  },
  {
    title: 'GitHub',
    url: 'https://github.com/michellewidjaja',
    image: '/github.png'
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/artbymchiichi/',
    image: '/instagram.png'
  },
];

const ContactSection: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({threshold: 0.1});
  return (
    <section id="contact" ref={ref}>
      <div className={`font-semibold text-[32px] text-center mb-12 opacity-0 ${isVisible && animationStyles.slideDown}`}>Contact</div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-around items-center">
        {CONTACT.map((data: ContactProps, key: number) => (
          <Link href={data.url} key={key}>
            <div className={styles.cardContact}>
              <div className={styles.contactIcon}>
                <Image alt={data.title} fill src={data.image} sizes="80" />
              </div>
              <div className="text-[18px]">{data.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;