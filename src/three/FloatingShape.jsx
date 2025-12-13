import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import * as THREE from 'three'

export function FloatingShape() {
  const ref = useRef()

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.001
      ref.current.rotation.y += 0.002
      ref.current.position.y = Math.sin(Date.now() * 0.0005) * 0.3
    }
  })

  return (
    <group ref={ref}>
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial
          color="#9d4edd"
          wireframe={false}
          metalness={0.7}
          roughness={0.2}
          emissive="#00d9ff"
          emissiveIntensity={0.3}
        />
      </Sphere>
    </group>
  )
}
