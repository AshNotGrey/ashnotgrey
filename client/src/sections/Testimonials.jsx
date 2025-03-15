import { useRef } from "react";
import { clientReviews } from "../constants";
import { useStaggeredScrollAnimation } from "../gsap";

/**
 * The Testimonials component renders a section of the webpage containing
 * a collection of client reviews. Each review includes the client's name,
 * position, and review text. The component also includes a rating system
 * displayed as a series of stars.
 */
const Testimonials = () => {
  const containerRef = useRef(null);
  useStaggeredScrollAnimation(containerRef, ".testimony", {
    duration: 1,
    opacity: 0,
    delay: 0.5,
    y: 20,
    stagger: 0.2,
  });
  return (
    <section className='c-space my-20' id='testimonial'>
      <h3 className='head-text'>Hear from my clients</h3>
      <div className='client-container' ref={containerRef}>
        {clientReviews.map(({ id, name, review, img, position }) => (
          <div className='client-review testimony' key={id}>
            <div>
              <p className='text-white font-light'>{review}</p>
              <div className='client-content'>
                <div className='flex gap-3'>
                  <img src={img} alt={name} className='w-12 h-12 rounded-full' />
                  <div className='flex flex-col'>
                    <p className='font-semibold text-white-800'>{name}</p>
                    <p className='text-white-500 md:text-base text-sm'>{position}</p>
                  </div>
                </div>
                <div className='flex self-end items-center gap-2'>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img key={index} src='/assets/star.png' className='w-4 h-4' alt='star' />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
