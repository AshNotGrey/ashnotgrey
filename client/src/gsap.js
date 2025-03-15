import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
// The useTypewriterAnimation hook animates text as if it were being typed.
/**
 * Animates text as if it were being typed.
 * @param {object} options - The options for the animation.
 * @param {string} options.selector - The CSS selector for the target element.
 * @param {object} [options.scrollTriggerConfig] - Optional configuration for the ScrollTrigger.
 * @returns {object} - A ref for the container element.
 */
export function useTypewriterAnimation({ selector, scrollTriggerConfig = { start: "top center" } }) {
    const containerRef = useRef(null);

    useGSAP(() => {
        if (!containerRef.current) return;
        const element = containerRef.current.querySelector(selector);
        if (!element) {
            console.warn(`No element found for selector: ${selector}`);
            return;
        }

        // Wrap each character in a <span> if not already done
        if (!element.querySelector("span")) {
            const text = element.textContent;
            element.innerHTML = "";
            [...text].forEach((char) => {
                const span = document.createElement("span");
                span.textContent = char;
                element.appendChild(span);
            });
        }

        const letters = element.querySelectorAll("span");
        const text = element.textContent;

        gsap.from(letters, {
            duration: text.length * 0.1,
            opacity: 0,
            stagger: 0.075,
            scrollTrigger: scrollTriggerConfig
                ? { trigger: element, ...scrollTriggerConfig, toggleActions: "play none none reverse" }
                : undefined,
        });
    }, [selector, scrollTriggerConfig]);

    return containerRef;
}


// slide up fade in animation
/**
 * Slides up and fades in an element when it enters the viewport.
 * @param {object} ref - The ref of the target element.
 * @param {object} [options] - Optional configuration for the animation.
 * @param {number} [options.duration=1] - Duration of the animation in seconds.
 * @param {number} [options.delay=0] - Delay before the animation starts.
 * @param {number} [options.y=50] - vertical dist of y.
 * @param {string} [options.start="top 80%"] - The position to start the animation.
 */
// The useSlideUpFadeIn hook slides elements in from the left when they enter the viewport.
export const useSlideUpFadeIn = (
    ref,
    { duration = 1, delay = 0, y = 50, start = "top 80%", toggleActions = "play none none reverse", opacity = 0 } = {}
) => {
    useGSAP(() => {
        const element = ref.current;
        if (!element) return;

        gsap.from(element, {
            opacity: opacity,
            y,
            duration,
            delay,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: element,
                start,
                toggleActions: toggleActions
            }
        });
    }, [ref, duration, delay, y, start]);
};


// The useStaggeredAnimation hook animates a list of items with a stagger effect.
/**
 * Animates a list of items with a stagger effect.
 * @param {object} ref - The ref of the container element.
 * @param {object} [options] - Optional configuration for the animation.
 * @param {number} [options.duration=0.5] - Duration of the animation in seconds.
 * @param {number} [options.opacity=0] - Opacity of the items.
 * @param {number} [options.y=20] - Vertical dist of y.
 * @param {number} [options.stagger=0.2] - Stagger between each item.
 * @param {string} [options.itemSelector=".item"] - The CSS selector for the items.
 */
export const useStaggeredScrollAnimation = (
    ref, selector,
    {
        duration = 1,
        opacity = 0,
        y = 20,
        delay = 1,
        stagger = 0.2,
        itemSelector = selector,
        start = "top bottom",
        // Restart the animation on both entering from the top and bottom.
        toggleActions = "restart none restart none"
    } = {}
) => {
    useGSAP(() => {
        if (!ref.current) return;
        const items = ref.current.querySelectorAll(itemSelector);
        gsap.from(items, {
            duration,
            opacity,
            delay,
            y,
            stagger,
            scrollTrigger: {
                trigger: ref.current,
                start,
                toggleActions
            }
        });
    }, [ref, duration, opacity, y, stagger, itemSelector, start, toggleActions]);
};

// The useSlideDownFadeIn hook slides elements down and fades them in when they enter the viewport.
/**
 * Slides down and fades in an element when it enters the viewport.
 * @param {object} ref - The ref of the target element.
 * @param {object} [options] - Optional configuration for the animation.
 * @param {number} [options.duration=1] - Duration of the animation in seconds.
 * @param {number} [options.y=-20] - Vertical dist of y.
 */
export const useSlideDownFadeIn = (ref, { duration = 2, y = -20 } = {}) => {
    useGSAP(() => {
        if (!ref.current) return;

        gsap.from(ref.current, {
            opacity: 0,
            y,
            duration,
            ease: "power2.out"
        });
    }, [ref]); // Runs only once on mount
};