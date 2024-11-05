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
  jobdesc: string[];
  stacks: string[];
  bgColor: string;
  color: string;
}

const ExperienceSection: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({threshold: 0.1});
  return (
    <section id="experience" ref={ref} className="bg-yellow">
      <div className={`font-semibold text-[32px] text-center mb-12 opacity-0 ${isVisible && animationStyles.slideDown}`}>Experience</div>
      <div className={`grid gap-4 my-12 lg:grid-cols-2 lg:gap-x-6 opacity-0 ${styles.timeline} ${isVisible && animationStyles.slideUp}`}>  
        {
          EXPERIENCE.map((data: ExperienceTypes, key: number) => (
            <div className={`${key % 2 === 1 ? styles.cardWrapperRight : styles.cardWrapperLeft}`} key={key}>    
              <div className={`${styles.cardExperience}`}>
                <div className="px-8 py-6">
                  <div className="mb-1 text-[#808080]">{data.year}</div>
                  <div className="font-bold text-[28px] leading-[32px] mb-1 text-citron-dark">{data.company}</div>
                  {data.subtitle && <div className="mb-4">{data.subtitle}</div>}
                  <ul className="list-disc ml-4 mb-4">
                    {
                      data.jobdesc.map((job: string, key: number) => (
                        <li key={key} className="mb-2">{job}</li>
                      ))
                    }
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {
                      data.stacks.map((stack: string, key: number) => (
                        <Badge key={key} text={stack} bgColor={data.bgColor} color={data.color} />
                      ))
                    }
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