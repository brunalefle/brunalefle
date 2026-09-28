import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const BASE = import.meta.env.BASE_URL

const slides = [
  { id: 'cidadao', src: `${BASE}photos/viewverde/viewverde-institucional.png`, alt: 'Portal Cidadão ViewVerde', chip: 'Portal Cidadão', chipColor: '#0D9488' },
  { id: 'gestao', src: `${BASE}photos/viewverde/dashboard.png`, alt: 'Painel de Gestão ViewVerde', chip: 'Painel Gestão', chipColor: '#6B4FBB' },
  { id: 'arborizacao', src: `${BASE}photos/viewverde/mapa-arvores.png`, alt: 'Mapa de Arborização Urbana', chip: 'Georreferenciamento', chipColor: '#0D9488' },
  { id: 'importacao', src: `${BASE}photos/viewverde/importacao.png`, alt: 'Importação em Lote', chip: 'XLSX / CSV', chipColor: '#D97706' },
  { id: 'dashboards', src: `${BASE}photos/viewverde/dashboard.png`, alt: 'Dashboards IQA em Tempo Real', chip: 'IQA em Tempo Real', chipColor: '#0284C7' },
  { id: 'relatorios', src: `${BASE}photos/viewverde/relatorios.png`, alt: 'Área de Relatórios PDF e Excel', chip: 'PDF & Excel', chipColor: '#6B4FBB' },
]

const stackGroups = [
  { label: 'BACK-END', color: '#0D9488', bg: 'rgba(13,148,136,0.08)', border: 'rgba(13,148,136,0.22)', tags: ['Java 25', 'Spring Boot 4', 'Spring Security + JWT', 'Spring Data JPA'] },
  { label: 'FRONT-END', color: '#6B4FBB', bg: 'rgba(107,79,187,0.08)', border: 'rgba(107,79,187,0.22)', tags: ['Angular 21', 'TypeScript', 'PrimeNG', 'Tailwind CSS', 'Leaflet'] },
  { label: 'DADOS', color: '#0284C7', bg: 'rgba(2,132,199,0.08)', border: 'rgba(2,132,199,0.22)', tags: ['PostgreSQL', 'PostGIS'] },
]

const steps = [
  { n: 1, label: 'Requisitos', color: '#6B4FBB' },
  { n: 2, label: 'Dados', color: '#6B4FBB' },
  { n: 3, label: 'Banco', color: '#6B4FBB' },
  { n: 4, label: 'Código', color: '#0D9488' },
  { n: 5, label: 'Docs', color: '#0D9488' },
  { n: 6, label: 'Ágil', color: '#0D9488' },
]

export default function ViewVerde() {
  const [current, setCurrent] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIdx, setLightboxIdx] = useState(0)
  const carouselRef = useRef(null)
  const total = slides.length

  const scrollTo = useCallback((idx) => {
    const el = carouselRef.current
    if (!el) return
    el.scrollTo({ left: idx * el.offsetWidth, behavior: 'smooth' })
    setCurrent(idx)
  }, [])

  useEffect(() => {
    const el = carouselRef.current
    if (!el) return
    const onScroll = () => setCurrent(Math.round(el.scrollLeft / el.offsetWidth))
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!lightboxOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false)
      if (e.key === 'ArrowRight') setLightboxIdx((i) => Math.min(i + 1, total - 1))
      if (e.key === 'ArrowLeft') setLightboxIdx((i) => Math.max(i - 1, 0))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxOpen, total])

  return (
    <section id="viewverde" style={{ minHeight: '100svh', paddingTop: '3.5rem', paddingBottom: '3rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', top: '-8rem', right: '-6rem', width: '32rem', height: '32rem', borderRadius: '50%', background: 'radial-gradient(circle, rgba(13,148,136,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', bottom: '-6rem', left: '-5rem', width: '26rem', height: '26rem', borderRadius: '50%', background: 'radial-gradient(circle, rgba(107,79,187,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '86rem', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>

        {/* CABEÇALHO */}
        <ScrollReveal>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.3rem' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.8vw, 2.45rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em', margin: 0 }}>
              <span style={{ color: '#0D9488' }}>ViewVerde</span>{' '}
              <span style={{ fontWeight: 400, color: 'var(--color-ink-soft)', fontSize: '0.88em' }}>— Painel de Qualidade Ambiental</span>
            </h2>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#0D9488', background: 'rgba(13,148,136,0.12)', border: '1px solid rgba(13,148,136,0.25)', padding: '0.2rem 0.65rem', borderRadius: '999px', fontWeight: 700, flexShrink: 0, marginTop: '0.35rem' }}>LANÇAMENTO 05/10/2026</span>
          </div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--color-muted)', letterSpacing: '0.04em', marginBottom: '1.25rem' }}>Prefeitura de Esteio · Residência em TIC 55</p>
        </ScrollReveal>

        {/* DUAS COLUNAS */}
        <ScrollReveal delay={0.08}>
          <div className="viewverde-two-col">

            {/* Carrossel */}
            <div style={{ borderRadius: '1.15rem', overflow: 'hidden', background: '#FFFFFF', border: '1.5px solid rgba(13,148,136,0.25)', boxShadow: '0 8px 28px rgba(13,148,136,0.08)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 1rem', background: 'rgba(250,249,246,0.98)', borderBottom: '1px solid var(--color-stone)', gap: '0.65rem', flexShrink: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  {['#FF5F57', '#FFBD2E', '#28C840'].map((c) => (<span key={c} style={{ width: '8px', height: '8px', borderRadius: '50%', background: c, opacity: 0.85 }} />))}
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--color-muted)', letterSpacing: '0.02em' }}>viewverde.esteio.rs.gov.br</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
                    {slides.map((_, i) => (
                      <button key={i} onClick={() => scrollTo(i)} title={slides[i].chip} style={{ width: i === current ? '16px' : '6px', height: '6px', borderRadius: '999px', background: i === current ? '#0D9488' : 'var(--color-stone)', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.2s ease' }} />
                    ))}
                  </div>
                  <button onClick={() => { setLightboxIdx(current); setLightboxOpen(true) }} style={{ border: '1px solid rgba(13,148,136,0.3)', background: 'rgba(13,148,136,0.08)', color: '#0D9488', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 700, padding: '0.15rem 0.55rem', borderRadius: '999px', cursor: 'pointer' }}>EXPANDIR ↗</button>
                </div>
              </div>
              <div style={{ position: 'relative', flex: 1 }}>
                {current > 0 && (
                  <button onClick={() => scrollTo(current - 1)} aria-label="Slide anterior" style={{ position: 'absolute', left: '0.6rem', top: '50%', transform: 'translateY(-50%)', zIndex: 4, width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,0.92)', border: '1px solid rgba(0,0,0,0.1)', color: 'var(--color-ink)', cursor: 'pointer', fontWeight: 700, fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}>‹</button>
                )}
                {current < total - 1 && (
                  <button onClick={() => scrollTo(current + 1)} aria-label="Próximo slide" style={{ position: 'absolute', right: '0.6rem', top: '50%', transform: 'translateY(-50%)', zIndex: 4, width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,0.92)', border: '1px solid rgba(0,0,0,0.1)', color: 'var(--color-ink)', cursor: 'pointer', fontWeight: 700, fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}>›</button>
                )}
                <div ref={carouselRef} onClick={() => { setLightboxIdx(current); setLightboxOpen(true) }} style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none', cursor: 'zoom-in', height: '340px' }}>
                  {slides.map((slide, i) => (
                    <div key={slide.id} style={{ flexShrink: 0, width: '100%', scrollSnapAlign: 'start', position: 'relative', background: '#0D1714' }}>
                      <img src={slide.src} alt={slide.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
                      <span style={{ position: 'absolute', top: '0.6rem', right: '0.6rem', fontFamily: 'var(--font-mono)', fontSize: '0.58rem', fontWeight: 700, color: slide.chipColor, background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(6px)', border: `1px solid ${slide.chipColor}33`, padding: '0.15rem 0.5rem', borderRadius: '999px', boxShadow: '0 2px 6px rgba(0,0,0,0.08)' }}>{slide.chip}</span>
                      <span style={{ position: 'absolute', bottom: '0.6rem', left: '0.65rem', fontFamily: 'var(--font-mono)', fontSize: '0.55rem', fontWeight: 700, color: '#FFFFFF', background: 'rgba(0,0,0,0.45)', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>{i + 1} / {total}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card de texto */}
            <div style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(13,148,136,0.22)', borderRadius: '1.15rem', padding: '1.35rem', boxShadow: 'var(--shadow-card)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>

                {/* ── CONTEXTO ── */}
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: '#0D9488', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '0.55rem' }}>CONTEXTO</span>
                  <div style={{ display: 'flex', alignItems: 'stretch', gap: '0.45rem' }}>

                    {/* Problemas */}
                    <div style={{ flex: 1, background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.18)', borderRadius: '0.6rem', padding: '0.6rem 0.65rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.54rem', fontWeight: 700, color: '#EF4444', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: '0.15rem' }}>Problemas</span>
                      {['Dados espalhados', 'Retrabalho em planilhas', 'Sem acesso público', 'Dúvidas por e-mail'].map((t) => (
                        <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.56rem', fontWeight: 600, color: '#EF4444', background: 'rgba(239,68,68,0.09)', border: '1px solid rgba(239,68,68,0.2)', padding: '0.1rem 0.4rem', borderRadius: '999px', whiteSpace: 'nowrap', alignSelf: 'flex-start' }}>{t}</span>
                      ))}
                    </div>

                    {/* Seta */}
                    <span style={{ flexShrink: 0, color: 'var(--color-muted)', fontSize: '1rem', fontWeight: 300, alignSelf: 'center' }}>→</span>

                    {/* Solução */}
                    <div style={{ flex: 1, background: 'rgba(13,148,136,0.05)', border: '1px solid rgba(13,148,136,0.2)', borderRadius: '0.6rem', padding: '0.6rem 0.65rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.54rem', fontWeight: 700, color: '#0D9488', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: '0.15rem' }}>Solução</span>
                      {['Base unificada', 'Importação em lote', 'Dashboards automáticos', 'Portal público + Painel de gestão'].map((t) => (
                        <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.56rem', fontWeight: 600, color: '#0D9488', background: 'rgba(13,148,136,0.09)', border: '1px solid rgba(13,148,136,0.2)', padding: '0.1rem 0.4rem', borderRadius: '999px', whiteSpace: 'nowrap', alignSelf: 'flex-start' }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── STACK ── */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.5rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--color-ink-soft)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700 }}>STACK</span>
                    <div style={{ flex: 1, height: '1px', background: 'var(--color-stone)' }} />
                  </div>

                  {/* Back-end, Front-end, Dados */}
                  {stackGroups.map((group) => (
                    <div key={group.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.32rem' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', fontWeight: 700, color: group.color, letterSpacing: '0.08em', textTransform: 'uppercase', flexShrink: 0, paddingTop: '0.18rem', minWidth: '62px' }}>{group.label}</span>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.28rem' }}>
                        {group.tags.map((tag) => (
                          <span key={tag} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 600, color: group.color, background: group.bg, border: `1px solid ${group.border}`, padding: '0.1rem 0.45rem', borderRadius: '999px', letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Qualidade */}
                  <div style={{ marginTop: '0.15rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.45rem' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', fontWeight: 700, color: '#D97706', letterSpacing: '0.08em', textTransform: 'uppercase', flexShrink: 0, paddingTop: '0.18rem', minWidth: '62px' }}>QUALIDADE</span>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.28rem' }}>
                        {['Husky', 'Commitlint', 'lint-staged', 'Vitest'].map((tag) => (
                          <span key={tag} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 600, color: '#D97706', background: 'rgba(217,119,6,0.08)', border: '1px solid rgba(217,119,6,0.22)', padding: '0.1rem 0.45rem', borderRadius: '999px', letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>{tag}</span>
                        ))}
                      </div>
                    </div>

                    {/* Mini-fluxo Git hooks */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', paddingLeft: '0.25rem', flexWrap: 'nowrap', overflowX: 'auto' }}>
                      {[
                        { hook: 'pre-commit', action: 'lint + format' },
                        { hook: 'commit-msg', action: 'Conventional Commits' },
                        { hook: 'pre-push', action: 'build + testes' },
                      ].map((step, i) => (
                        <>
                          {i > 0 && (
                            <span key={`arrow-${i}`} style={{ color: 'var(--color-muted)', fontSize: '0.65rem', flexShrink: 0, opacity: 0.5 }}>›</span>
                          )}
                          <div key={step.hook} style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem', flexShrink: 0 }}>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.52rem', fontWeight: 700, color: '#D97706', letterSpacing: '0.04em' }}>{step.hook}</span>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', color: 'var(--color-muted)', letterSpacing: '0.02em' }}>{step.action}</span>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Crédito ao time */}
              <div style={{ paddingTop: '0.75rem', marginTop: '0.85rem', borderTop: '1px solid var(--color-stone)' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--color-muted)', margin: 0, lineHeight: 1.4 }}>Desenvolvido em equipe com Vinícius Menegussi, Guilherme Argenta e Fabiano Silva.</p>
              </div>
            </div>

          </div>
        </ScrollReveal>

        {/* TRILHA */}
        <ScrollReveal delay={0.12}>
          <div style={{ marginTop: '1.5rem', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', border: '1px solid var(--color-stone)', borderRadius: '1rem', padding: '1.15rem 1.5rem', boxShadow: 'var(--shadow-card)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--color-violet)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700 }}>MINHA PARTICIPAÇÃO</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-muted)', fontStyle: 'italic' }}>· com a equipe</span>
            </div>
            <div style={{ position: 'relative', paddingBottom: '0.5rem' }}>
              <div style={{ position: 'absolute', top: '11px', left: '11px', right: '11px', height: '1.5px', background: 'linear-gradient(90deg, var(--color-violet), #0D9488)', opacity: 0.2, borderRadius: '999px' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {steps.map((step, i) => (
                  <motion.div key={step.n} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.3, delay: i * 0.09 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem', flex: 1 }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: step.color, color: '#FFFFFF', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 2px 8px ${step.color}44`, zIndex: 1, position: 'relative' }}>{step.n}</div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.56rem', fontWeight: 700, color: step.color, letterSpacing: '0.02em', textAlign: 'center', lineHeight: 1.2 }}>{step.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <p style={{ margin: '1rem 0 0', paddingTop: '0.85rem', borderTop: '1px solid var(--color-stone)', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-ink-soft)', lineHeight: 1.55, fontStyle: 'italic' }}>
              Centralizar as informações resolveu dois lados do mesmo problema: a população ganhou acesso direto aos dados e os funcionários da prefeitura deixaram de depender de planilhas espalhadas.
            </p>
          </div>
        </ScrollReveal>

      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightboxOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(10,8,20,0.92)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
            <motion.div initial={{ scale: 0.93, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.93, opacity: 0 }} transition={{ type: 'spring', damping: 28, stiffness: 320 }} onClick={(e) => e.stopPropagation()} style={{ maxWidth: '92vw', maxHeight: '90vh', width: '100%', background: '#FFFFFF', borderRadius: '1.25rem', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1.25rem', background: 'var(--color-cream)', borderBottom: '1px solid var(--color-stone)', flexShrink: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 700, color: '#0D9488', textTransform: 'uppercase', letterSpacing: '0.06em' }}>ViewVerde</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: slides[lightboxIdx].chipColor, fontWeight: 600, background: `${slides[lightboxIdx].chipColor}18`, border: `1px solid ${slides[lightboxIdx].chipColor}33`, padding: '0.1rem 0.45rem', borderRadius: '999px' }}>{slides[lightboxIdx].chip}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--color-muted)' }}>{lightboxIdx + 1} / {total}</span>
                </div>
                <button onClick={() => setLightboxOpen(false)} title="Fechar (Esc)" style={{ border: 'none', background: 'rgba(0,0,0,0.08)', color: 'var(--color-ink)', fontSize: '1rem', width: '30px', height: '30px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
              </div>
              <div style={{ position: 'relative', flex: 1, background: '#080614', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AnimatePresence mode="wait">
                  <motion.img key={lightboxIdx} src={slides[lightboxIdx].src} alt={slides[lightboxIdx].alt} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }} style={{ maxWidth: '100%', maxHeight: 'calc(90vh - 60px)', objectFit: 'contain', display: 'block' }} />
                </AnimatePresence>
                {lightboxIdx > 0 && (<button onClick={() => setLightboxIdx((i) => i - 1)} aria-label="Slide anterior" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', color: '#FFFFFF', cursor: 'pointer', fontWeight: 700, fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>‹</button>)}
                {lightboxIdx < total - 1 && (<button onClick={() => setLightboxIdx((i) => i + 1)} aria-label="Próximo slide" style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', color: '#FFFFFF', cursor: 'pointer', fontWeight: 700, fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>›</button>)}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
