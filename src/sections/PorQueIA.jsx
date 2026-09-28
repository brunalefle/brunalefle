import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const SpreadsheetIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 38 38" fill="none" strokeWidth="1.6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="3" width="22" height="28" rx="2.5"/>
    <line x1="9" y1="10" x2="23" y2="10"/>
    <line x1="9" y1="15" x2="23" y2="15"/>
    <line x1="9" y1="20" x2="18" y2="20"/>
    <line x1="27" y1="13" x2="33" y2="19"/>
    <line x1="33" y1="13" x2="27" y2="19"/>
  </svg>
)

const FunnelIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 38 38" fill="none" strokeWidth="1.6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 7h24l-9 13v9l-6-3v-6L7 7z"/>
    <circle cx="30" cy="9" r="3.5" stroke="#D97706" fill="rgba(217,119,6,0.15)" strokeWidth="1.4"/>
    <line x1="30" y1="7.5" x2="30" y2="10.5" stroke="#D97706" strokeWidth="1.4"/>
    <line x1="28.5" y1="9" x2="31.5" y2="9" stroke="#D97706" strokeWidth="1.4"/>
  </svg>
)

const BoltIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 38 38" fill="none" strokeWidth="1.6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 3L7 20h11l-2 15 15-18H20l1-14z"/>
  </svg>
)

const TreeIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" strokeWidth="1.6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4L9 14h4l-5 8h16l-5-8h4L16 4z"/>
    <path d="M16 22v7"/>
  </svg>
)

// Print da planilha de indicadores
const CEVS_PRINT = `${import.meta.env.BASE_URL}photos/cevs-indicadores.png`

