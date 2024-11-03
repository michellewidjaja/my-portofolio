import React from 'react';
import Link from 'next/link';
// import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const ContactSection: React.FC = () => {
  // const { ref, isVisible } = useIntersectionObserver({threshold: 0.1});
  return (
    <section id="contact" className="mt-0">
      {/* <div className={`font-semibold text-[32px] text-center mb-12 opacity-0 ${isVisible && animationStyles.slideDown}`}>Contact</div> */}
      <div className="flex flex-col lg:flex-row gap-6 justify-center text-[18px]">
        <div>michelle.widjaja@gmail.com</div>
        <div>
          <Link href="https://www.linkedin.com/in/michelle-lee-widjaja-65610797/">
            LinkedIn
          </Link>
        </div>
        <div>
          <Link href="https://github.com/michellewidjaja">
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;