import React from 'react';
import Badge from '../Badge';
import animationStyles from '../../styles/animation.module.scss';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const ProjectsSection: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({threshold: 0.1});
  return (
    <section id="projects" ref={ref}>
      <div className={`font-semibold text-[32px] text-center mb-12 opacity-0 ${isVisible && animationStyles.slideDown}`}>Projects</div>
      
    </section>
  );
};

export default ProjectsSection;