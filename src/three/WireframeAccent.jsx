import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export function WireframeAccent() {
  const ref = useRef()

  useFrame(() => {
    if (!ref.current) return

    // Very slow, premium motion
    ref.current.rotation.y += 0.0006
    ref.current.rotation.x += 0.0002
  })

  return (
    <mesh
      ref={ref}
      position={[0, 0, -2.5]} // 🔥 pushed back so it doesn't overlap text
      scale={1.4}             // 🔥 fine-tune overall size
    >
      {/* Bigger, smoother geometry */}
      <torusKnotGeometry args={[1.6, 0.4, 120, 16]} />

      {/* Clean wireframe material */}
      <meshBasicMaterial
        color="#60a5fa"
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  )
}
