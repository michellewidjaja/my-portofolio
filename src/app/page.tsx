'use client';
import Image from "next/image";
import styles from './page.module.scss';
import Badge from '../components/Badge';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';
import { NAVBAR_MENU } from '../constants';

interface NavbarMenuProps {
  text: string;
  id: string;
  in_progress: boolean;
}

export default function Home() {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <main className="flex flex-col min-h-screen">
      <header className={`${styles.header}`}>
        <nav className={`${styles.navbar} flex flex-wrap justify-center gap-4 lg:gap-12 text-[18px]`}>
          {
            NAVBAR_MENU.map((menu: NavbarMenuProps, key: number) => (
              <a key={key} className={`${menu.in_progress && 'disabled'}`} onClick={() => !menu.in_progress && handleClick(menu.id)}>
                {menu.text}
                {menu.in_progress &&  <Image src="/progress.png" alt="progress icon" width={18} height={18} className="animate-spin shrink-0 object-contain" />}
              </a>
            ))
          }
        </nav>
      </header>
      <div className={`${styles.container}`}>
        <div className="grid gap-4 lg:grid-cols-4 lg:grid-rows-2 lg:gap-6"> 
          <div className="col-span-1 row-span-2 rounded-xl">
            <div className="flex flex-col h-full justify-between min-h-[350px]">
              <div className={`${styles.title} text-[40px] mb-4`}><b>Michelle Lee Widjaja</b></div>
              <div className={`${styles.cardWrapper} h-full w-full`}>
                <div className={`${styles.card} relative`}>
                  <Image src="/photo.jpg" alt="michelle photo" fill className="rounded-xl object-cover" />
                  <div className="absolute inset-0 bg-sage bg-opacity-10 rounded-xl" />
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.cardWrapper}`}>
            <div className={`${styles.card} bg-columbia-blue`}>
              <div>
                <Image src="/id-card.png" alt="id card icon" width={50} height={50} />
              </div>
              <div className={`${styles.cardTitle} text-[#284653]`}>About Me</div>
              <div className="text-[14px]">I&apos;m an experienced frontend developer with 7+ years in the industry, with a background in JD.ID and Tiket.com. I also enjoy illustrating and creating digital art.</div>
            </div>
          </div>
          <div className={`${styles.cardWrapper}`}>
            <div className={`${styles.card} bg-yellow`}>
              <div>
                <Image src="/web.png" alt="web icon" width={50} height={50} />
              </div>
              <div className={`${styles.cardTitle} text-[#59400D]`}>Frontend Developer</div>
              <div className="text-[14px]">I specialize in building responsive user interfaces and reusable components with experience in industries like JD.ID and Tiket.com, contributing to seamless user experiences.</div>
            </div>
          </div>
          <div className={`${styles.cardWrapper}`}>
            <div className={`${styles.card} bg-sienna`}>
              <div>
                <Image src="/graphic-tablet.png" alt="tablet icon" width={50} height={50} />
              </div>
              <div className={`${styles.cardTitle} text-[#672713]`}>Illustrator</div>
              <div className="text-[14px]">I also work as a freelance illustrator and hobbyist, allows me to express my creativity and attention to detail. This enables me to create cohesive and detailed user experiences.</div>
            </div>
          </div>
          <div className={`${styles.cardWrapper}`}>
            <div className={`${styles.card} bg-citron`}>
              <div>
                <Image src="/projects.png" alt="projects icon" width={50} height={50} />
              </div>
              <div className={`${styles.cardTitle} text-[#47481E]`}>Skills</div>
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
          </div>
          <div className={`${styles.cardWrapper}`}>
            <div className={`${styles.card} bg-dun`}>
              <div>
                <Image src="/idea.png" alt="idea icon" width={50} height={50} />
              </div>
              <div className={`${styles.cardTitle} text-[#4F442B]`}>Projects</div>
              <ul className="text-[14px] list-disc ml-4">
                <li>Personal Portofolio Website</li>
                <li>Travel Assistant Chatbot (In Progress)</li>
                <li>UI Redesign Project</li>
                <li>JD AyoConnect Prepaid Postpaid</li>
                <li>JD E-money</li>
                <li>Tiket.com Refund Flight & Hotel</li>
              </ul>
            </div>
          </div>
          <div className={`${styles.cardWrapper}`}>
            <div className={`${styles.card} bg-melon`}>
              <div>
                <Image src="/expectation.png" alt="expectation icon" width={50} height={50} />
              </div>
              <div className={`${styles.cardTitle} text-[#4B281B]`}>Professional Development</div>
              <ul className="text-[14px] list-disc ml-4">
                <li>AI Bootcamp by Ruangguru</li>
                <li>Developing for Web Performance by Linkedin Learning</li>
                <li>Learning Next.js by Linkedin Learning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ExperienceSection />
      <ProjectsSection />
      <GallerySection />
      <ContactSection />
      <footer style={{ display: 'none' }}>
        <a href="https://www.flaticon.com/free-icons/admission" title="Admission icons">Admission icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/development" title="development icons">Development icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/idea" title="idea icons">Idea icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/rocket" title="rocket icons">Rocket icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/tablet" title="tablet icons">Tablet icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/expectation" title="expectation icons">Expectation icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/arrows" title="arrows icons">Arrows icons created by Amazona Adorada - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/work" title="work icons">Work icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/menu" title="menu icons">Menu icons created by ariefstudio - Flaticon</a>
      </footer>
    </main>
  );
}
