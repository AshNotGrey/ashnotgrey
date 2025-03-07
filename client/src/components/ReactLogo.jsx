/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: xenadus (https://sketchfab.com/xenadus)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/react-logo-76174ceeba96487f9863f974636f641e
Title: React logo
*/

import { Float, useGLTF } from "@react-three/drei";
/**
 * The ReactLogo component is a 3D model of the React logo. It is refactored to rotate the model to be front facing.
 * It uses the useGLTF hook to load the model and the Float component to make it float in the air.
 * The user can pass props to the component to customize it.
 *
 * @param {Object} props - The props to pass to the mesh element.
 * @returns {JSX.Element} - The JSX element representing the React logo model.
 */
const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF("/models/react_logo.glb");
  return (
    <Float floatIntensity={1}>
      <group scale={0.175} {...props} position={[3.5, 1.5, 0]} dispose={null}>
        <mesh
          geometry={nodes["React-Logo_Material002_0"].geometry}
          material={materials["Material.002"]}
          position={[-2, 0, 1]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.39, 0.39, 0.5]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload("/models/react_logo.glb");
export default ReactLogo;
