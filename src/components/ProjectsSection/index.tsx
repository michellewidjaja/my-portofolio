"use client";
import React from 'react';
import Image from 'next/image';
import animationStyles from '../../styles/animation.module.scss';
import styles from './projects.module.scss';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import Badge from '../Badge';
import { ArrowUpRight } from 'react-feather';
import Link from 'next/link';

const PROJECTS = [
  {
    title: "Personal Portfolio Website",
    description: "A responsive portfolio site to showcase my projects, built with Next.js and Tailwind CSS. Designed and developed from scratch to highlight my skills and experience.",
    url: "https://github.com/michellewidjaja/my-portofolio",
    image: "/project-portfolio.png",
    stacks: ['Next.js', 'Tailwind']
  },
  {
    title: "AniList",
    description: "An assignment project focused on anime-related features including bookmarking, infinite scrolling, and more.",
    url: "https://anilist-next-delta.vercel.app/",
    image: "/project-anilist.png",
    stacks: ['Next.js', 'Tailwind', 'GraphQL', 'PWA', 'Jest']
  },
  {
    title: "Travel Assistant Chatbot",
    description: "A work-in-progress chatbot that helps users plan trips via natural conversations. Built with Python and fine-tuned GPT models, integrated into a web interface using Next.js.",
    url: "https://github.com/michellewidjaja/travel-assistant-chatbot",
    image: "",
    stacks: ['Next.js', 'Tailwind', 'Python', 'Fine-tuned GPT']
  },
  {
    title: "JD.ID E-money WebView Integration",
    description: "Developed an E-Money feature embedded in the mobile app via WebView, allowing users to top up and check card balances using NFC.",
    image: "",
    stacks: ['Vue.js', 'SCSS']
  },
  {
    title: "JD.ID AyoConnect Prepaid & Postpaid",
    description: "Integrated AyoConnect for prepaid and postpaid bill payments, expanding available payment methods.",
    image: "",
    stacks: ['Vue.js', 'SCSS']
  },
  {
    title: "Tiket.com Refund System Redesign",
    description: "Redesigned the refund system and design to improve user experience and interface.",
    image: "",
    stacks: ['React.js', 'SCSS']
  },
  {
    title: "Bizzy Dispute Management Page",
    description: "Developed a dispute resolution page to allow vendors and internal teams to track and resolve issues.",
    image: "",
    stacks: ['React.js', 'SCSS']
  },
];

const ProjectsSection: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({threshold: 0.1});
  return (
    <section id="projects" ref={ref}>
      <div className={`group cursor-pointer font-poppins text-[24px] tracking-widest uppercase mb-4 md:mb-12 opacity-0 ${isVisible && animationStyles.slideDown}`}>
        Projects
        <div className="border-b-[3px] border-blue h-[2.5px] w-[8%] mt-1 transition-all duration-300 ease-in-out group-hover:w-[12%]"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        {
          PROJECTS?.map((v,k) => {
            const cardContent = (
            <div className={`${styles.cardProject} bg-transparent dark:bg-black-100 shadow-md md:shadow-none hover:shadow-md md:bg-transparent hover:bg-blue-100 dark:hover:bg-black-100 flex flex-col md:flex-row gap-4`} key={k}>
              {v.image && 
                <Image src={v.image} width={120} height={120} className={`${styles.projectImage} shadow-md object-cover rounded-[12px] flex-0`} alt="project images" />
              }
              <div>
                <div className={`${styles.title} font-semibold text-[16px] md:text-[20px] leading-[22px] flex gap-1 items-center`}>
                  {v.title}
                  {v.url && <ArrowUpRight size={18} className={styles.iconLink} />}
                </div>
                {v.description && <div className="mt-1 md:mt-3 text-gray">{v.description}</div>}
                <div className="flex flex-wrap gap-2 mt-4">
                  {
                    v.stacks.map((stacks: string, key: number) => (
                      <Badge key={key} text={stacks} bgColor="#328dff" />
                    ))
                  }
                </div>
              </div>
            </div>
          );
          return v.url ? (
            <Link href={v.url} key={k} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">{cardContent}</a>
            </Link>
          ) : (
            <div key={k}>{cardContent}</div>
          );
          })
        }
      </div>
    </section>
  );
};

export default ProjectsSection;