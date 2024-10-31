'use client';
import { useState, useEffect } from 'react';
import Image from "next/image";
import styles from './page.module.scss';
import Badge from '../components/Badge';

export default function Home() {
  const [animate, setAnimate] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(false);
      setVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <header className={`${styles.container} mb-6`}>
        <nav className={`${styles.navbar} flex justify-end end gap-12`}>
          <a>Experience</a>
          <a>Projects</a>
          <a>Contact</a>
        </nav>
      </header>
      <main className={`${styles.container} flex justify-center flex-grow px-6 lg:px-40 py-4`}>
        <div className="grid gap-4 lg:grid-cols-4 lg:grid-rows-2 lg:gap-6 py-[50px]"> 
          <div className="col-span-1 row-span-2 rounded-xl">
            <div className="flex flex-col h-full justify-between">
              <b className={`${styles.title} font-semibold text-[32px] mb-2`}>Michelle Lee Widjaja</b>
              <div className={`${styles.card} h-[80%] w-full relative`}>
                <Image src="/photo.jpg" alt="michelle photo" layout="fill" objectFit="cover" className="rounded-xl" />
                <div className="absolute inset-0 bg-sage bg-opacity-10 rounded-xl" />
              </div>
            </div>
          </div>
          <div className={`${styles.card} bg-columbia-blue`}>
            <div>
                <Image src="/id-card.png" alt="id card icon" width={50} height={50} />
              </div>
              <div className="text-[24px] font-semibold my-1 text-[#284653]">About Me</div>
              <div className="text-[14px]">Hi, I'm Michelle! I have 7+ years of experience as a frontend developer, with a background in JD.ID and Tiket.com. I also enjoy illustrating and creating digital art.</div>
          </div>
          <div className={`${styles.card} bg-yellow`}>
            <div>
              <Image src="/web.png" alt="web icon" width={50} height={50} />
            </div>
            <div className="text-[24px] font-semibold my-1 text-[#6B4D0F]">Frontend Developer</div>
            <div className="text-[14px]">I specialize in building responsive user interfaces and reusable components with experience in industries like JD.ID and Tiket.com, contributing to seamless user experiences.</div>
          </div>
          <div className={`${styles.card} bg-sienna`}>
            <div>
              <Image src="/graphic-tablet.png" alt="tablet icon" width={50} height={50} />
            </div>
            <div className="text-[24px] font-semibold my-1 text-[#672713]">Illustrator</div>
            <div className="text-[14px]">I also work as a freelance illustrator and hobbyist, allows me to express my creativity and attention to detail. This enables me to create cohesive and detailed user experiences.</div>
          </div>
          <div className={`${styles.card} bg-citron`}>
            <div>
              <Image src="/projects.png" alt="projects icon" width={50} height={50} />
            </div>
            <div className="text-[24px] font-semibold my-1 text-[#47481E]">Skills</div>
            <div className="text-[14px]">Specializing in:</div>
            <div className="flex flex-wrap gap-2 mt-2.5">
              <Badge text="React" />
              <Badge text="Next.js" />
              <Badge text="Typescript" />
              <Badge text="Vue" />
              <Badge text="HTML, CSS & Javascript" />
              <Badge text="Webpack" />
              <Badge text="Storybook" />
              <Badge text="Git" />
              <Badge text="Creative Thinking" />
            </div>
          </div>
          <div className={`${styles.card} bg-dun`}>
            <div>
              <Image src="/idea.png" alt="idea icon" width={50} height={50} />
            </div>
            <div className="text-[24px] font-semibold my-1 text-[#4F442B]">Projects</div>
            <ul className="text-[14px] list-disc ml-4">
              <li>Personal Portofolio Website</li>
              <li>Travel Assistant Chatbot (In Progress)</li>
              <li>UI Redesign Project</li>
              <li>JD AyoConnect Prepaid Postpaid</li>
              <li>JD E-money</li>
              <li>Tiket.com Refund Flight & Hotel</li>
            </ul>
          </div>
          <div className={`${styles.card} bg-melon`}>
            <div>
              <Image src="/expectation.png" alt="expectation icon" width={50} height={50} />
            </div>
            <div className="text-[24px] font-semibold my-1 text-[#4B281B]">Professional Development</div>
            <ul className="text-[14px] list-disc ml-4">
              <li>AI Bootcamp by Ruangguru</li>
              <li>Developing for Web Performance by Linkedin Learning</li>
              <li>Learning Next.js by Linkedin Learning</li>
            </ul>
          </div>
        </div>
      </main>
      <footer style={{ display: 'none' }}>
        <a href="https://www.flaticon.com/free-icons/admission" title="Admission icons">Admission icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/development" title="development icons">Development icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/idea" title="idea icons">Idea icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/rocket" title="rocket icons">Rocket icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/tablet" title="tablet icons">Tablet icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/expectation" title="expectation icons">Expectation icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by Freepik - Flaticon</a>
      </footer>
    </div>
  );
}
