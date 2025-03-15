import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../components/CanvasLoader";
import { Suspense, useRef, useState } from "react";
import { workExperiences } from "../constants";
import { OrbitControls } from "@react-three/drei";
import Developer from "../components/Developer";
import { useSlideUpFadeIn } from "../gsap";
// todo add button for viewing resume and downloading it
const Experience = () => {
  const [animation, setanimation] = useState("idle");
  const myRef = useRef(null);
  useSlideUpFadeIn(myRef, {
    duration: 1,
    y: 20,
    start: "top bottom",
    toggleActions: "play none none reverse",
  });
  return (
    <section className='c-space my-20'>
      <div className='w-full text-white-600'>
        <h3 className='head-text capitalize'>My work experience</h3>
        <div className='work-container'>
          <div className='work-canvas md:h-full h-96'>
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight
                intensity={0.5}
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                castShadow
              />
              <directionalLight intensity={3} position={[10, 10, 10]} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={CanvasLoader}>
                <Developer position-y={-3} scale={3} animationName={animation} />
              </Suspense>
            </Canvas>
          </div>
          <div className='work-content'>
            <div className='sm:py-10 py-5 sm:px-5 px-2.5' ref={myRef}>
              {workExperiences.map(({ id, name, pos, duration, title, icon, animation }) => (
                <div
                  className='work-content_container group'
                  key={id}
                  onClick={() => setanimation(animation.toLowerCase())}
                  onPointerOver={() => setanimation(animation.toLowerCase())}
                  onPointerOut={() => setanimation("idle")}>
                  <div className='flex flex-col h-full justify-start items-center py-2'>
                    <div className='work-content_logo'>
                      <img src={icon} alt='logo' className='w-full h-full' />
                    </div>
                    <div className='work-content_bar' />
                  </div>
                  <div className='sm:p-5 px-2.5 py-5'>
                    <p className='font-bold text-white-800'>{name}</p>
                    <p className='text-sm mb-5'>{`${pos} → ${duration}`}</p>
                    <p className='group-hover:text-white transition ease-in-out duration-500'>
                      {title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
