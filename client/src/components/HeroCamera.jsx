import PropTypes from "prop-types";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { easing } from "maath";
/**
 * A component that wraps its children in a group and applies a basic camera animation to it.
 * If the `isMobile` prop is false, the camera will also follow the user's pointer.
 *
 * @param {React.ReactElement} children - The children to render within the group.
 * @param {boolean} isMobile - Whether the camera should follow the user's pointer.
 * @returns {React.ReactElement} - A group element that wraps the children and applies the camera animation.
 */
const HeroCamera = ({ children, isMobile }) => {
  const groupRef = useRef();
  useFrame((state, delta) => {
    if (!isMobile) {
      easing.dampE(
        groupRef.current.rotation,
        [-state.pointer.y / 3, state.pointer.x / 3, 0],
        0.25,
        delta
      );
    } else {
      easing.dampE(
        groupRef.current.rotation,
        [-state.pointer.y / 3, state.pointer.x / 3, 0],
        0.25,
        delta
      );
    }
  });
  return <group ref={groupRef}>{children}</group>;
};

HeroCamera.propTypes = {
  children: PropTypes.node.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default HeroCamera;
