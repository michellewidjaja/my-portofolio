"use client";
import React from 'react';
import Image from 'next/image';
import Badge from '../../ui/Badge';
import { ArrowUpRight } from 'react-feather';
import Link from 'next/link';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'react-feather';

const PROJECTS = [
  {
    title: "Personal Portfolio Website",
    description: "A responsive portfolio site to showcase my projects. Designed and developed from scratch to highlight my skills and experience.",
    url: "https://github.com/michellewidjaja/my-portofolio",
    image: "/project-portfolio.png",
    stacks: ['Next.js', 'Tailwind']
  },
  {
    title: "Weather App",
    description: "Responsive weather app with modern day/night visuals and location-based search. Provides real-time forecasts with a clean and minimal interface.",
    url: "https://weather-app-khaki-eight-28.vercel.app/",
    image: "/project-weather-app.png",
    stacks: ['Next.js', 'Tailwind', 'ShadcnUI']
  },
  {
    title: "AniList",
    description: "An assignment project focused on anime-related features including bookmarking, infinite scrolling, and more.",
    url: "https://anilist-next-delta.vercel.app/",
    image: "/project-anilist.png",
    stacks: ['Next.js', 'Tailwind', 'GraphQL', 'PWA', 'Jest']
  },
];

const ProjectsSection: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="projects" ref={ref} className="py-8 px-6 md:py-12">
      <div className={`group cursor-pointer font-poppins text-2xl tracking-widest uppercase mb-8 md:mb-12 opacity-0 transition-all duration-500 ${isVisible ? 'animate-slideDown opacity-100' : ''}`}>
        Projects
        <div className="border-b-[3px] border-blue-500 w-8 mt-1 transition-all duration-300 ease-in-out group-hover:w-12"></div>
      </div>

      <div className={`grid gap-8 md:gap-x-6 opacity-0 ${isVisible ? 'animate-slideUp opacity-100' : ''}`}>
        {PROJECTS.map((project, idx) => {
          const cardContent = (
            <div className="group flex flex-col md:flex-row gap-4 md:p-5 rounded-xl cursor-pointer transition-all duration-200 md:hover:bg-blue-100 dark:md:hover:bg-[#15191d73] shadow-none md:shadow-md" key={idx}>
              
              {project.image && (
                <Image 
                  src={project.image} 
                  width={200} 
                  height={100} 
                  className="flex-shrink-0 flex-grow-0 w-[70%] md:w-48 h-32 md:h-28 object-cover rounded-lg shadow-md border-2 border-transparent md:group-hover:border-blue-500 transition-all duration-200"
                  alt={`${project.title} image`} 
                />
              )}

              <div className="flex-1 flex flex-col">
                <div className="flex items-center py-2 md:py-0 gap-1 font-poppins font-semibold text-base md:text-lg leading-5 text-blue-500 md:text-inherit dark:text-gray-200 group-hover:text-blue transition-colors">
                  {project.title}
                  {project.url && <ArrowUpRight size={18} className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />}
                </div>

                {project.description && (
                  <div className="mt-1 md:mt-2.5 text-gray-500 dark:text-gray-400 text-sm md:text-base">
                    {project.description}
                  </div>
                )}

                <div className="flex flex-wrap gap-1 md:gap-2 mt-4">
                  {project.stacks.map((stack, key) => (
                    <Badge key={key} text={stack} />
                  ))}
                </div>
              </div>
            </div>
          );

          return project.url ? (
            <Link href={project.url} key={idx} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">{cardContent}</a>
            </Link>
          ) : cardContent;
        })}
      </div>
      <Link href="/projects">
        <Button variant="link" className="group mt-8 px-0 md:p-5 ">View Full Projects <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" /></Button>
      </Link>
    </section>
  );
};

export default ProjectsSection;
