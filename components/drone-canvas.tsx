"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Environment, Float, Stars } from "@react-three/drei"
import { useRef, useEffect, useState, Suspense } from "react"
import * as THREE from "three"

function DroneModel() {
  const meshRef = useRef<THREE.Group>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    setMounted(true)
    let isActive = true
    
    const handleMouseMove = (event: MouseEvent) => {
      if (!isActive || !mounted) return
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      })
    }

    const handleScroll = () => {
      if (!isActive || !mounted) return
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      isActive = false
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [mounted])

  useFrame(({ clock }) => {
    if (!meshRef.current || !mounted) return

    try {
      // Base rotation
      meshRef.current.rotation.y = clock.elapsedTime * 0.2

      // Mouse interaction - suavizado
      const targetRotationX = mousePosition.y * 0.3
      const targetRotationZ = mousePosition.x * 0.2
      
      meshRef.current.rotation.x += (targetRotationX - meshRef.current.rotation.x) * 0.05
      meshRef.current.rotation.z += (targetRotationZ - meshRef.current.rotation.z) * 0.05

      // Scroll effect
      const scrollEffect = Math.sin(scrollY * 0.01) * 0.1
      meshRef.current.position.y += (scrollEffect - meshRef.current.position.y) * 0.05
    } catch (error) {
      console.warn("Error in DroneModel animation:", error)
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef}>
        {/* Drone body - cuerpo principal más detallado */}
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[2, 0.3, 0.8]} />
          <meshStandardMaterial 
            color="#1c3e7f" 
            metalness={0.8} 
            roughness={0.2}
            envMapIntensity={1}
          />
        </mesh>

        {/* Top cover */}
        <mesh position={[0, 0.2, 0]} castShadow>
          <boxGeometry args={[1.8, 0.1, 0.6]} />
          <meshStandardMaterial color="#2d5aa0" metalness={0.6} roughness={0.3} />
        </mesh>

        {/* Drone arms - brazos con más detalle */}
        {[0, 1, 2, 3].map((i) => {
          const angle = (i * Math.PI) / 2
          const x = Math.cos(angle) * 1.5
          const z = Math.sin(angle) * 1.5
          return (
            <group key={i}>
              {/* Main arm */}
              <mesh position={[x * 0.7, 0, z * 0.7]} rotation={[0, angle, 0]} castShadow>
                <cylinderGeometry args={[0.05, 0.05, 1.5]} />
                <meshStandardMaterial color="#333333" metalness={0.7} roughness={0.4} />
              </mesh>
              
              {/* Motor housing */}
              <mesh position={[x, 0.1, z]} castShadow>
                <cylinderGeometry args={[0.15, 0.15, 0.3]} />
                <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.3} />
              </mesh>
              
              {/* Propellers */}
              <mesh position={[x, 0.25, z]} rotation={[0, 0, 0]} castShadow>
                <cylinderGeometry args={[0.4, 0.4, 0.02]} />
                <meshStandardMaterial 
                  color="#666666" 
                  transparent 
                  opacity={0.7}
                  metalness={0.5}
                  roughness={0.5}
                />
              </mesh>
              
              {/* Propeller blades - más realistas */}
              {[0, 1].map((blade) => (
                <mesh 
                  key={blade}
                  position={[x, 0.26, z]} 
                  rotation={[0, blade * Math.PI, 0]}
                  castShadow
                >
                  <boxGeometry args={[0.7, 0.01, 0.08]} />
                  <meshStandardMaterial color="#444444" metalness={0.6} roughness={0.4} />
                </mesh>
              ))}
            </group>
          )
        })}

        {/* Camera gimbal - más detallado */}
        <group position={[0, -0.3, 0]}>
          <mesh castShadow>
            <sphereGeometry args={[0.2]} />
            <meshStandardMaterial 
              color="#1c3e7f" 
              metalness={0.9} 
              roughness={0.1}
              envMapIntensity={1.5}
            />
          </mesh>
          
          {/* Camera lens */}
          <mesh position={[0, 0, 0.15]} castShadow>
            <cylinderGeometry args={[0.08, 0.08, 0.1]} />
            <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} />
          </mesh>
        </group>

        {/* LED lights */}
        {[0, 1, 2, 3].map((i) => {
          const angle = (i * Math.PI) / 2
          const x = Math.cos(angle) * 0.9
          const z = Math.sin(angle) * 0.4
          return (
            <mesh key={`led-${i}`} position={[x, 0.05, z]}>
              <sphereGeometry args={[0.03]} />
              <meshBasicMaterial color={i < 2 ? "#ff0000" : "#00ff00"} />
            </mesh>
          )
        })}
      </group>
    </Float>
  )
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    setMounted(true)
    let isActive = true
    
    const handleMouseMove = (event: MouseEvent) => {
      if (!isActive || !mounted) return
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      })
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    
    return () => {
      isActive = false
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mounted])

  useFrame(({ clock }) => {
    if (!pointsRef.current || !mounted) return

    try {
      pointsRef.current.rotation.y = clock.elapsedTime * 0.05
      pointsRef.current.rotation.x += (mousePosition.y * 0.1 - pointsRef.current.rotation.x) * 0.02
      pointsRef.current.rotation.z += (mousePosition.x * 0.05 - pointsRef.current.rotation.z) * 0.02
    } catch (error) {
      console.warn("Error in ParticleField animation:", error)
    }
  })

  const particleCount = 150
  const positions = new Float32Array(particleCount * 3)
  const colors = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 30
    positions[i * 3 + 1] = (Math.random() - 0.5) * 30
    positions[i * 3 + 2] = (Math.random() - 0.5) * 30
    
    // Colores variados para las partículas
    const color = new THREE.Color()
    color.setHSL(0.6 + Math.random() * 0.2, 0.8, 0.5 + Math.random() * 0.3)
    colors[i * 3] = color.r
    colors[i * 3 + 1] = color.g
    colors[i * 3 + 2] = color.b
  }

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          count={particleCount} 
          array={positions} 
          itemSize={3} 
        />
        <bufferAttribute 
          attach="attributes-color" 
          count={particleCount} 
          array={colors} 
          itemSize={3} 
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.08} 
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  )
}

