import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
/**
 * The Target component is a 3D model of a target. It is refactored to rotate the model to be front facing.
 * It uses the useGLTF hook to load the model and the useRef hook to create a reference to the model.
 * The useGSAP hook is used to animate the model's position. The animation moves the model up and down.
 *
 * @param {Object} props - The props to pass to the mesh element.
 * @returns {JSX.Element} - The JSX element representing the target model.
 */
const Target = (props) => {
  // Animate the target up and down
  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1,
      yoyo: true, // Makes the animation repeat indefinitely
      repeat: -1, // Makes the animation repeat indefinitely
    });
  });

  // Create a reference to the target
  const targetRef = useRef();

  // Load the target model using the useGLTF hook
  const { scene } = useGLTF("models/model.gltf");

  // Render the target model
  return (
    <mesh {...props} ref={targetRef} rotation={[0, 0.5, 0]} scale={0.5}>
      <primitive object={scene}></primitive>
    </mesh>
  );
};

export default Target;
