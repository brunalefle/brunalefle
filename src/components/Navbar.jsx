import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { slides } from '../App'

export default function Navbar({ current, goTo }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const safeCurrent = Math.max(0, Math.min(typeof current === 'number' ? current : 0, Math.max(0, slides.length - 1)))
  const currentSlide = slides[safeCurrent] || slides[0]

  useEffect(() => {
    const checkFullscreen = () => {
      const active = Boolean(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement ||
        window.fullScreen ||
        (window.innerWidth === window.screen.width && window.innerHeight === window.screen.height)
      )
      setIsFullscreen(active)
    }

    checkFullscreen()

    document.addEventListener('fullscreenchange', checkFullscreen)
    document.addEventListener('webkitfullscreenchange', checkFullscreen)
    document.addEventListener('mozfullscreenchange', checkFullscreen)
    document.addEventListener('MSFullscreenChange', checkFullscreen)
    window.addEventListener('resize', checkFullscreen)

    return () => {
      document.removeEventListener('fullscreenchange', checkFullscreen)
      document.removeEventListener('webkitfullscreenchange', checkFullscreen)
      document.removeEventListener('mozfullscreenchange', checkFullscreen)
      document.removeEventListener('MSFullscreenChange', checkFullscreen)
      window.removeEventListener('resize', checkFullscreen)
    }
  }, [])

  return (
    <header
      className={isFullscreen ? 'navbar-fullscreen' : ''}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(250,249,246,0.88)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid var(--color-stone)',
      }}
    >
      <nav
        style={{
          maxWidth: '86rem',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '3.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        {/* Logo / monogram */}
        <button
          onClick={() => goTo(0)}
          style={{
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            fontSize: '0.88rem',
            color: 'var(--color-violet)',
            letterSpacing: '0.02em',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          bruna.lefle
        </button>

        {/* Desktop: section name pills (oculto em tela cheia) */}
        {!isFullscreen && (
          <ul
            className="slide-nav"
            style={{
              listStyle: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.15rem',
              overflowX: 'auto',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {slides.map((slide, i) => {
              const isActive = i === current
              return (
                <li key={slide.id}>
                  <button
                    onClick={() => goTo(i)}
                    style={{
                      padding: '0.3rem 0.8rem',
                      borderRadius: '9999px',
                      fontSize: '0.82rem',
                      fontWeight: isActive ? 600 : 400,
                      background: isActive ? 'var(--color-violet)' : 'transparent',
                      color: isActive ? 'white' : 'var(--color-ink-soft)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'background 0.2s, color 0.2s',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={e => {
                      if (!isActive) {
                        e.currentTarget.style.background = 'var(--color-cream-dark)'
                        e.currentTarget.style.color = 'var(--color-ink)'
                      }
                    }}
                    onMouseLeave={e => {
                      if (!isActive) {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.color = 'var(--color-ink-soft)'
                      }
                    }}
                  >
                    {slide.label}
                  </button>
                </li>
              )
            })}
          </ul>
        )}

        {/* Gamer HUD progress bar permanente no header */}
        <div
          className="slide-counter"
          style={{
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '3px',
            minWidth: '148px',
          }}
        >
          {/* Top row: label + percent */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.58rem',
                color: 'var(--color-violet)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              {currentSlide?.label || ''}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.58rem',
                color: 'var(--color-muted)',
                letterSpacing: '0.04em',
              }}
            >
              {Math.round(((safeCurrent + 1) / (slides.length || 1)) * 100)}%
            </span>
          </div>

          {/* Bar shell with HUD corner decorators */}
          <div style={{ position: 'relative' }}>
            {/* Corners */}
            {[['0','0','auto','0'],['0','0','0','auto'],['auto','0','0','0'],['auto','auto','0','0']].map((pos, i) => (
              <span
                key={i}
                style={{
                  position: 'absolute',
                  top: pos[0], right: pos[1], bottom: pos[2], left: pos[3],
                  width: '4px', height: '4px',
                  borderTop:    (i < 2)  ? '1.5px solid var(--color-violet)' : 'none',
                  borderBottom: (i >= 2) ? '1.5px solid var(--color-violet)' : 'none',
                  borderLeft:   (i === 0 || i === 2) ? '1.5px solid var(--color-violet)' : 'none',
                  borderRight:  (i === 1 || i === 3) ? '1.5px solid var(--color-violet)' : 'none',
                  zIndex: 2,
                }}
              />
            ))}

            {/* Track */}
            <div
              style={{
                height: '6px',
                margin: '0 1px',
                background: 'rgba(107,79,187,0.1)',
                border: '1px solid rgba(107,79,187,0.18)',
                borderRadius: '1px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* Segment ticks */}
              {Array.from({ length: slides.length - 1 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    top: 0, bottom: 0,
                    left: `${((i + 1) / slides.length) * 100}%`,
                    width: '1px',
                    background: 'rgba(250,249,246,0.5)',
                    zIndex: 2,
                  }}
                />
              ))}

              {/* Animated fill */}
              <motion.div
                animate={{ width: `${((safeCurrent + 1) / (slides.length || 1)) * 100}%` }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, var(--color-violet), var(--color-teal))',
                  boxShadow: '0 0 6px rgba(107,79,187,0.8), 0 0 12px rgba(107,79,187,0.4)',
                  borderRadius: '1px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Shimmer sweep */}
                <div className="hud-shimmer" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile hamburger (oculto em tela cheia) */}
        {!isFullscreen && (
          <button
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menu"
            className="hamburger"
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.4rem',
            }}
          >
            {[0, 1, 2].map(i => (
              <motion.span
                key={i}
                animate={
                  menuOpen
                    ? i === 0 ? { rotate: 45, y: 7 }
                    : i === 2 ? { rotate: -45, y: -7 }
                    : { opacity: 0 }
                    : { rotate: 0, y: 0, opacity: 1 }
                }
                style={{
                  display: 'block',
                  width: '20px',
                  height: '2px',
                  background: 'var(--color-ink)',
                  borderRadius: '9999px',
                  transformOrigin: 'center',
                }}
              />
            ))}
          </button>
        )}
      </nav>

      {/* Mobile drawer (oculto em tela cheia) */}
      <AnimatePresence>
        {!isFullscreen && menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            style={{
              background: 'rgba(250,249,246,0.97)',
              backdropFilter: 'blur(16px)',
              borderTop: '1px solid var(--color-stone)',
              padding: '0.75rem 1.5rem 1.25rem',
            }}
          >
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
              {slides.map((slide, i) => (
                <li key={slide.id}>
                  <button
                    onClick={() => { goTo(i); setMenuOpen(false) }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      width: '100%',
                      padding: '0.6rem 0.875rem',
                      borderRadius: '0.5rem',
                      fontSize: '0.95rem',
                      fontWeight: i === current ? 600 : 400,
                      color: i === current ? 'var(--color-violet)' : 'var(--color-ink-soft)',
                      background: i === current ? 'var(--color-violet-pale)' : 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.65rem',
                        color: i === current ? 'var(--color-violet)' : 'var(--color-muted)',
                        minWidth: '1.5rem',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {slide.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 767px) {
          .slide-nav { display: none !important; }
          .slide-counter { display: none !important; }
          .hamburger { display: flex !important; }
        }
        .slide-nav::-webkit-scrollbar { display: none; }

        /* Em modo tela cheia: esconde menu e hambúrguer, mantém nome e HUD visíveis */
        .navbar-fullscreen .slide-nav,
        .navbar-fullscreen .hamburger {
          display: none !important;
        }
        .navbar-fullscreen .slide-counter {
          display: flex !important;
        }

        :fullscreen .slide-nav,
        :-webkit-full-screen .slide-nav,
        :fullscreen .hamburger,
        :-webkit-full-screen .hamburger {
          display: none !important;
        }
        :fullscreen .slide-counter,
        :-webkit-full-screen .slide-counter {
          display: flex !important;
        }

        @media (display-mode: fullscreen) {
          .slide-nav,
          .hamburger {
            display: none !important;
          }
          .slide-counter {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  )
}
