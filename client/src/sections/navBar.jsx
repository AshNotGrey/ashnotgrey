import { useState } from "react";
import { nameBrand, nameShort2, navLinks } from "../constants/index.js";
import { useMediaQuery } from "react-responsive";
import GoogleTranslateToggle from "../components/GoogletTranslate.jsx";

const NavBar = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggleMenu = () => {
    setisOpen((prev) => !prev);
  };
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const NavItems = () => {
    return (
      <ul className='nav-ul'>
        {navLinks.map(({ name, id, href }) => (
          // todo convert to use react-router-dom Li
          <li key={id} className='nav-li'>
            {name === "Resume" ? (
              <a href={href} target='_blank' rel='noreferrer' className='nav-li_a'>
                {name}
              </a>
            ) : (
              <a href={href} className='nav-li_a'>
                {name}
              </a>
            )}
          </li>
        ))}
        <li key='Translate' className='nav-li'>
          <GoogleTranslateToggle />
        </li>
      </ul>
    );
  };
  return (
    <header className='text-white fixed top-0 left-0 right-0 z-50 bg-black/90'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center py-5 mx-auto c-space'>
          {/* 
            1. Animate between actual name and alias
            2. Style like the logo from Projects.jsx
            */}
          <a
            href='/'
            className='text-neutral-400 font-bold text-xl hover:text-white transition-colors delay-200 duration-1000 ease-in-out space-x-2 uppercase'>
            <span className='text-2xl lg:text-4xl'>♞</span>
            {isMobile ? nameShort2 : nameBrand}
          </a>
          <button
            onClick={toggleMenu}
            className='text-neutral-400 hover:text-white focus:outline-none flex sm:hidden'
            aria-label='toggleMenu'>
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt='toggle'
              className='w-6 h-6'
            />
          </button>
          <nav className='sm:flex hidden'>
            <NavItems />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? "max-h-screen h-screen" : "max-h-0"}`}>
        <nav className='p-5'>
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
