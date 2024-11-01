import React from 'react';
import Badge from '../Badge';
import animationStyles from '../../styles/animation.module.scss';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { EXPERIENCE } from '../../constants';

interface ExperienceTypes {
  year: string;
  company: string;
  title: string;
  subtitle: string;
  jobdesc: string[];
  stacks: string[];
}

const ExperienceSection: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({threshold: 0.1});
  return (
    <section id="experience" ref={ref}>
      <div className={`font-semibold text-[32px] text-center mb-12 opacity-0 ${isVisible && animationStyles.slideDown}`}>Experience</div>
      {
        EXPERIENCE.map((data: ExperienceTypes, key: number) => (
          <div className={`grid lg:grid-cols-2 gap-4 opacity-0 ${isVisible && animationStyles.slideUp}`} key={key}>
            <div className="flex items-start text-[24px] px-6 lg:justify-end lg:border-r-[4px] lg:border-dun lg:py-12">
              {data.year}
            </div>
            <div className="flex flex-col px-6 pt-4 pb-6 lg:py-12">
              <div className="font-bold text-[28px]">{data.company}</div>
              <div className="font-medium text-[22px] mb-2">{data.title}</div>
              {data.subtitle && <div className="mb-2">{data.subtitle}</div>}
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
                    <Badge key={key} text={stack} />
                  ))
                }
              </div>
            </div>
        </div>
        ))
      }
    </section>
  );
};

export default ExperienceSection;