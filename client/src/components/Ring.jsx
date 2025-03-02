import { useGSAP } from "@gsap/react";
import { Center, useTexture } from "@react-three/drei";
import gsap from "gsap";
import { useCallback, useRef } from "react";
import PropTypes from "prop-types";

/**
 * The Rings component renders a series of four tori that are each animated to rotate
 * in the X and Y axes. The tori are positioned according to the given `position`
 * prop.
 *
 * @param {array} position - The position of the rings.
 * @returns {JSX.Element} - The JSX element representing the rings.
 */
const Rings = ({ position }) => {
  // an array of refs to the four tori
  const refList = useRef([]);
  // a callback function to get a ref to a torus
  const getRef = useCallback((mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  // a texture to be used as the material on the tori
  const texture = useTexture("textures/rings.png");

  // a GSAP animation to rotate the tori
  useGSAP(
    () => {
      if (refList.current.length === 0) return;

      // set the position of each torus to the given position
      refList.current.forEach((r) => {
        r.position.set(position[0], position[1], position[2]);
      });

      // create a timeline animation that rotates the tori
      gsap
        .timeline({
          repeat: -1,
          repeatDelay: 0.5,
        })
        .to(
          refList.current.map((r) => r.rotation),
          {
            // rotate each torus by two pi radians in the Y axis
            y: `+=${Math.PI * 2}`,
            // rotate each torus by negative two pi radians in the X axis
            x: `-=${Math.PI * 2}`,
            // animate the rotation over 2.5 seconds
            duration: 2.5,
            // stagger the animation by 0.15 seconds for each torus
            stagger: {
              each: 0.15,
            },
          }
        );
    },
    {
      // if the position prop changes, re-run the animation
      dependencies: position,
    }
  );

  return (
    <Center>
      <group scale={0.15}>
        {Array.from({ length: 4 }, (_, index) => (
          <mesh key={index} ref={getRef}>
            <torusGeometry args={[(index + 1) * 0.5, 0.1]}></torusGeometry>
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  );
};
Rings.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
};
export default Rings;
