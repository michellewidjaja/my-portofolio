import Image from "next/image";
import Badge from "../Badge";
import styles from "../../app/page.module.scss";
import { CheckCircle } from "react-feather";

const CheckListItem = (props) => {
  const { content } = props;

  return (
    <li className="flex gap-2 items-start">
      <CheckCircle size={20} className="mt-[2px] shrink-0 grow-0" color="#328dff" />
      <div>{content}</div>
    </li>
  )
}

const AboutMeSection = () => {
  const PROJECT_SUMMARY = ['Personal Portofolio Website', 'Travel Assistant Chatbot', 'Frontent UI Makeover', 'Dashboard Management System', 'And more'];
  const PROFESSIONAL_DEV_SUMMARY = ['AI Bootcamp by Ruangguru', 'Developing for Web Performance by Linkedin Learning', 'Learning Next.js by Linkedin Learning', 'Meta Frontend Developer (ongoing)']

  return (
    <section id="about">
      <div className="flex flex-col lg:grid gap-4 lg:grid-cols-3 lg:gap-8"> 
        <div className={`${styles.cardWrapper} col-span-2`}>
          <div className="border-blue border-l-4 pl-8 space-y-4 w-[100%]">
            <p>I&apos;m a frontend developer with a strong interest in <b className="text-blue">creating clean and user-friendly interfaces</b>. I enjoy turning designs into interactive experiences that feel intuitive and polished.</p>
            <p>My focus is on writing <b className="text-blue">maintainable code</b>, building <b className="text-blue">reusable components</b>, and continuously learning to improve both <b className="text-blue">performance</b> and <b className="text-blue">user experience</b>. I&apos;m always open to feedback and new ways of doing things better.</p>
            <p> Over the years, I&apos;ve worked across <b className="text-blue">various tech industries</b> — from large-scale platforms like <b className="text-blue">JD.ID</b> and <b className="text-blue">Tiket.com</b>, to fast-paced startups such as <b className="text-blue">Sirka</b>, <b className="text-blue">Bizzy</b>, and  <b className="text-blue">Ralali</b>. These experiences have helped me adapt quickly, collaborate closely with cross-functional teams, and stay flexible with different tech stacks and workflows.</p>
            <p>Outside of coding, I also enjoy illustrating — especially drawing chibi-style characters in my free time.</p>
          </div>
        </div>
        
        <div className={`${styles.cardWrapper}`}>
          <div className={`${styles.card} bg-blue-300 shadow-md dark:bg-dark-blue`}>
            <div>
              <Image src="/id-card.png" alt="projects icon" width={50} height={50} className="dark:invert dark:contrast-75" />
            </div>
            <div className={`${styles.cardTitle}`}>About Me</div>
            <div className="text-[#808080] text-[12px] uppercase">2013-2017</div>
            <div className="font-semibold text-[18px] text-blue">Binus University</div>
            <div>Computer Science</div>
            <div className="font-semibold text-[18px] mt-4 text-blue">Language</div>
            <div>Bahasa (Native), English (Professional), Chinese (Basic), Japanese (Basic)</div>
          </div>
        </div>
        <div className={`${styles.cardWrapper}`}>
          <div className={`${styles.card} bg-blue-300 shadow-md dark:bg-dark-blue`}>
            <div>
              <Image src="/projects.png" alt="projects icon" width={50} height={50} className="dark:invert dark:contrast-75" />
            </div>
            <div className={`${styles.cardTitle}`}>Skills</div>
            <div className="text-[14px]">Specializing in:</div>
            <div className="flex flex-wrap gap-2 mt-2.5">
              <Badge text="Javascript" />
              <Badge text="Typescript" />
              <Badge text="React" />
              <Badge text="Next.js" />
              <Badge text="Vue" />
              <Badge text="HTML" />
              <Badge text="CSS" />
              <Badge text="Tailwind CSS" />
              <Badge text="Styled Components" />
              <Badge text="Webpack" />
              <Badge text="Storybook" />
              <Badge text="Git" />
              <Badge text="Creative Thinking" />
            </div>
          </div>
        </div>
        <div className={`${styles.cardWrapper}`}>
          <div className={`${styles.card} bg-blue-300 shadow-md dark:bg-dark-blue`}>
            <div>
              <Image src="/idea.png" alt="idea icon" width={50} height={50} className="dark:invert dark:contrast-75" />
            </div>
            <div className={`${styles.cardTitle}`}>Projects</div>
            <ul className="list-none space-y-1">
              {
                PROJECT_SUMMARY.map((content, key) => (
                  <CheckListItem key={key} content={content} />
                ))
              }
            </ul>
          </div>
        </div>
        <div className={`${styles.cardWrapper}`}>
          <div className={`${styles.card} bg-blue-300 shadow-md dark:bg-dark-blue`}>
            <div>
              <Image src="/expectation.png" alt="expectation icon" width={50} height={50} className="dark:invert dark:contrast-75" />
            </div>
            <div className={`${styles.cardTitle}`}>Professional Development</div>
            <ul className="list-none space-y-1">
              {
                PROFESSIONAL_DEV_SUMMARY.map((content, key) => (
                  <CheckListItem key={key} content={content} />
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMeSection;