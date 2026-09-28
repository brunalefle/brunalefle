import { useRef, useState, useEffect, useCallback } from 'react'
import Navbar from './components/Navbar'
import SlideArrows from './components/SlideArrows'
import ClickRipple from './components/ClickRipple'
import Hero from './sections/Hero'
import AlemDaProfissao from './sections/AlemDaProfissao'
import Trajetoria from './sections/Trajetoria'
import ViewVerde from './sections/ViewVerde'
import PorQueIA from './sections/PorQueIA'
import TransicaoDadosIA from './sections/TransicaoDadosIA'
import ParaOndeVou from './sections/ParaOndeVou'
import Contato from './sections/Contato'

export const slides = [
  { id: 'hero',       label: 'Início',           Component: Hero,             bg: 'linear-gradient(135deg, #FAF7FE 0%, #F3EEFA 100%)' },
  { id: 'alem',       label: 'Sobre mim',         Component: AlemDaProfissao,  bg: 'linear-gradient(180deg, #F0FAF7 0%, #E6F7F0 100%)' },
  { id: 'trajetoria', label: 'Trajetória',         Component: Trajetoria,       bg: 'linear-gradient(180deg, #F0F6FF 0%, #E8F2FE 100%)' },
  { id: 'viewverde',  label: 'ViewVerde',          Component: ViewVerde,        bg: 'linear-gradient(180deg, #F0FAF7 0%, #E6F5F0 100%)' },
  { id: 'porqueIA',   label: 'Por que IA',         Component: PorQueIA,         bg: 'linear-gradient(180deg, #F7F3FD 0%, #EFE8FA 100%)' },
  { id: 'transicao',  label: 'Transição',          Component: TransicaoDadosIA, bg: 'linear-gradient(180deg, #F0F7FD 0%, #E4EFFB 100%)' },
  { id: 'paravou',    label: 'Futuro',             Component: ParaOndeVou,      bg: 'linear-gradient(180deg, #F0F9FF 0%, #E0F2FE 100%)' },
  { id: 'contato',    label: 'Contato',            Component: Contato,          bg: 'linear-gradient(135deg, #F8F5FE 0%, #EFF6FF 50%, #F0FAF7 100%)' },
]

export default function App() {
  const containerRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const isScrolling = useRef(false)

  // Track current slide via scroll position
  const onScroll = useCallback(() => {
    if (!containerRef.current) return
    const { scrollLeft, clientWidth } = containerRef.current
    const index = Math.round(scrollLeft / clientWidth)
    setCurrent(Math.max(0, Math.min(index, slides.length - 1)))
  }, [])

  // Navigate to a specific slide
  const goTo = useCallback((index) => {
    if (!containerRef.current) return
    const clamped = Math.max(0, Math.min(index, slides.length - 1))
    containerRef.current.scrollTo({
      left: clamped * containerRef.current.clientWidth,
      behavior: 'smooth',
    })
  }, [])

  const safeCurrent = Math.max(0, Math.min(current, slides.length - 1))

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') goTo(safeCurrent + 1)
      if (e.key === 'ArrowLeft')  goTo(safeCurrent - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [safeCurrent, goTo])

  return (
    <>
      <ClickRipple />
      <Navbar current={safeCurrent} goTo={goTo} />

      {/* Horizontal slide container */}
      <div
        ref={containerRef}
        onScroll={onScroll}
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100vw',
          height: '100svh',
          overflowX: 'scroll',
          overflowY: 'hidden',
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
          // Hide scrollbar
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        <style>{`
          div::-webkit-scrollbar { display: none; }
        `}</style>

        {slides.map(({ id, Component, bg }, i) => (
          <div
            key={id}
            id={id}
            style={{
              width: '100vw',
              height: '100svh',
              flexShrink: 0,
              scrollSnapAlign: 'start',
              overflowY: 'auto',
              overflowX: 'hidden',
              background: bg || 'var(--color-cream)',
              transition: 'background 0.3s ease',
              // Hide inner scrollbar too
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            <Component goTo={goTo} current={safeCurrent} slideIndex={i} />
          </div>
        ))}
      </div>

      <SlideArrows current={safeCurrent} total={slides.length} goTo={goTo} />
    </>
  )
}