export default function PorQueIA() {
  const [lightbox, setLightbox] = useState(false)

  // Fechamento com tecla Escape
  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  return (
    <section
      id="porqueIA"
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '4.5rem',
        paddingBottom: '4.5rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Luz ambiente de fundo */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-8rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '46rem',
          height: '32rem',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(13,148,136,0.08) 0%, rgba(107,79,187,0.06) 45%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '72rem', width: '100%', position: 'relative', zIndex: 1 }}>

        {/* TÍTULO DA SEÇÃO */}
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3.2rem' }}>
            <h2
              style={{
                fontSize: 'clamp(2.1rem, 4.5vw, 3.2rem)',
                fontWeight: 800,
                color: 'var(--color-ink)',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                margin: 0,
              }}
            >
              Por que{' '}
              <span style={{ color: 'var(--color-violet)' }}>Dados & IA</span>?
            </h2>
          </div>
        </ScrollReveal>

        {/* ── 1. FLUXO HORIZONTAL EM 3 ETAPAS PERFEITAMENTE BALANCEADAS ── */}
        <div className="porqueia-flow-row">

          {/* ETAPA 1: Planilhas manuais */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="porqueia-step-card"
            style={{
              background: 'rgba(120,113,108,0.04)',
              border: '1px solid rgba(120,113,108,0.18)',
            }}
          >
            <div style={{ color: 'var(--color-muted)', opacity: 0.75 }}>
              <SpreadsheetIcon size={32} />
            </div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.95rem',
                fontWeight: 700,
                color: 'var(--color-muted)',
                letterSpacing: '0.01em',
              }}
            >
              Planilhas manuais
            </span>
            <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <span className="porqueia-chip-stone">Processos manuais</span>
              <span className="porqueia-chip-stone">Dados dispersos</span>
            </div>
          </motion.div>

          {/* Seta 1 -> 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.22 }}
            className="porqueia-arrow-box"
            aria-hidden="true"
          >
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
              <line x1="0" y1="6" x2="18" y2="6" stroke="var(--color-stone)" strokeWidth="1.6" strokeLinecap="round"/>
              <polyline points="13,1 18,6 13,11" stroke="var(--color-stone)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </motion.div>

          {/* ETAPA 2: Gargalos */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.26 }}
            className="porqueia-step-card"
            style={{
              background: 'rgba(217,119,6,0.05)',
              border: '1px solid rgba(217,119,6,0.22)',
            }}
          >
            <div style={{ color: '#D97706', opacity: 0.85 }}>
              <FunnelIcon size={32} />
            </div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.95rem',
                fontWeight: 700,
                color: '#D97706',
                letterSpacing: '0.01em',
              }}
            >
              Gargalos
            </span>
            <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <span className="porqueia-chip-amber">Retrabalho</span>
              <span className="porqueia-chip-amber">Inconsistência</span>
            </div>
          </motion.div>

          {/* Seta 2 -> 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.38 }}
            className="porqueia-arrow-box"
            aria-hidden="true"
          >
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
              <line x1="0" y1="6" x2="18" y2="6" stroke="#0D9488" strokeWidth="1.6" strokeLinecap="round"/>
              <polyline points="13,1 18,6 13,11" stroke="#0D9488" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </motion.div>

          {/* ETAPA 3: Automação (com destaque animado 3 dias → 1h) */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.42 }}
            className="porqueia-step-card porqueia-card-automacao"
            style={{
              background: 'rgba(13,148,136,0.06)',
              border: '1.5px solid rgba(13,148,136,0.3)',
              boxShadow: '0 8px 30px rgba(13,148,136,0.12)',
            }}
          >
            {/* Topo do card */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <div style={{ color: '#0D9488' }}>
                <BoltIcon size={22} />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1rem',
                  fontWeight: 800,
                  color: '#0D9488',
                  letterSpacing: '0.02em',
                }}
              >
                Automação
              </span>
            </div>

            {/* Destaque Numérico Animado: 3 dias → 1h */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.55rem' }}>
              {/* 3 dias esmaecido */}
              <motion.span
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 0.45, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.55 }}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#0D9488',
                  letterSpacing: '-0.02em',
                  whiteSpace: 'nowrap',
                }}
              >
                3 dias
              </motion.span>

              {/* Seta animando na viewport */}
              <motion.span
                initial={{ opacity: 0, scale: 0.4, x: -8 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: 0.72,
                  type: 'spring',
                  stiffness: 280,
                  damping: 18,
                }}
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: '#0D9488',
                  fontSize: '1.15rem',
                  fontWeight: 400,
                  lineHeight: 1,
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                →
              </motion.span>

              {/* 1h ganha destaque */}
              <motion.span
                initial={{ opacity: 0, scale: 0.8, y: 3 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.9,
                  type: 'spring',
                  stiffness: 240,
                  damping: 15,
                }}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.65rem',
                  fontWeight: 800,
                  color: '#0D9488',
                  letterSpacing: '-0.03em',
                  textShadow: '0 0 16px rgba(13,148,136,0.3)',
                  whiteSpace: 'nowrap',
                }}
              >
                1h
              </motion.span>
            </div>

            {/* Rótulo pequeno abaixo */}
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                color: 'var(--color-muted)',
                letterSpacing: '0.01em',
                textAlign: 'center',
                lineHeight: 1.25,
                marginTop: '-0.2rem',
              }}
            >
              tempo de uma das automações de indicadores
            </span>
          </motion.div>

        </div>

        {/* ── 2. CASOS PRÁTICOS & EVIDÊNCIAS (LOGO ABAIXO DO FLUXO, LADO A LADO) ── */}
        <ScrollReveal delay={0.35}>
          <div className="porqueia-evidence-grid">

            {/* CARD 1: CEVS (Print da Planilha com Estilo ViewVerde e Lightbox) */}
            <div
              style={{
                background: 'rgba(255,255,255,0.7)',
                border: '1.5px solid rgba(13,148,136,0.22)',
                borderRadius: '1.15rem',
                padding: '1.1rem 1.25rem',
                boxShadow: '0 6px 24px rgba(13,148,136,0.06)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem',
              }}
            >
              {/* Header do Card CEVS */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      color: '#0D9488',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      background: 'rgba(13,148,136,0.12)',
                      border: '1px solid rgba(13,148,136,0.25)',
                      padding: '0.15rem 0.55rem',
                      borderRadius: '999px',
                    }}
                  >
                    CEVS
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: 'var(--color-ink-soft)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    Vigilância em Saúde
                  </span>
                </div>

                {/* Chips Excel Online e TypeScript */}
                <div style={{ display: 'flex', gap: '0.35rem' }}>
                  {['Excel Online', 'TypeScript'].map((chip) => (
                    <span
                      key={chip}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.62rem',
                        fontWeight: 600,
                        color: '#0D9488',
                        background: 'rgba(13,148,136,0.08)',
                        border: '1px solid rgba(13,148,136,0.22)',
                        padding: '0.12rem 0.5rem',
                        borderRadius: '999px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              {/* Print em Miniatura (Estilo ViewVerde) */}
              <motion.div
                onClick={() => setLightbox(true)}
                whileHover={{ scale: 1.015 }}
                title="Clique para ampliar em tela cheia"
                style={{
                  width: '100%',
                  borderRadius: '0.85rem',
                  overflow: 'hidden',
                  background: '#FFFFFF',
                  border: '1px solid rgba(13,148,136,0.25)',
                  boxShadow: '0 4px 16px rgba(13,148,136,0.08)',
                  cursor: 'zoom-in',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'box-shadow 0.2s ease',
                }}
              >
                {/* Barra de janela estilo navegador ViewVerde */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.4rem 0.75rem',
                    background: 'rgba(250,249,246,0.98)',
                    borderBottom: '1px solid var(--color-stone)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    {['#FF5F57', '#FFBD2E', '#28C840'].map((c) => (
                      <span
                        key={c}
                        style={{ width: '7px', height: '7px', borderRadius: '50%', background: c, opacity: 0.85 }}
                      />
                    ))}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.58rem',
                      color: 'var(--color-muted)',
                      letterSpacing: '0.02em',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Relatório Notificações e Busca Ativa · Excel Online
                  </span>
                  <span
                    style={{
                      border: '1px solid rgba(13,148,136,0.28)',
                      background: 'rgba(13,148,136,0.08)',
                      color: '#0D9488',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.55rem',
                      fontWeight: 700,
                      padding: '0.1rem 0.45rem',
                      borderRadius: '999px',
                      flexShrink: 0,
                    }}
                  >
                    AMPLIAR ↗
                  </span>
                </div>

                {/* Imagem do print */}
                <div style={{ position: 'relative', width: '100%', height: '135px', background: '#F8FAFC', overflow: 'hidden' }}>
                  <img
                    src={CEVS_PRINT}
                    alt="Indicadores automatizados no Excel Online"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top left',
                      display: 'block',
                    }}
                  />
                  {/* Overlay ao hover */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(13,148,136,0.08)',
                      opacity: 0,
                      transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = 0)}
                  />
                </div>
              </motion.div>

              {/* Legenda curta abaixo */}
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  color: 'var(--color-muted)',
                  letterSpacing: '0.02em',
                  textAlign: 'center',
                }}
              >
                Indicadores automatizados no Excel Online
              </span>
            </div>

            {/* CARD 2: VIEWVERDE (17 mil árvores e base centralizada) */}
            <div
              style={{
                background: 'rgba(255,255,255,0.7)',
                border: '1.5px solid rgba(13,148,136,0.22)',
                borderRadius: '1.15rem',
                padding: '1.1rem 1.25rem',
                boxShadow: '0 6px 24px rgba(13,148,136,0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '0.8rem',
              }}
            >
              {/* Header do Card ViewVerde */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      color: '#0D9488',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      background: 'rgba(13,148,136,0.12)',
                      border: '1px solid rgba(13,148,136,0.25)',
                      padding: '0.15rem 0.55rem',
                      borderRadius: '999px',
                    }}
                  >
                    ViewVerde
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: 'var(--color-ink-soft)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    Prefeitura de Esteio
                  </span>
                </div>

                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    color: '#0D9488',
                    background: 'rgba(13,148,136,0.12)',
                    border: '1px solid rgba(13,148,136,0.28)',
                    padding: '0.15rem 0.65rem',
                    borderRadius: '999px',
                  }}
                >
                  17 mil árvores
                </span>
              </div>

              {/* Miolo visual com destaque de impacto */}
              <div
                style={{
                  background: 'rgba(13,148,136,0.04)',
                  border: '1px dashed rgba(13,148,136,0.22)',
                  borderRadius: '0.85rem',
                  padding: '1.25rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '0.75rem',
                    background: 'rgba(13,148,136,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0D9488',
                    flexShrink: 0,
                  }}
                >
                  <TreeIcon size={26} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.05rem',
                      fontWeight: 800,
                      color: '#0D9488',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    17.000+ espécimes cadastrados
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.66rem',
                      color: 'var(--color-muted)',
                      lineHeight: 1.35,
                    }}
                  >
                    Georreferenciamento e qualidade ambiental unificados em um único banco de dados.
                  </span>
                </div>
              </div>

              {/* Chips da Linha ViewVerde */}
              <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', alignItems: 'center' }}>
                {['PostgreSQL', 'PostGIS', 'Portal Público', 'Painel de Gestão'].map((chip) => (
                  <span
                    key={chip}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      fontWeight: 600,
                      color: '#0D9488',
                      background: 'rgba(13,148,136,0.08)',
                      border: '1px solid rgba(13,148,136,0.22)',
                      padding: '0.12rem 0.5rem',
                      borderRadius: '999px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </ScrollReveal>

        {/* ── 3. LINHA DE FECHAMENTO ── */}
        <ScrollReveal delay={0.45}>
          <p
            style={{
              textAlign: 'center',
              marginTop: '3.2rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              color: 'var(--color-muted)',
              letterSpacing: '0.04em',
              lineHeight: 1.5,
              margin: '3.2rem 0 0',
            }}
          >
            Menos trabalho manual
            <span style={{ opacity: 0.35, margin: '0 0.5rem' }}>·</span>
            Mais eficiência
            <span style={{ opacity: 0.35, margin: '0 0.5rem' }}>·</span>
            Resolver problemas com análise
          </p>
        </ScrollReveal>

      </div>

      {/* ── LIGHTBOX TELA CHEIA (fecha com Esc ou clique fora) ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightbox(false)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              background: 'rgba(10,8,20,0.92)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '92vw',
                maxHeight: '90vh',
                background: '#FFFFFF',
                borderRadius: '1.15rem',
                overflow: 'hidden',
                boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
                display: 'flex',
                flexDirection: 'column',
                border: '1.5px solid rgba(13,148,136,0.3)',
              }}
            >
              {/* Topbar da janela do lightbox */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.65rem 1.15rem',
                  background: 'rgba(250,249,246,0.98)',
                  borderBottom: '1px solid var(--color-stone)',
                  gap: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  {['#FF5F57', '#FFBD2E', '#28C840'].map((c) => (
                    <span
                      key={c}
                      style={{ width: '9px', height: '9px', borderRadius: '50%', background: c, opacity: 0.85 }}
                    />
                  ))}
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      color: '#0D9488',
                      letterSpacing: '0.04em',
                      marginLeft: '0.5rem',
                    }}
                  >
                    Indicadores automatizados no Excel Online
                  </span>
                </div>
                <button
                  onClick={() => setLightbox(false)}
                  title="Fechar (Esc)"
                  style={{
                    border: 'none',
                    background: 'rgba(0,0,0,0.06)',
                    color: 'var(--color-ink)',
                    fontSize: '1rem',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    lineHeight: 1,
                  }}
                >
                  ✕
                </button>
              </div>

              {/* Área da imagem ampliada */}
              <div
                style={{
                  overflow: 'auto',
                  background: '#0B0914',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.75rem',
                }}
              >
                <img
                  src={CEVS_PRINT}
                  alt="Indicadores automatizados no Excel Online"
                  style={{
                    maxWidth: '100%',
                    maxHeight: 'calc(90vh - 70px)',
                    objectFit: 'contain',
                    borderRadius: '0.5rem',
                    display: 'block',
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        /* FLUXO SUPERIOR */
        .porqueia-flow-row {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 0.85rem;
          margin-bottom: 1.5rem;
        }
        .porqueia-step-card {
          flex: 1;
          min-height: 145px;
          border-radius: 1.15rem;
          padding: 1.25rem 1.1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justifyContent: center;
          gap: 0.55rem;
          text-align: center;
          position: relative;
        }
        .porqueia-card-automacao {
          flex: 1.2;
        }
        .porqueia-arrow-box {
          display: flex;
          align-items: center;
          justifyContent: center;
          transform: rotate(90deg);
          flex-shrink: 0;
        }

        /* CHIPS DAS ETAPAS */
        .porqueia-chip-stone {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          color: var(--color-muted);
          background: rgba(120,113,108,0.08);
          border: 1px solid rgba(120,113,108,0.18);
          padding: 0.12rem 0.5rem;
          border-radius: 999px;
          white-space: nowrap;
        }
        .porqueia-chip-amber {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          color: #D97706;
          background: rgba(217,119,6,0.08);
          border: 1px solid rgba(217,119,6,0.22);
          padding: 0.12rem 0.5rem;
          border-radius: 999px;
          white-space: nowrap;
        }

        /* GRID INFERIOR DE EVIDÊNCIAS */
        .porqueia-evidence-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 768px) {
          .porqueia-flow-row {
            flex-direction: row;
            align-items: center;
            gap: 0;
          }
          .porqueia-arrow-box {
            transform: rotate(0deg);
            margin: 0 0.55rem;
          }
          .porqueia-evidence-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  )
}
