import { useState } from 'react'
import ScrollReveal, { StaggerReveal } from '../components/ScrollReveal'
import { motion } from 'framer-motion'
import { fadeUp } from '../utils/motion'

// ─── CONFIGURAÇÃO DE FOTOS ──────────────────────────────────────────
// Retrato principal
const RETRATO_TOPO = {
  src: '/photos/foto2.jpg', // ou '/photos/foto1.jpg'
  alt: 'Bruna Caroline Sirtuli Lefle',
}

// Foto jogando / setup
const FOTO_JOGANDO = {
  id: 'jogando',
  src: '/photos/jogando.png',
  alt: 'Bruna jogando',
  tag: 'jogando',
  icon: '🎮',
}

// 3 fotos de performance de dança
const fotosDanca = [
  { id: 'danca-1', src: '/photos/foto-danca-1.jpg', alt: 'Performance de dança' },
  { id: 'danca-2', src: '/photos/foto-danca-2.jpg', alt: 'Performance de dança' },
  { id: 'danca-3', src: '/photos/foto-danca-3.jpg', alt: 'Performance de dança' },
]

// Fotos dos animais de estimação
const fotosPets = [
  {
    id: 'pet-gaia-garrincha',
    src: '/photos/gaia_e_garrincha.jpg',
    alt: 'Gaia e Garrincha',
    tag: 'gaia & garrincha',
    icon: '🐾',
  },
  {
    id: 'pet-brida',
    src: '/photos/brida.jpg',
    alt: 'Brida',
    tag: 'brida',
    icon: '🐾',
  },
  {
    id: 'pet-madonna',
    src: '/photos/madonna.jpg',
    alt: 'Madonna',
    tag: 'madonna',
    icon: '🐾',
  },
  {
    id: 'pet-gaia',
    src: '/photos/gaia.PNG',
    alt: 'Gaia',
    tag: 'gaia',
    icon: '🐾',
  },
]

function PhotoSlot({ id, src, alt = '', tag = null, icon = '🐾', hovered, onHover, onLeave, style = {} }) {
  const isActive = hovered === id
  const isDimmed = hovered !== null && !isActive

  return (
    <motion.div
      onMouseEnter={() => onHover(id)}
      onMouseLeave={onLeave}
      animate={{
        scale: isActive ? 1.45 : 1,
        zIndex: isActive ? 50 : 1,
        opacity: isDimmed ? 0.22 : 1,
      }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      style={{
        borderRadius: '0.875rem',
        overflow: 'hidden',
        background: 'var(--color-stone)',
        position: 'relative',
        cursor: src ? 'zoom-in' : 'default',
        boxShadow: isActive ? '0 12px 30px rgba(0,0,0,0.18)' : '0 2px 8px rgba(0,0,0,0.04)',
        ...style,
      }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      ) : null}

      {/* Tag de identificação sobreposta discreta e compacta */}
      {tag && (
        <div
          style={{
            position: 'absolute',
            bottom: '0.35rem',
            left: '0.35rem',
            background: 'rgba(255, 255, 255, 0.88)',
            backdropFilter: 'blur(6px)',
            border: '1px solid rgba(232, 227, 218, 0.8)',
            borderRadius: '9999px',
            padding: '0.12rem 0.42rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.22rem',
            zIndex: 2,
            pointerEvents: 'none',
            boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
          }}
        >
          {icon && <span style={{ fontSize: '0.58rem', lineHeight: 1 }}>{icon}</span>}
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.56rem',
              fontWeight: 600,
              color: 'var(--color-teal)',
              letterSpacing: '0.02em',
              textTransform: 'lowercase',
              lineHeight: 1,
            }}
          >
            {tag}
          </span>
        </div>
      )}
    </motion.div>
  )
}

