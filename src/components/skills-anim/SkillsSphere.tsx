"use client";

import type { Group } from "three";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Html } from "@react-three/drei";
import { SKILLS_ICONS } from "@/constants/skills";

export default function SkillsSphere() {
  const groupRef = useRef<Group>(null!);
  const [isHovered, setIsHovered] = useState(false);

  useFrame(() => {
    if (groupRef.current && !isHovered) {
      groupRef.current.rotation.y += 0.01;
      groupRef.current.rotation.x += 0.005;
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <Sphere args={[3, 16, 16]} visible={false}>
        {SKILLS_ICONS.map(({ Icon, position, color }, index) => (
          <Html
            key={index}
            position={position}
            transform
            occlude="blending"
            style={{
              transition: "all 0.2s",
              transform: `scale(${isHovered ? 1.2 : 1})`,
              pointerEvents: "auto",
            }}
          >
            <div
              className="transition-transform hover:scale-125"
              style={{ color }}
            >
              <Icon size={18} />
            </div>
          </Html>
        ))}
      </Sphere>
    </group>
  );
}
