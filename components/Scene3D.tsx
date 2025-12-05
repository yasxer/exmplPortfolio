'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Suspense } from 'react';

const AnimatedSphere = () => {
  return (
    <Sphere args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#00d4ff"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

const Scene3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4facfe" />
          <AnimatedSphere />
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={1}
            enablePan={false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
