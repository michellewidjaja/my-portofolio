import React from 'react';
import Link from 'next/link';
import animationStyles from '../../styles/animation.module.scss';
import styles from './projects.module.scss';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import Button from '../Button';

const ProjectsSection: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({threshold: 0.1});
  return (
    <section id="projects" ref={ref}>
      <div className={`font-semibold text-[32px] text-center mb-12 opacity-0 ${isVisible && animationStyles.slideDown}`}>Projects</div>
      <div className="flex flex-col lg:flex-row gap-6 justify-center">
        <div className={`${styles.cardProject} bg-columbia-blue`}>
          <div className="font-bold text-[28px] mb-2 text-[#284653]">Personal Portofolio Website</div>
          <div className="text-[16px] mb-4">Showcases my skills in responsive design and UI development, featuring designs crafted by me and inspired by current design trends. Built with Next.js, this project utilizes CSS Modules for styling, ensuring maintainability and a clean separation of styles, alongside reusable components to enhance performance.</div>
          <Link href="https://github.com/michellewidjaja/my-portofolio">
            <Button size="sm" bgColor="#284653" color="#FDF8ED">
              Link to GitHub
            </Button>
          </Link>
        </div>
        <div className={`${styles.cardProject} bg-dutch-white`}>
          <div className="font-bold text-[28px] text-[#4F442B] mb-2">Travel Assistant Chatbot</div>
          <div className="text-[16px] mb-4">This project is the final assignment from my AI Bootcamp. Although it is still a work in progress, it demonstrates the foundational features of a travel assistant designed to assist users with flight bookings and travel inquiries. The project integrates Python for backend processing and utilizes fine-tuned GPT models to enhance user interaction. Additionally, it is connected with a frontend interface.</div>
          <Link href="https://github.com/michellewidjaja/travel-assistant-chatbot">
            <Button size="sm" bgColor="#695A38" color="#FDF8ED">
              Link to GitHub
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;