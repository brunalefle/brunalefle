import { motion, AnimatePresence } from 'framer-motion'

export default function SlideArrows({ current, total, goTo }) {
  const hasPrev = current > 0
  const hasNext = current < total - 1

  const btnBase = {
    position: 'fixed',
    bottom: '1.75rem',
    zIndex: 90,
    width: '2.75rem',
    height: '2.75rem',
    borderRadius: '50%',
    border: '1.5px solid var(--color-stone)',
    background: 'rgba(250,249,246,0.9)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 12px rgba(28,25,23,0.08)',
    transition: 'border-color 0.2s, background 0.2s',
  }

  return (
    <>
      {/* Prev */}
      <AnimatePresence>
        {hasPrev && (
          <motion.button
            key="prev"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.18 }}
            onClick={() => goTo(current - 1)}
            aria-label="Slide anterior"
            style={{ ...btnBase, left: '1.25rem' }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--color-violet)'
              e.currentTarget.style.background = 'var(--color-violet-pale)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--color-stone)'
              e.currentTarget.style.background = 'rgba(250,249,246,0.9)'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="var(--color-violet)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Progress dots */}
      <div
        style={{
          position: 'fixed',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 90,
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
        }}
      >
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ir para slide ${i + 1}`}
            style={{
              width: i === current ? '1.5rem' : '0.4rem',
              height: '0.4rem',
              borderRadius: '9999px',
              background: i === current ? 'var(--color-violet)' : 'var(--color-stone)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'width 0.3s ease, background 0.2s',
            }}
          />
        ))}
      </div>

      {/* Next */}
      <AnimatePresence>
        {hasNext && (
          <motion.button
            key="next"
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            transition={{ duration: 0.18 }}
            onClick={() => goTo(current + 1)}
            aria-label="Próximo slide"
            style={{ ...btnBase, right: '1.25rem' }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--color-violet)'
              e.currentTarget.style.background = 'var(--color-violet-pale)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--color-stone)'
              e.currentTarget.style.background = 'rgba(250,249,246,0.9)'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="var(--color-violet)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
