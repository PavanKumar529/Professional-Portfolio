import React from "react";
import { Canvas } from "@react-three/fiber";
import { Box } from "@react-three/drei";

function ThreeDAnimation() {
  return (
    <Canvas className="w-full h-64">
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Box args={[1, 1, 1]} position={[0, 0, 0]} rotation={[0.4, 0.2, 0]}>
        <meshStandardMaterial color="orange" />
      </Box>
    </Canvas>
  );
}

export default ThreeDAnimation;
