import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import Confetti from "react-confetti";
import { useAudio } from "@/lib/audio";
import { useWindowSize } from "@/lib/useWindowSize";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera, Environment, Stars } from "@react-three/drei";
import * as THREE from "three";

function LaunchScene() {
  const sphereRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    sphereRef.current.rotation.x = Math.cos(time / 4) * 0.2;
    sphereRef.current.rotation.y = Math.sin(time / 4) * 0.2;
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#9333ea" />
      <pointLight position={[-10, -10, -10]} intensity={1.5} color="#06b6d4" />
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <Sphere ref={sphereRef} args={[1, 100, 100]} scale={2.5}>
          <MeshDistortMaterial
            color="#9333ea"
            speed={3}
            distort={0.4}
            radius={1}
            emissive="#4c1d95"
            emissiveIntensity={0.5}
            roughness={0.1}
            metalness={0.9}
          />
        </Sphere>
      </Float>
      
      <Environment preset="night" />
    </>
  );
}

export default function Launch() {
  const [, setLocation] = useLocation();
  const { playClick } = useAudio();
  const { width, height } = useWindowSize();
  
  const [isLaunching, setIsLaunching] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (countdown === null) return;

    if (countdown === 0) {
      setShowCelebration(true);
      setShowConfetti(true);
      playClick();
      const timer = setTimeout(() => {
        setLocation("/home");
      }, 5000);
      return () => clearTimeout(timer);
    }

    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
        playClick();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown, setLocation, playClick]);

  const handleLaunch = () => {
    setIsLaunching(true);
    playClick();
    setTimeout(() => {
      setCountdown(5);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden flex items-center justify-center relative">
      {/* 3D Immersive Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <LaunchScene />
        </Canvas>
      </div>

      <AnimatePresence>
        {showConfetti && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 pointer-events-none"
          >
            <Confetti width={width} height={height} numberOfPieces={400} gravity={0.1} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none z-5" />

      <div className="relative z-10 text-center px-6 max-w-4xl w-full">
        <AnimatePresence mode="wait">
          {!isLaunching ? (
            <motion.div
              key="ready"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="space-y-4">
                <motion.h1 
                  className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50"
                  
                >
                  AI WEB<br />SPHERE
                </motion.h1>
                <p className="text-xl md:text-2xl text-white/50 font-light tracking-[0.2em] font-tech uppercase">
                  READY FOR INITIALIZATION
                </p>
              </div>

              <motion.button
                onClick={handleLaunch}
                whileHover={{ scale: 1.05, boxShadow: "0 0 50px hsl(var(--primary) / 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-16 py-8 bg-white text-black font-display font-bold text-2xl rounded-full shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-4">
                  COMMENCE LAUNCH
                </span>
              </motion.button>
            </motion.div>
          ) : showCelebration ? (
            <motion.div
              key="celebration"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-12"
            >
              <motion.div
                
              >
                <h2 className="text-7xl md:text-8xl lg:text-9xl font-display font-bold gradient-text leading-tight mb-4">
                  AI WEB<br />SPHERE
                </h2>
              </motion.div>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight"
                >
                  IS <span className="text-primary">LIVE</span> NOW! 🎉
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-white/40 font-tech tracking-widest uppercase"
                >
                  Redirecting to digital ecosystem...
                </motion.p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="countdown"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-12"
            >
              <p className="text-white/40 font-tech tracking-widest uppercase">Systems Online • Igniting Thrusters</p>
              
              <div className="relative inline-flex items-center justify-center">
                <motion.div
                  key={countdown}
                  initial={{ scale: 1.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-[12rem] md:text-[18rem] font-display font-bold leading-none gradient-text"
                >
                  {countdown}
                </motion.div>
                <svg className="absolute -inset-8 w-[calc(100%+64px)] h-[calc(100%+64px)] -rotate-90" viewBox="0 0 100 100">
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.1"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="url(#launch-grad)"
                    strokeWidth="1.5"
                    strokeDasharray="251.2"
                    initial={{ strokeDashoffset: 251.2 }}
                    animate={{ strokeDashoffset: 251.2 - ((countdown || 0) / 5) * 251.2 }}
                    transition={{ duration: 1, ease: "linear" }}
                  />
                  <defs>
                    <linearGradient id="launch-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="100%" stopColor="#490f9bff" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-1">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>
    </div>
  );
}
