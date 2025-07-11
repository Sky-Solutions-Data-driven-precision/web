"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Float } from "@react-three/drei"
import { useRef, useEffect, useState } from "react"
import type * as THREE from "three"

function DroneModel() {
  const meshRef = useRef<THREE.Group>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Base rotation
      meshRef.current.rotation.y = clock.elapsedTime * 0.2

      // Mouse interaction
      meshRef.current.rotation.x = mousePosition.y * 0.3
      meshRef.current.rotation.z = mousePosition.x * 0.2

      // Scroll effect
      const scrollEffect = Math.sin(scrollY * 0.01) * 0.1
      meshRef.current.position.y = scrollEffect
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef}>
        {/* Drone body */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2, 0.3, 0.8]} />
          <meshStandardMaterial color="#1c3e7f" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Drone arms */}
        {[0, 1, 2, 3].map((i) => {
          const angle = (i * Math.PI) / 2
          const x = Math.cos(angle) * 1.5
          const z = Math.sin(angle) * 1.5
          return (
            <group key={i}>
              <mesh position={[x * 0.7, 0, z * 0.7]} rotation={[0, angle, 0]}>
                <cylinderGeometry args={[0.05, 0.05, 1.5]} />
                <meshStandardMaterial color="#333333" />
              </mesh>
              {/* Propellers */}
              <mesh position={[x, 0.2, z]} rotation={[0, 0, 0]}>
                <cylinderGeometry args={[0.4, 0.4, 0.02]} />
                <meshStandardMaterial color="#666666" transparent opacity={0.7} />
              </mesh>
            </group>
          )
        })}

        {/* Camera gimbal */}
        <mesh position={[0, -0.3, 0]}>
          <sphereGeometry args={[0.2]} />
          <meshStandardMaterial color="#1c3e7f" metalness={0.9} roughness={0.1} />
        </mesh>
      </group>
    </Float>
  )
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.elapsedTime * 0.05
      pointsRef.current.rotation.x = mousePosition.y * 0.1
      pointsRef.current.rotation.z = mousePosition.x * 0.05
    }
  })

  const particleCount = 100
  const positions = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
  }

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#1c3e7f" size={0.05} />
    </points>
  )
}

export function DroneScene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} color="#1c3e7f" intensity={0.5} />

      <DroneModel />
      <ParticleField />

      <Environment preset="night" />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  )
}