export default function AlemDaProfissao() {
  const [hovered, setHovered] = useState(null)

  return (
    <section
      id="alem"
      style={{
        minHeight: '100svh',
        paddingTop: '5rem',
        paddingBottom: '4rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        display: 'flex',
        alignItems: 'flex-start',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto', width: '100%' }}>

        <ScrollReveal>
          <p className="section-label">além da profissão</p>
          <div className="divider" />
        </ScrollReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="alem-grid"
        >
          {/* ── Left: Pitch anchors (Mosaico Editorial com 5 cards) ── */}
          <StaggerReveal style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>


            {/* Mosaico editorial orgânico com 5 cards */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                position: 'relative',
              }}
            >
              {/* ── Card 1: Escolhas (Azul Suave) ── */}
              <motion.div
                variants={fadeUp}
                className="mosaic-card mosaic-card-1"
                whileHover={{ y: -2, transition: { duration: 0.18 } }}
                style={{
                  background: '#E0EEFF',
                  border: '1.5px solid #93C5FD',
                  borderRadius: '0.875rem',
                  padding: '0.75rem 1.25rem',
                  boxShadow: '0 4px 14px rgba(37, 99, 235, 0.08)',
                  width: 'fit-content',
                  maxWidth: '100%',
                  transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
                }}
              >
                <p
                  style={{
                    fontSize: '0.94rem',
                    color: '#1E3A8A',
                    lineHeight: 1.4,
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                  }}
                >
                  escolhas pra mim nunca são só escolhas
                </p>
              </motion.div>

              {/* ── Linha assimétrica com Cards 2 e 3 ── */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.15fr 0.85fr',
                  gap: '0.85rem',
                  alignItems: 'stretch',
                }}
                className="mosaic-row-dual"
              >
                {/* ── Card 2: "porque sim" (Verde Menta) ── */}
                <motion.div
                  variants={fadeUp}
                  className="mosaic-card mosaic-card-2"
                  whileHover={{ y: -2, transition: { duration: 0.18 } }}
                  style={{
                    background: '#D1FAE5',
                    border: '1.5px solid #86EFAC',
                    borderRadius: '1.05rem',
                    padding: '1.15rem 1.35rem',
                    boxShadow: '0 4px 16px rgba(16, 185, 129, 0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    transition: 'box-shadow 0.2s ease',
                  }}
                >
                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: '#14532D',
                      lineHeight: 1.58,
                    }}
                  >
                    <strong style={{ fontWeight: 700, color: '#064E3B' }}>
                      &ldquo;porque sim&rdquo; nunca funcionou comigo,
                    </strong>{' '}
                    o que muitas vezes me colocava em situações difíceis com os meus pais na adolescência
                  </p>
                </motion.div>

                {/* ── Card 3: Resolver o problema dos outros (Lilás / Lavanda) ── */}
                <motion.div
                  variants={fadeUp}
                  className="mosaic-card mosaic-card-3"
                  whileHover={{ y: -2, transition: { duration: 0.18 } }}
                  style={{
                    background: '#EDE9FE',
                    border: '1.5px solid #C4B5FD',
                    borderRadius: '1.05rem',
                    padding: '1.1rem 1.25rem',
                    boxShadow: '0 4px 14px rgba(139, 92, 246, 0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    transition: 'box-shadow 0.2s ease',
                  }}
                >
                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: '#4C1D95',
                      lineHeight: 1.55,
                    }}
                  >
                    <strong style={{ fontWeight: 700, color: '#3B0764' }}>
                      tenho a tendência de tentar resolver o problema dos outros,
                    </strong>{' '}
                    o que nem sempre é adequado, eu reconheço
                  </p>
                </motion.div>
              </div>

              {/* ── Card 4: Críticas / Crescimento (Azul Celeste) ── */}
              <motion.div
                variants={fadeUp}
                className="mosaic-card mosaic-card-4"
                whileHover={{ y: -2, transition: { duration: 0.18 } }}
                style={{
                  background: '#E0F2FE',
                  border: '1.5px solid #7DD3FC',
                  borderRadius: '1.15rem',
                  padding: '1.2rem 1.55rem',
                  boxShadow: '0 4px 18px rgba(14, 165, 233, 0.08)',
                  maxWidth: '92%',
                  transition: 'box-shadow 0.2s ease',
                }}
              >
                <p
                  style={{
                    fontSize: '0.94rem',
                    color: '#075985',
                    lineHeight: 1.62,
                  }}
                >
                  <strong style={{ fontWeight: 700, color: '#0369A1' }}>
                    não tenho problema nenhum em receber críticas
                  </strong>{' '}
                  — acho elas completamente necessárias para o meu crescimento, porque é isso que eu sempre busco: ser melhor e me superar cada vez mais
                </p>
              </motion.div>

              {/* ── Card 5: Computadores & Dança (Lilás + Azul + Verde em degradê) ── */}
              <motion.div
                variants={fadeUp}
                className="mosaic-card mosaic-card-5"
                whileHover={{ y: -3, transition: { duration: 0.18 } }}
                style={{
                  background: 'linear-gradient(135deg, #F3E8FF 0%, #E0E7FF 48%, #D1FAE5 100%)',
                  border: '1.5px solid #A78BFA',
                  borderRadius: '1.25rem',
                  padding: '1.45rem 1.75rem',
                  boxShadow: '0 10px 32px rgba(107, 79, 187, 0.12), 0 2px 12px rgba(42, 157, 143, 0.08)',
                  position: 'relative',
                  zIndex: 4,
                  transition: 'box-shadow 0.2s ease',
                }}
              >
                <p
                  style={{
                    fontSize: '1rem',
                    color: '#1E1B4B',
                    lineHeight: 1.65,
                  }}
                >
                  <strong style={{ fontWeight: 700, color: '#581C87', fontSize: '1.08rem' }}>
                    desde pequena, tenho paixões muito grandes: computadores e dança.
                  </strong>{' '}
                  hoje a dança é um hobby muito presente e o amor por computadores virou minha profissão
                </p>
              </motion.div>
            </div>

          </StaggerReveal>

          {/* ── Right: Galeria de fotos (Retrato + Jogando + Dança + Pets) ── */}
          <ScrollReveal delay={0.15}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>

              {/* Topo: Retrato principal + Foto jogando */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.05fr 0.95fr',
                  gap: '0.6rem',
                  alignItems: 'stretch',
                }}
              >
                <PhotoSlot
                  id="retrato"
                  src={RETRATO_TOPO.src}
                  alt={RETRATO_TOPO.alt}
                  hovered={hovered}
                  onHover={setHovered}
                  onLeave={() => setHovered(null)}
                  style={{
                    aspectRatio: '4/3',
                    width: '100%',
                  }}
                />

                <PhotoSlot
                  id={FOTO_JOGANDO.id}
                  src={FOTO_JOGANDO.src}
                  alt={FOTO_JOGANDO.alt}
                  tag={FOTO_JOGANDO.tag}
                  icon={FOTO_JOGANDO.icon}
                  hovered={hovered}
                  onHover={setHovered}
                  onLeave={() => setHovered(null)}
                  style={{
                    aspectRatio: '4/3',
                    width: '100%',
                  }}
                />
              </div>

              {/* Linha do Meio: 3 fotos de performance de dança */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.6rem',
                  alignItems: 'stretch',
                }}
              >
                {fotosDanca.map((foto) => (
                  <PhotoSlot
                    key={foto.id}
                    id={foto.id}
                    src={foto.src}
                    alt={foto.alt}
                    hovered={hovered}
                    onHover={setHovered}
                    onLeave={() => setHovered(null)}
                    style={{ aspectRatio: '1/1' }}
                  />
                ))}
              </div>

              {/* Linha Inferior: Animais de estimação (fotos maiores em 2 colunas) */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.6rem',
                  alignItems: 'stretch',
                }}
              >
                {fotosPets.map((pet) => (
                  <PhotoSlot
                    key={pet.id}
                    id={pet.id}
                    src={pet.src}
                    alt={pet.alt}
                    tag={pet.tag}
                    icon={pet.icon}
                    hovered={hovered}
                    onHover={setHovered}
                    onLeave={() => setHovered(null)}
                    style={{
                      aspectRatio: '16/10',
                      border: '1px solid rgba(42, 157, 143, 0.25)',
                    }}
                  />
                ))}
              </div>

            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .alem-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
          /* Quebra de simetria editorial em telas médias/grandes */
          .mosaic-card-4 {
            margin-left: 1.75rem !important;
          }
          .mosaic-card-5 {
            margin-right: -2rem !important;
            width: calc(100% + 2rem) !important;
          }
        }
        @media (max-width: 640px) {
          .mosaic-row-dual {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
