"use client";
import React from 'react';
import Link from 'next/link';
import styles from './contact.module.scss';
import { GitHub, Instagram, Linkedin, Mail } from 'react-feather';

interface ContactProps {
  title: string;
  render: React.ReactNode;
  url: string;
}

const CONTACT: ContactProps[] = [
  {
    title: 'Email',
    url: 'mailto:michelle.widjaja@gmail.com',
    render: <Mail size={24} />
  },
  {
    title: 'Linkedin',
    url: 'https://www.linkedin.com/in/michelle-lee-widjaja-65610797/',
    render: <Linkedin size={24} />
  },
  {
    title: 'GitHub',
    url: 'https://github.com/michellewidjaja',
    render: <GitHub size={24} />
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/artbymchiichi/',
    render: <Instagram size={24} />
  },
];

const ContactSection: React.FC = () => {
  return (
    <div id="contact" className="py-4">
      {/* <div className={`font-semibold text-[32px] text-center mb-12 opacity-0 ${isVisible && animationStyles.slideDown}`}>Contact</div> */}
      <div className="flex gap-4 md:gap-6 justify-start items-center">
        {CONTACT.map((data: ContactProps, key: number) => (
          <Link href={data.url} key={key} className={styles.contactIcon}>
            {data.render}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;