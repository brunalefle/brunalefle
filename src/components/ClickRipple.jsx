import { useState, useEffect } from 'react'

export default function ClickRipple() {
  const [ripples, setRipples] = useState([])

  useEffect(() => {
    const handleClick = (e) => {
      const id = Date.now() + Math.random()
      const newRipple = {
        id,
        x: e.clientX,
        y: e.clientY,
      }
      setRipples((prev) => [...prev.slice(-12), newRipple])

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id))
      }, 600)
    }

    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 99999,
        overflow: 'hidden',
      }}
    >
      {ripples.map((r) => (
        <span
          key={r.id}
          style={{
            position: 'absolute',
            left: r.x,
            top: r.y,
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            border: '2px solid rgba(107, 79, 187, 0.65)',
            background: 'radial-gradient(circle, rgba(139, 111, 219, 0.35) 0%, rgba(42, 157, 143, 0.15) 100%)',
            animation: 'click-ripple-anim 0.55s cubic-bezier(0.1, 0.8, 0.3, 1) forwards',
            pointerEvents: 'none',
          }}
        />
      ))}

      <style>{`
        @keyframes click-ripple-anim {
          0% {
            width: 8px;
            height: 8px;
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            width: 72px;
            height: 72px;
            opacity: 0;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
    </div>
  )
}
