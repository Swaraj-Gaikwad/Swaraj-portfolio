export function GlobalBackground() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        background:
          'radial-gradient(circle at top, #020617 0%, #000000 70%)',
        overflow: 'hidden',
      }}
    >
      {/* Animated gradient overlay */}
      <div
        className="hero-gradient"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.18,
        }}
      />
    </div>
  )
}
