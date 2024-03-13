import { OrbitControls } from "@react-three/drei";
import Robot from "./Robot";
import { Toy } from "./Toy";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
      <Robot />
    </>
  );
};
