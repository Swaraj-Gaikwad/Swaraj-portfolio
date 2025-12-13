import { Canvas } from '@react-three/fiber'
import { WireframeAccent } from './WireframeAccent'

export function Hero3D() {
  return (
    <Canvas
      gl={{ alpha: true }}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
      }}
      camera={{ position: [0, 0, 4] }}
    >
      <WireframeAccent />
    </Canvas>
  )
}

