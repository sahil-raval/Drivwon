import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";

function AnimatedShape() {
  const meshRef = useRef<any>();

  useFrame((state) => {
    if (meshRef.current) {
      // meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      // meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={1.8} ref={meshRef}>
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.4} // Strength, 0 disables the effect (default=1)
          speed={2} // Speed (default=1)
          roughness={0.2}
          metalness={0.8}
          wireframe={true}
        />
      </Sphere>
      <Sphere args={[1, 100, 200]} scale={1.6}>
         <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={0.3}
        />
      </Sphere>
    </Float>
  );
}

export default function AboutScene() {
  return (
    <div className="absolute inset-0 z-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="blue" intensity={1} />
        <AnimatedShape />
      </Canvas>
    </div>
  );
}
