import { Suspense, useRef, useState } from "react";
import { myProjects } from "../constants";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import ProjectsMonitor from "../components/ProjectMonitor";
import { useStaggeredScrollAnimation } from "../gsap";

const projectsCount = myProjects.length;

/**
 * The Projects component is a section of the webpage that displays a
 * collection of projects. It uses a carousel-like approach to display
 * the projects, with the ability to navigate between them using buttons.
 * The component also includes a 3D model of a computer, which is used to
 * display the project's information. The project's information is displayed
 * in a card-like format, which includes the project's title, description,
 * and technologies used. The component also includes a link to the live
 * site of the project.
 */
const Projects = () => {
  const [selectedProject, setselectedProject] = useState(0);
  const currentProject = myProjects[selectedProject];
  const handleNavigation = (direction) => {
    setselectedProject((prev) => {
      if (direction === "previous") {
        return prev === 0 ? projectsCount - 1 : prev - 1;
      } else {
        return prev === projectsCount - 1 ? 0 : prev + 1;
      }
    });
  };
  const containerRef = useRef(null);
  useStaggeredScrollAnimation(containerRef, ".stagger", {
    duration: 0.5,
    opacity: 0,
    delay: 0.5,
    y: 20,
    stagger: 0.2,
  });
  return (
    <section className='c-space my-20' id='work'>
      <p className='head-text capitalize'>My work</p>
      <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full' ref={containerRef}>
        <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 stagger'>
          <div className='absolute top-0 right-0'>
            <img
              src={currentProject.spotlight}
              alt='spotlight'
              className='w-full h-96 object-cover rounded-xl'
            />
          </div>
          <div
            className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg'
            style={currentProject.logoStyle}>
            <img src={currentProject.logo} alt='logo' className='w-10 h-10 shadow-sm' />
          </div>
          <div className='flex flex-col gap-5 text-white-600 my-5'>
            <p className='text-white text-2xl font-semibold animatedText'>{currentProject.title}</p>
            <p className='animatedText'>{currentProject.desc}</p>
            <p className='animatedText'>{currentProject.subdesc}</p>
          </div>
          <div className='flex items-center justify-between flex-wrap gap-5'>
            <div className='flex items-center gap-3'>
              {currentProject.tags.map((tag, index) => (
                <div key={index} className='tech-logo'>
                  <img src={tag.path} alt={tag.name} title={tag.name} />
                </div>
              ))}
            </div>
            {/* Add link to purchase as a template if available */}
            {currentProject.purchaseLink && (
              <a
                href={currentProject.purchaseLink}
                target='_blank'
                rel='noreferrer'
                className='flex items-center gap-2 cursor-pointer text-white-600'>
                <p className='capitalize'>Purchase template</p>
                <img src='/assets/arrow-up.png' className='w-3 h-3' alt='arrow' />
              </a>
            )}
            <a
              href={currentProject.href}
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-2 cursor-pointer text-white-600'>
              <p className='capitalize'>check live site</p>
              <img src='/assets/arrow-up.png' className='w-3 h-3' alt='arrow' />
            </a>
          </div>
          <div className='flex justify-between items-center mt-7'>
            <button
              title='Previous Project'
              className='arrow-btn'
              onClick={() => handleNavigation("previous")}>
              <img src='/assets/left-arrow.png' alt='left-arrow' className='w-4 h-4' />
            </button>
            <button
              title='Next Project'
              className='arrow-btn-reverse'
              onClick={() => handleNavigation("next")}>
              <img src='/assets/right-arrow.png' alt='right-arrow' className='w-4 h-4' />
            </button>
          </div>
        </div>
        <div className='border border-black-300 bg-black-200 rounded-lg h-96 md:h-full stagger'>
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[5, 5, 20]} intensity={10} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group position={[0, 4, 0]} rotation={[0.1, -3, 0]} scale={1.75}>
                  <ProjectsMonitor texture={currentProject.texture} flipY={currentProject.flip} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls
              maxPolarAngle={Math.PI / 2}
              enableZoom={false}
              minPolarAngle={Math.PI / 2}
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
