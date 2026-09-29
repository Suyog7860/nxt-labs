"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Group } from "three";

function ParticleField({ count }: { count: number }) {
  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      values[index * 3] = (Math.abs(Math.sin(index * 12.9898) * 43758.5453) % 1 - 0.5) * 5.8;
      values[index * 3 + 1] = (Math.abs(Math.sin(index * 78.233) * 43758.5453) % 1 - 0.5) * 4.5;
      values[index * 3 + 2] = (Math.abs(Math.sin(index * 39.346) * 43758.5453) % 1 - 0.5) * 2;
    }
    return values;
  }, [count]);
  return <points><bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry><pointsMaterial color="#8ce9e4" size={0.018} transparent opacity={0.7} sizeAttenuation depthWrite={false} /></points>;
}

function CoreObject({ mobile }: { mobile: boolean }) {
  const group = useRef<Group>(null);
  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.16;
    group.current.rotation.x += (state.pointer.y * 0.18 - group.current.rotation.x) * 0.035;
    group.current.rotation.y += state.pointer.x * 0.0005;
  });
  return (
    <group ref={group}>
      <mesh><icosahedronGeometry args={[0.92, 1]} /><meshStandardMaterial color="#1f6997" emissive="#164967" emissiveIntensity={0.8} metalness={0.66} roughness={0.22} flatShading /></mesh>
      <mesh scale={1.045}><icosahedronGeometry args={[0.92, 1]} /><meshBasicMaterial color="#75ece0" wireframe transparent opacity={0.72} /></mesh>
      <mesh rotation={[0.55, 0.2, 0.35]}><torusGeometry args={[mobile ? 1.28 : 1.43, 0.008, 6, 120]} /><meshBasicMaterial color="#61d9dc" transparent opacity={0.76} /></mesh>
      <mesh rotation={[-0.65, 0.1, -0.38]}><torusGeometry args={[mobile ? 1.52 : 1.7, 0.006, 6, 120]} /><meshBasicMaterial color="#4787ff" transparent opacity={0.65} /></mesh>
      <mesh position={[-1.42, 0.88, 0.04]} scale={0.17}><boxGeometry /><meshStandardMaterial color="#d2fb72" emissive="#a2ce48" emissiveIntensity={0.5} metalness={0.35} roughness={0.3} /></mesh>
      <mesh position={[1.45, -0.78, 0.1]} scale={0.115} rotation={[0.4, 0.6, 0.3]}><boxGeometry /><meshStandardMaterial color="#69dddf" emissive="#31879a" emissiveIntensity={0.7} metalness={0.5} roughness={0.24} /></mesh>
    </group>
  );
}

function Scene({ mobile }: { mobile: boolean }) {
  return <><ambientLight intensity={0.65} /><pointLight position={[3, 2, 3]} color="#8fe9df" intensity={mobile ? 13 : 19} /><pointLight position={[-3, -1, 2]} color="#4389ff" intensity={mobile ? 8 : 12} /><Float speed={mobile ? 0.55 : 0.85} rotationIntensity={mobile ? 0.09 : 0.16} floatIntensity={mobile ? 0.12 : 0.2}><CoreObject mobile={mobile} /></Float><ParticleField count={mobile ? 18 : 54} /></>;
}

export default function SceneCanvas({ mobile }: { mobile: boolean }) {
  return <Canvas className="hero-canvas" camera={{ position: [0, 0, 5.2], fov: 43 }} dpr={mobile ? [1, 1.15] : [1, 1.5]} gl={{ alpha: true, antialias: !mobile, powerPreference: "low-power" }} fallback={<div className="scene-fallback"><div className="fallback-ring" /><div className="fallback-ring fallback-ring-two" /><div className="fallback-diamond"><span>N</span></div></div>}><Scene mobile={mobile} /></Canvas>;
}