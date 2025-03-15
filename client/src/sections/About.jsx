import {
  bioText,
  gridSubIntro,
  labelsData,
  nameShort,
  remoteWork,
  socials,
  techStack,
} from "../constants";
import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useRef, useState } from "react";
import { useStaggeredScrollAnimation } from "../gsap";
/**
 * The About component is a section of the webpage that provides information about the user.
 * It includes a grid layout with different sections such as a brief introduction, tech stack,
 * remote work capabilities, and passion for coding. It also features a copy-to-clipboard
 * functionality for the user's email address and incorporates interactive elements like
 * a 3D globe and contact button.
 */

const About = () => {
  const [hasCopied, sethasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(socials.email);
    sethasCopied(true);
    setTimeout(() => {
      sethasCopied(false);
    }, 5000);
  };
  const containerRef = useRef(null);
  useStaggeredScrollAnimation(containerRef, ".item-stagger", {
    duration: 1,
    opacity: 0,
    delay: 0.5,
    y: 20,
    stagger: 0.2,
  });
  return (
    <section className='c-space my-20' id='about'>
      <div
        className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'
        ref={containerRef}>
        <div className='col-span-1 xl:row-span-3 item-stagger'>
          <div className='grid-container'>
            {/* Maybe chnage to something u prefer */}
            <img
              src='/assets/grid1.png'
              alt='grid-1'
              className='w-full sm:h-[276px] h-fit object-contain'
            />
            <div>
              <p className='grid-headtext capitalize'>Hi, I&apos;m {nameShort}</p>
              <p className='grid-subtext'>{gridSubIntro}</p>
            </div>
          </div>
        </div>
        <div className='col-span-1 xl:row-span-3 item-stagger'>
          <div className='grid-container'>
            {/* Definitely change to something without JSM logo  but similar*/}
            <img
              src='/assets/grid2.png'
              alt='grid-2'
              className='w-full sm:h-[276px] h-fit object-contain'
            />
            <div>
              <p className='grid-headtext capitalize'>Tech stack</p>
              <p className='grid-subtext'>{techStack}</p>
            </div>
          </div>
        </div>
        <div className='col-span-1 xl:row-span-4 item-stagger'>
          <div className='grid-container'>
            <div className='rounded-3xl w-full sm:h-[326px] h-fit justify-center items-center'>
              {/* Change labels data to something u prefer */}
              {/* Maybe if ure not too busy add code that conditionally requests for day or night images */}
              <Globe
                height={326}
                width={326}
                backgroundColor='rgba(0, 0, 0, 0)'
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl='//unpkg.com/three-globe/example/img/earth-night.jpg'
                bumpImageUrl='//unpkg.com/three-globe/example/img/earth-topology.png'
                labelsData={labelsData}
              />
            </div>
            <div className='flex flex-col justify-between'>
              <p className='grid-headtext capitalize'>I work remotely</p>
              <p className='grid-subtext'>{remoteWork}</p>
              <a href='#contact'>
                <Button name='Contact Me' isBeam containerClass='w-full mt-10' />
              </a>
            </div>
          </div>
        </div>
        <div className='xl:col-span-2 xl:row-span-3 item-stagger'>
          <div className='grid-container'>
            <img
              src='/assets/grid3.png'
              alt='grid-3'
              className='w-full sm:h-[266px] h-fit object-contain'
            />
            <div>
              <p className='grid-headtext capitalize'>My Passion for coding</p>
              <p className='grid-subtext'>{bioText}</p>
            </div>
          </div>
        </div>
        {/* Maybe add linktree */}
        <div className='xl:col-span xl:row-span-2 item-stagger'>
          <div className='grid-container'>
            <img
              src='/assets/grid4.png'
              alt='grid-4'
              className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top'
            />
            <div className='space-y-2'>
              <p className='grid-subtext text-center'>Contact me</p>
              <div className='copy-container' onClick={handleCopy}>
                <img src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt='copy-email' />
                <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>
                  {socials.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
