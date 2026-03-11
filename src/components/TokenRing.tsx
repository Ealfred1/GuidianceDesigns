import React, { useRef, useMemo, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Image, ContactShadows, Float, Cylinder, Torus, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

// Fix for IntrinsicElements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      cylinderGeometry: any;
      meshStandardMaterial: any;
      ambientLight: any;
      pointLight: any;
      boxGeometry: any;
    }
  }
}

const CanvasAny = Canvas as any;
const ImageAny = Image as any;
const ContactShadowsAny = ContactShadows as any;
const FloatAny = Float as any;
const CylinderAny = Cylinder as any;
const TorusAny = Torus as any;
const OrbitControlsAny = OrbitControls as any;
const EffectComposerAny = EffectComposer as any;
const BloomAny = Bloom as any;

const COINS = [
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma/ffffff" },
  { name: "Adobe Illustrator", icon: "https://cdn.simpleicons.org/adobe-illustrator/ffffff" },
  { name: "FigJam", icon: "https://cdn.simpleicons.org/figma/ffffff" },
  { name: "Miro", icon: "https://cdn.simpleicons.org/miro/ffffff" },
  { name: "Canva", icon: "https://cdn.simpleicons.org/canva/ffffff" },
  { name: "Linear", icon: "https://cdn.simpleicons.org/linear/ffffff" },
  { name: "Notion", icon: "https://cdn.simpleicons.org/notion/ffffff" },
  { name: "Slack", icon: "https://cdn.simpleicons.org/slack/ffffff" },
  { name: "User Research", icon: "https://cdn.simpleicons.org/google/ffffff" },
  { name: "Design Systems", icon: "https://cdn.simpleicons.org/molecule/ffffff" },
];

const CoinToken = ({ icon, position, rotation }: { icon: string, position: [number, number, number], rotation: [number, number, number] }) => {
  const meshRef = useRef<THREE.Group>(null);
  
  const initialY = useMemo(() => position[1], [position]);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
  });

  const goldMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#f59e0b",
    metalness: 0.9,
    roughness: 0.1,
    emissive: "#b45309",
    emissiveIntensity: 0.2,
  }), []);

  return (
    <group ref={meshRef} position={position} rotation={rotation}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh castShadow>
          <cylinderGeometry args={[1, 1, 0.2, 64]} />
          <primitive object={goldMaterial} attach="material" />
        </mesh>
      </group>
      <group position={[0, 0, 0.13]}>
        <ImageAny url={icon} transparent scale={0.9} />
      </group>
      <group position={[0, 0, -0.13]} rotation={[0, Math.PI, 0]}>
        <ImageAny url={icon} transparent scale={0.9} />
      </group>
    </group>
  );
};

const AncientCoin = () => {
    const groupRef = useRef<THREE.Group>(null);
    
    useFrame((state) => {
      if (!groupRef.current) return;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    });
  
    const goldMaterial = useMemo(() => new THREE.MeshStandardMaterial({
      color: "#f59e0b",
      metalness: 1.0,
      roughness: 0.05,
      emissive: "#b45309",
      emissiveIntensity: 0.3,
    }), []);
  
    const icon = "https://cdn.simpleicons.org/figma/ffffff"; // Primary tool
  
    return (
      <group ref={groupRef}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <CylinderAny args={[1, 1, 0.2, 64]} material={goldMaterial} castShadow />
          <TorusAny args={[1, 0.05, 16, 64]} rotation={[Math.PI / 2, 0, 0]} material={goldMaterial} />
        </group>
        <group position={[0, 0, 0.16]}>
          <ImageAny url="https://cdn.simpleicons.org/javascript/F7DF1E" transparent scale={1.0} />
        </group>
        <group position={[0, 0, -0.16]} rotation={[0, Math.PI, 0]}>
          <ImageAny url="https://cdn.simpleicons.org/javascript/F7DF1E" transparent scale={1.0} />
        </group>
      </group>
    );
  };

const RingScene = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const isMobile = viewport.width < 5;
  const radius = isMobile ? 5 : 7;
  const centerScale = isMobile ? 1.5 : 2;

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
  });

  return (
    <group>
      <group ref={groupRef}>
        {COINS.map((coin, i) => (
          <CoinToken
            key={i}
            icon={coin.icon}
            position={[
              radius * Math.cos((i / COINS.length) * Math.PI * 2),
              Math.sin((i / COINS.length) * Math.PI * 4) * 0.5,
              radius * Math.sin((i / COINS.length) * Math.PI * 2)
            ]}
            rotation={[0, -(i / COINS.length) * Math.PI * 2 + Math.PI / 2, 0]}
          />
        ))}
      </group>

      <FloatAny speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <group scale={centerScale}>
            <AncientCoin />
        </group>
      </FloatAny>
      
      {/* Enable rotating the view around the center. min/max PolarAngle limits the flip to keep it looking nice. */}
      <OrbitControlsAny enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 1.5} minPolarAngle={Math.PI / 3} />
    </group>
  );
};

const TokenRing = () => {
  return (
    <section id="stack" className="relative py-32 bg-[#0e0e11] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="md:w-1/2 space-y-8">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-2">
              Core Capabilities
            </div>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-transparent leading-[1.1]">
              The Modern <br /> <span className="text-primary italic">Design Stack</span>
            </h2>
            <p className="text-xl text-text-muted leading-relaxed max-w-lg">
              Crafting premium digital experiences requires the right balance of research, 
              interaction design, and systematic thinking. These are the tools and methodologies 
              that power my process.
            </p>
            
            <div className="grid grid-cols-2 gap-x-12 gap-y-6 pt-4">
               <div>
                  <h4 className="text-white font-bold mb-2">Visual & Interaction</h4>
                  <ul className="text-text-muted space-y-1">
                    <li>Figma & Auto Layout</li>
                    <li>Advanced Prototyping</li>
                    <li>Design Systems</li>
                  </ul>
               </div>
               <div>
                  <h4 className="text-white font-bold mb-2">Process & Strategy</h4>
                  <ul className="text-text-muted space-y-1">
                    <li>UX Research</li>
                    <li>User Journey Mapping</li>
                    <li>Usability Testing</li>
                  </ul>
               </div>
            </div>
          </div>

          <div className="w-full h-[60vh] relative z-0 mt-10 md:mt-0 mb-12 flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
            
            <CanvasAny
              camera={{ position: [0, 0, 16], fov: 40 }}
              dpr={[1, 1.5]} 
              gl={{ powerPreference: "high-performance", alpha: true, antialias: false }}
            >
              <Suspense fallback={null}>
                <Environment preset="city" />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} castShadow />

                <RingScene />

                <ContactShadowsAny position={[0, -5, 0]} opacity={0.3} scale={30} blur={3} far={10} />
                <EffectComposerAny enableNormalPass={false}>
                  <BloomAny luminanceThreshold={0.8} intensity={0.6} radius={0.5} />
                </EffectComposerAny>
              </Suspense>
            </CanvasAny>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.03)_0%,_transparent_70%)] pointer-events-none"></div>
    </section>
  );
};

export default TokenRing;
