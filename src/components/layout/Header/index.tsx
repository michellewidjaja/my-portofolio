import ContactSection from "../../modules/ContactSection";
import Image from "next/image";
import { NAVBAR_MENU } from "@/constants";

const Header = () => {
  return (
    <header className="w-full md:w-[80%] py-10 px-6 md:p-12 md:border-b-4 md:border-b-8 border-blue md:shadow-md mx-auto dark:shadow-theme-muted/20" aria-live="assertive">
      <div className="w-full flex justify-start gap-4">
        <Image src="/photo.jpg" priority alt="michelle photo" width={100} height={100} className="w-[100px] h-[100px] rounded-[50%] object-cover" />
      </div>
      <div>
        <div className="text-h1 mt-4 font-semibold text-blue dark:text-theme-accent mt-10 font-poppins tracking-wide">Michelle Lee Widjaja</div>
        <p className="text-h3 dark:text-dark-subtitle">Frontend Engineer & Illustrator</p>
        <p className="mt-4 text-gray font-light">I build pixel perfect websites <br/> and draw sometimes</p>
        <hr className="my-4"/>
        <nav>
          <ul className="mt-6 hidden md:block">
            {NAVBAR_MENU?.map((v,k) => (
              <li key={k} className="p-2">
                <a href={v.id} className="menu-link uppercase text-h5 tracking-widest font-poppins hover:dark:text-dark-subtitle">{v.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <ContactSection /> 
    </header>
  )
}

export default Header;