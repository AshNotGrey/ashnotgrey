import { Suspense, useState, useEffect } from "react";
import HackerRoom from "../components/HackerRoom";
import { alias, calculateSizes, heroTag } from "../constants";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Rings from "../components/Ring";
import Cube from "../components/Cube";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";
/**
 * The Hero component is the main section of the homepage. It contains the name switch animation,
 * the tag switch animation, and the 3D scene.
 * @returns {JSX.Element}
 */
const Hero = () => {
  const isSmall = useMediaQuery({ query: "(max-width: 440px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px, min-width: 769px)" });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  {
    /* Enhance with gsap */
  }
  const [currentTag, setCurrentTag] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTag((prevTag) => (prevTag + 1) % heroTag.length);
    }, 7000); // Change tag every 7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='min-h-screen w-full flex flex-col relative' id='home'>
      <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
        <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>
          {/* Look for a line art or hand glyph */}
          Hi, I am {alias} !<span className='waving-hand'>👋🏽</span>
        </p>
        <p className='hero_tag text-gray_gradient capitalize'>{heroTag[currentTag]}</p>
        <div className='w-full h-full absolute inset-0'>
          {/* The Canvas component is from @react-three/fiber */}
          <Canvas className='w-full h-full'>
            {/* The perspectiveCamera is from @react-three/fiber */}
            {/* The `makeDefault` prop makes the camera the default camera */}
            {/* The `position` prop sets the position of the camera */}
            {/* The `HackerRoom` component is a 3D scene */}
            <Suspense fallback={<CanvasLoader />}>
              <perspectiveCamera makeDefault position={[0, 0, 20]} />
              <ambientLight intensity={3} />
              <directionalLight intensity={0.5} position={[10, 10, 10]} />
              <HeroCamera isMobile={isMobile}>
                <HackerRoom
                  scale={sizes.deskScale}
                  rotation={sizes.deskRotation}
                  position={sizes.deskPosition}
                />
              </HeroCamera>
              <group>
                <Target position={sizes.targetPosition} />
                <ReactLogo position={sizes.reactLogoPosition} />
                <Rings position={sizes.ringPosition} />
                <Cube position={sizes.cubePosition} />
              </group>
            </Suspense>
          </Canvas>
        </div>
      </div>
      <div className='absolute  bottom-7 right-0 left-0 w-full z-10 c-space'>
        {/* Convert to use Link from rrd */}
        <a href='#about' className='w-fit'>
          <Button name="Let's work together" isBeam containerClass='sm:w-fit w-full sm:min-w-96' />
        </a>
      </div>
    </section>
  );
};

export default Hero;
