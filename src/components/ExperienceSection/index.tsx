"use client";
import React from 'react';
import Badge from '../Badge';
import animationStyles from '../../styles/animation.module.scss';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import styles from './experience.module.scss';
import { EXPERIENCE } from '../../constants';

interface ExperienceTypes {
  year: string;
  company: string;
  title: string;
  subtitle: string;
  stacks: string[];
}

const ExperienceSection: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({threshold: 0.1});
  return (
    <section id="experience" ref={ref}>
      <div className={`group cursor-pointer font-poppins text-[24px] tracking-widest uppercase mb-4 md:mb-12 opacity-0 ${isVisible && animationStyles.slideDown}`}>
        Experience
        <div className="border-b-[3px] border-blue h-[2.5px] w-[8%] mt-1 transition-all duration-300 ease-in-out group-hover:w-[12%]"></div>
      </div>
      <div className={`grid gap-4 my-12 md:gap-x-6 opacity-0 ${isVisible && animationStyles.slideUp}`}>  
        {
          EXPERIENCE.map((data: ExperienceTypes, key: number) => (
            <div key={key}>    
              <div className={`${styles.cardExperience} bg-transparent dark:bg-black-100 shadow-md md:shadow-none hover:shadow-md md:bg-transparent hover:bg-blue-100 dark:hover:bg-black-100`}>
                <div className="py-4 grid md:grid-cols-[20%_1fr]">
                  <div className="text-[#808080] text-[12px] uppercase py-1">{data.year}</div>
                  <div>
                    <div className={`${styles.title} font-semibold text-[16px] md:text-[20px] leading-[22px] gap-1 md:gap-2 space-x-2`}>
                      <span>{data.title}</span>
                      <span>·</span>
                      <span>{data.company}</span>
                    </div>
                
                    {data.subtitle && <div className="mt-1 md:mt-3 text-gray">{data.subtitle}</div>}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {
                        data.stacks.map((stack: string, key: number) => (
                          <Badge key={key} text={stack} bgColor="#328dff" />
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default ExperienceSection;