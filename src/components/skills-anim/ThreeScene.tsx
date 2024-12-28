"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SkillsSphere from "./SkillsSphere";

export default function ThreeScene() {
  return (
    <div className="relative mx-auto h-[300px] w-full max-w-[600px] cursor-grab px-2">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 40 }}
        style={{ width: "100%", height: "100%" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <SkillsSphere />
        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}