function SceneSetup() {
  const { scene, gl } = useThree()
  
  useEffect(() => {
    if (!gl || !scene || typeof window === 'undefined') return
    
    try {
      gl.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      gl.shadowMap.enabled = true
      gl.shadowMap.type = THREE.PCFSoftShadowMap
      scene.fog = new THREE.Fog(0x0a0a1a, 15, 50)
    } catch (error) {
      console.warn("Error setting up scene:", error)
    }
  }, [gl, scene])

  return null
}

function LoadingFallback() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-blue-300 border-b-transparent rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        </div>
        <p className="text-white/70 animate-pulse">cargando visualización 3D...</p>
      </div>
    </div>
  )
}

export default function DroneCanvas() {
  const [mounted, setMounted] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const timer = setTimeout(() => {
      setMounted(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) {
    return <LoadingFallback />
  }

  if (error) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Sky Solutions</h3>
          <p className="text-white/70">tecnología de drones profesional</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full relative">
      <Suspense fallback={<LoadingFallback />}>
        <Canvas 
          camera={{ position: [0, 2, 10], fov: 60 }}
          onCreated={({ gl }) => {
            try {
              if (typeof window !== 'undefined') {
                gl.setPixelRatio(Math.min(window.devicePixelRatio, 2))
              }
            } catch (error) {
              console.warn("Error in Canvas onCreated:", error)
            }
          }}
          onError={(error) => {
            console.error("Canvas error:", error)
            setError(true)
          }}
        >
          <SceneSetup />
          
          {/* Luces mejoradas */}
          <ambientLight intensity={0.3} color="#4a90e2" />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1.2} 
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <pointLight position={[-10, -10, -5]} color="#1c3e7f" intensity={0.8} />
          <spotLight
            position={[0, 15, 0]}
            angle={0.3}
            penumbra={1}
            intensity={0.5}
            castShadow
            color="#ffffff"
          />

          {/* Componentes principales */}
          <DroneModel />
          <ParticleField />
          
          {/* Estrellas de fondo */}
          <Stars 
            radius={50} 
            depth={30} 
            count={1000} 
            factor={3} 
            saturation={0.5} 
            fade 
            speed={0.5}
          />

          {/* Ambiente y controles */}
          <Environment preset="night" />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.3}
            dampingFactor={0.05}
            enableDamping
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </Suspense>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
    </div>
  )
}