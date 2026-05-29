"use client";

import { useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import * as THREE from "three";

interface SceneProps {
  imageSrc: string;
}

const AvaScene = ({ imageSrc }: SceneProps) => {
  const texture = useTexture(imageSrc);

  const outerGroupRef = useRef<THREE.Group>(null);
  const innerGroupRef = useRef<THREE.Group>(null);

  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!outerGroupRef.current || !innerGroupRef.current) return;

    const time = state.clock.getElapsedTime();
    const pointer = state.pointer;

    // =========================================
    // FLOATING CIRCULAR MOTION
    // =========================================

    // smooth left-right movement
    outerGroupRef.current.position.x =
      0.8 + Math.cos(time * 0.8) * 0.18;

    // smooth up-down floating (MORE DOWN)
    outerGroupRef.current.position.y =
      0.8 + Math.sin(time * 1.2) * 0.2;

    // natural subtle tilts
    outerGroupRef.current.rotation.x =
      Math.sin(time * 0.9) * 0.08;

    outerGroupRef.current.rotation.y =
      Math.cos(time * 0.7) * 0.15;

    outerGroupRef.current.rotation.z =
      Math.sin(time * 0.8) * 0.06;

    // =========================================
    // MOUSE INTERACTION
    // =========================================

    innerGroupRef.current.rotation.x = THREE.MathUtils.lerp(
      innerGroupRef.current.rotation.x,
      -pointer.y * 0.08,
      0.05
    );

    innerGroupRef.current.rotation.z = THREE.MathUtils.lerp(
      innerGroupRef.current.rotation.z,
      pointer.x * 0.05,
      0.05
    );

    // =========================================
    // HOVER SCALE EFFECT
    // =========================================

    const targetScale = hovered ? 1.05 : 1;

    outerGroupRef.current.scale.setScalar(
      THREE.MathUtils.lerp(
        outerGroupRef.current.scale.x,
        targetScale,
        0.05
      )
    );
  });

  // =========================================
  // IMAGE ASPECT RATIO
  // =========================================

  const img = texture.image as {
    width?: number;
    height?: number;
  };

  const aspect =
    img?.width && img?.height
      ? img.width / img.height
      : 1;

  // image size
  const width = 7.2;
  const height = width / aspect;

  return (
    <>
      {/* Ambient Light */}
      <ambientLight intensity={1.6} />

      {/* Purple Glow */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.8}
        color="#9333ea"
      />

      {/* Accent Light */}
      <pointLight
        position={[-5, 2, 5]}
        intensity={1.2}
        color="#c4ff00"
      />

      {/* Floating Object */}
      <group
        ref={outerGroupRef}
        position={[0.8, 1.0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <group ref={innerGroupRef}>
          <mesh>
            <planeGeometry args={[width, height]} />

            <meshBasicMaterial
              map={texture}
              transparent
              alphaTest={0.1}
              side={THREE.DoubleSide}
            />
          </mesh>
        </group>
      </group>
    </>
  );
};

export default function Ava3DCanvas({
  imageSrc,
}: {
  imageSrc: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Canvas
        camera={{
          position: [0, 0, 11],
          fov: 38,
        }}
        gl={{
          alpha: true,
          antialias: true,
        }}
        style={{
          width: "100%",
          height: "100%",
          background: "transparent",
          overflow: "visible",
        }}
      >
        <Suspense fallback={null}>
          <AvaScene imageSrc={imageSrc} />
        </Suspense>
      </Canvas>
    </div>
  );
}