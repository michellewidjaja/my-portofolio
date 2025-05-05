import ContactSection from "../ContactSection";
import Image from "next/image";
import { NAVBAR_MENU } from "@/constants";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className="w-full py-10 px-6 md:p-12 md:border-b-4 md:border-b-8 border-blue md:shadow-md" aria-live="assertive">
      <div className="w-full flex justify-start gap-4">
        <Image src="/photo.jpg" priority alt="michelle photo" width={100} height={100} className="w-[100px] h-[100px] rounded-[50%] object-cover" />
      </div>
      <div>
        <div className="text-[26px] mt-4 font-bold text-blue mt-10 font-poppins tracking-wide">Michelle Lee Widjaja</div>
        <p className="text-[18px] font-semibold">Frontend Engineer & Illustrator</p>
        <p className="mt-4 text-gray font-light">I build pixel perfect websites <br/> and draw sometimes</p>
        <hr className="my-4"/>
        <nav>
          <ul className={`${styles.navbarMenu} mt-6`}>
            {NAVBAR_MENU?.map((v,k) => (
              <li key={k} className="p-2">
                <a href={v.id} className="menu-link uppercase text-[14px] tracking-widest font-poppins">{v.text}</a>
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