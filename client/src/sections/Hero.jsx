import { Suspense, useState, useEffect, useRef } from "react";
import { alias, calculateSizes, heroTag } from "../constants";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import Rings from "../components/Ring";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";
import { useSlideUpFadeIn, useTypewriterAnimation } from "../gsap";
import Hologram from "../components/HologramComputer";
import Headphones from "../components/Headphone";
import Drone from "../components/Drone";
import Iphone from "../components/Iphone";
/**
 * The Hero component is the main section of the homepage. It contains the name switch animation,
 * the tag switch animation, and the 3D scene.
 * @returns {JSX.Element}
 */
const Hero = () => {
  const isSmall = useMediaQuery({ query: "(max-width: 440px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  // Call the hook with a selector and scroll trigger config.
  const containerRef = useTypewriterAnimation({
    selector: "#animatedText",
  });
  const myRef = useRef(null);
  useSlideUpFadeIn(myRef, {
    duration: 1,
    y: -40,
    start: "top bottom",
    toggleActions: "restart none restart none",
  });
  const myCTAref = useRef(null);
  useSlideUpFadeIn(myCTAref, {
    duration: 2,
    y: -40,
    delay: 1,
    start: "top bottom",
    toggleActions: "restart none restart none",
  });
  const [currentTag, setCurrentTag] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTag((prevTag) => (prevTag + 1) % heroTag.length);
    }, 7500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='min-h-screen w-full flex flex-col relative' id='home'>
      <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3' ref={containerRef}>
        <p
          className='sm:text-3xl text-2xl font-medium text-white text-center font-poiret'
          ref={myRef}>
          {/* Look for a line art or hand glyph */}
          Hi, I am {alias} !<span className='waving-hand'>👋🏽</span>
        </p>
        <p className='hero_tag text-gray_gradient capitalize' id='animatedText'>
          {heroTag[currentTag]}
        </p>
        <div className='w-full h-full absolute inset-0'>
          {/* The Canvas component is from @react-three/fiber */}
          <Canvas className='w-full h-full'>
            {/* The perspectiveCamera is from @react-three/fiber */}
            {/* The `makeDefault` prop makes the camera the default camera */}
            {/* The `position` prop sets the position of the camera */}
            {/* The `Hologram` component is a 3D scene */}
            <Suspense fallback={<CanvasLoader />}>
              <perspectiveCamera makeDefault position={[0, 0, 20]} />
              <ambientLight intensity={3} />
              <directionalLight intensity={0.5} position={[10, 10, 10]} />
              <HeroCamera isMobile={isMobile}>
                <Hologram scale={1.5} rotation={sizes.deskRotation} position={sizes.deskPosition} />
              </HeroCamera>
              <group>
                {!isMobile && <Drone position={sizes.dronePosition} />}
                {!isMobile && <Headphones position={sizes.headphonePosition} />}
                {!isMobile && <Iphone position={sizes.IphonePosition} scale={0.05} />}
                {!isMobile && <Rings position={sizes.ringPosition} />}
              </group>
            </Suspense>
          </Canvas>
        </div>
      </div>
      <div className='absolute  bottom-7 right-0 left-0 w-full z-10 c-space'>
        <a href='#about' className='w-fit' ref={myCTAref}>
          <Button name="Let's work together" isBeam containerClass='sm:w-fit w-full sm:min-w-96' />
        </a>
      </div>
    </section>
  );
};

export default Hero;
