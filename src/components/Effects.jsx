import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <div
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          width: '12px',
          height: '12px',
          backgroundColor: 'var(--accent-color)',
          borderRadius: '50%',
          mixBlendMode: 'screen',
          transition: 'opacity 0.3s ease',
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Outer glow ring */}
      <div
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          width: '32px',
          height: '32px',
          border: '2px solid var(--accent-color)',
          borderRadius: '50%',
          mixBlendMode: 'screen',
          transition: 'opacity 0.3s ease',
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          zIndex: 9998,
          opacity: isVisible ? 0.6 : 0,
        }}
      />
    </>
  )
}

export function AnimatedGradientBg() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      pointerEvents: 'none',
      overflow: 'hidden',
      zIndex: -10,
    }}>
      {/* Top left gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '384px',
        height: '384px',
        background: 'rgba(0, 217, 255, 0.1)',
        borderRadius: '50%',
        filter: 'blur(120px)',
        animation: 'pulse 8s ease-in-out infinite',
      }} />

      {/* Bottom right gradient */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '384px',
        height: '384px',
        background: 'rgba(236, 72, 153, 0.1)',
        borderRadius: '50%',
        filter: 'blur(120px)',
        animation: 'pulse 8s ease-in-out infinite 1s',
      }} />

      {/* Center gradient */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom right, rgba(147, 51, 234, 0.05), transparent, transparent)',
        filter: 'blur(120px)',
        transform: 'translate(-50%, -50%)',
      }} />
    </div>
  )
}
