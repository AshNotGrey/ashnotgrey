import { useRef } from "react";
import { HakiAttribution, nameBrand, socials } from "../constants";
import { useSlideUpFadeIn } from "../gsap";

const Footer = () => {
  const socialIcons = [
    { name: "Github", icon: "github.svg" },
    { name: "X", icon: "x.svg" },
    { name: "Instagram", icon: "instagram.svg" },
    { name: "LinkedIn", icon: "linkedin.svg" },
    { name: "Linktree", icon: "linktree.svg" },
  ];
  const myRef = useRef(null);
  useSlideUpFadeIn(myRef, { duration: 1, y: 20, start: "top bottom" });
  return (
    <section
      className='c-space mt-5 pt-7 pb-3 border-t border-black-300 flex flex-col md:flex-wrap md:flex-row-reverse lg:justify-between justify-center items-center gap-5'
      ref={myRef}>
      <div className='flex gap-3'>
        {socialIcons.map(({ name, icon }) => (
          <a key={name} target='_blank' rel='noreferrer' href={socials[name]} title={name}>
            <div className='social-icon'>
              <img src={`/assets/${icon}`} alt={name} className='w-1/2 h-1/2' />
            </div>
          </a>
        ))}
      </div>
      {/* Replace with actual HAKI logo and link */}
      <a
        href={HakiAttribution.link}
        target='_blank'
        rel='noreferrer'
        className='flex gap-1'
        title='Powered by HAKI'>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-white-500 text-sm font-light'>{HakiAttribution.text}</p>
          <img src={HakiAttribution.logo} alt='HAKI' className='w-20 h-20 md:w-30 md:h-30' />
        </div>
      </a>
      <p className='text-white-500'>{`© ${new Date().getFullYear()} ${nameBrand}. All rights reserved.`}</p>
    </section>
  );
};

export default Footer;
