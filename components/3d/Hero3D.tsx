"use client";

import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
} from "@react-three/drei";

type Hero3DProps = {
  modelUrl?: string;
  usePlaceholder?: boolean;
};

function PlaceholderBottle() {
  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.35}>
      <group>
        <mesh position={[0, 0.1, 0]}>
          <cylinderGeometry args={[1.15, 1.25, 3.2, 64]} />
          <meshStandardMaterial
            color="#111111"
            metalness={0.75}
            roughness={0.2}
          />
        </mesh>

        <mesh position={[0, 1.9, 0]}>
          <cylinderGeometry args={[0.45, 0.45, 0.5, 64]} />
          <meshStandardMaterial
            color="#1a1a1a"
            metalness={0.8}
            roughness={0.15}
          />
        </mesh>

        <mesh position={[0, 2.25, 0]}>
          <cylinderGeometry args={[0.55, 0.55, 0.25, 64]} />
          <meshStandardMaterial
            color="#c6a15b"
            metalness={0.85}
            roughness={0.2}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function Hero3D({
  modelUrl,
  usePlaceholder = true,
}: Hero3DProps) {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 35 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <spotLight
          position={[5, 8, 5]}
          angle={0.3}
          penumbra={1}
          intensity={2}
        />
        <pointLight position={[-4, 2, 3]} intensity={1} />

        {usePlaceholder && <PlaceholderBottle />}

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.6}
        />

        <Environment preset="studio" />

        <ContactShadows
          position={[0, -1.7, 0]}
          opacity={0.45}
          scale={8}
          blur={2.5}
          far={4}
        />
      </Canvas>
    </div>
  );
}
