import styles from "@/app/page.module.scss";

const AboutMeSection = () => {
  return (
    <section id="about">
      <div className="flex flex-col"> 
        <div className={`${styles.cardWrapper} col-span-2`}>
          <div className="border-blue border-l-4 pl-4 md:pl-8 space-y-4 w-[100%]">
            <p>I&apos;m a frontend developer with a strong interest in creating clean and user-friendly interfaces. I enjoy turning designs into interactive experiences that feel intuitive and polished.</p>
            <p>My focus is on writing maintainable code, building reusable components, and continuously learning to improve both performance and user experience. I&apos;m always open to feedback and new ways of doing things better.</p>
            <p> Over the years, I&apos;ve worked across various tech industries — from large-scale platforms like <b className="text-blue dark:text-theme-accent">JD.ID</b> and <b className="text-blue dark:text-theme-accent">Tiket.com</b>, to fast-paced startups such as <b className="text-blue dark:text-theme-accent">Sirka</b>, <b className="text-blue dark:text-theme-accent">Bizzy</b>, and  <b className="text-blue dark:text-theme-accent">Ralali</b>. These experiences have helped me adapt quickly, collaborate closely with cross-functional teams, and stay flexible with different tech stacks and workflows.</p>
            <p>Outside of coding, I also enjoy illustrating — especially drawing chibi-style characters in my free time.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMeSection;