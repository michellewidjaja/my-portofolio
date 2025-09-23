"use client";
import React from 'react';
import Badge from '../../ui/Badge';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import { EXPERIENCE } from '../../../constants';

interface ExperienceTypes {
  year: string;
  company: string;
  title: string;
  subtitle: string;
  stacks: string[];
}

const ExperienceSection: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="experience" ref={ref} className="py-8 px-6 md:py-12">
      <div className={`group cursor-pointer font-poppins text-2xl tracking-widest uppercase mb-8 md:mb-12 opacity-0 transition-all duration-500 ${isVisible ? 'animate-slideDown opacity-100' : ''}`}>
        Experience
        <div className="border-b-[3px] border-blue-500 w-8 mt-1 transition-all duration-300 ease-in-out group-hover:w-12"></div>
      </div>

      <div className={`grid gap-8 md:gap-x-6 opacity-0 ${isVisible ? 'animate-slideUp opacity-100' : ''}`}>
        {EXPERIENCE.map((data: ExperienceTypes, idx: number) => (
          <div key={idx}>
            <div className="group flex flex-col md:flex-row rounded-xl md:p-5 transition-all duration-200 md:hover:shadow-md hover:bg-blue-100 dark:hover:bg-[#15191d73] cursor-default relative">
              
              <div className="md:py-4 grid md:grid-cols-[20%_1fr]">
                <div className="text-gray-500 text-[10px] md:text-h6 uppercase py-1">
                  {data.year}
                </div>

                <div>
                  <div className="flex flex-col py-2 md:py-0 dark:text-gray-200 md:flex-row md:items-center gap-1 md:gap-2 font-poppins font-semibold text-[16px] md:text-h3 leading-[20px] md:group-hover:text-blue ">
                    {data.title} · {data.company}
                  </div>

                  {data.subtitle && (
                    <div className="mt-1 md:mt-2.5 text-gray-500 dark:text-gray-400 text-sm md:text-base">
                      {data.subtitle}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1 md:gap-2 mt-4">
                    {data.stacks.map((stack: string, key: number) => (
                      <Badge key={key} text={stack} />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
