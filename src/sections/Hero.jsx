import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../utils/motion'
import HeroCard from '../components/HeroCard'

export default function Hero({ goTo }) {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '4.5rem',
        paddingBottom: '4rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background blobs */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '-10rem', right: '-8rem',
        width: '36rem', height: '36rem', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(107,79,187,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '-6rem', left: '-4rem',
        width: '24rem', height: '24rem', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(42,157,143,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Two-column grid */}
      <div style={{ maxWidth: '86rem', margin: '0 auto', width: '100%' }}>
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* ── Left: text content ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            <motion.p variants={fadeUp}>
              <span className="section-label">portfólio · acelera ai 2026</span>
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-display"
              style={{ color: 'var(--color-ink)', maxWidth: '16ch', lineHeight: 1.05 }}
            >
              Bruna Caroline{' '}
              <span style={{
                background: 'linear-gradient(135deg, var(--color-violet) 0%, var(--color-teal) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Sirtuli Lefle.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--color-muted)',
                letterSpacing: '0.06em',
                marginTop: '-0.25rem',
              }}
            >
              24 anos · Informática Biomédica · UFCSPA
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-hero-sub"
              style={{ color: 'var(--color-ink-soft)', maxWidth: '46ch', fontWeight: 400, lineHeight: 1.4 }}
            >
              Desenvolvedora de software com experiência em dados de saúde pública.{' '}
              <span style={{ color: 'var(--color-ink)', fontWeight: 600 }}>
                Buscando migrar para uma atuação focada em Dados &amp; IA.
              </span>
            </motion.p>

            <motion.p
              variants={fadeUp}
              style={{
                fontSize: '0.95rem',
                color: 'var(--color-ink-soft)',
                lineHeight: 1.75,
                maxWidth: '54ch',
              }}
            >
              Passei por dois lados da área de saúde pública: analisando dados no Centro Estadual de Vigilância em Saúde (CEVS), e agora desenvolvendo o próprio sistema que gera esses dados, no GERCON da PROCEMPA. Esse caminho me mostrou que quero focar na parte de entender e trabalhar os dados — não só construir o sistema que os produz.
            </motion.p>

            <motion.div
              variants={fadeUp}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}
            >
              {[
                { text: 'UFCSPA',       kind: '' },
                { text: 'PROCEMPA',     kind: '' },
                { text: 'BRISA TIC 55', kind: 'teal' },
                { text: 'PET-Saúde',    kind: 'teal' },
                { text: 'ex-CEVS',      kind: '' },
              ].map(chip => (
                <span key={chip.text} className={`tag${chip.kind === 'teal' ? ' tag-teal' : ''}`}>
                  {chip.text}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap', paddingTop: '0.25rem' }}
            >
              <motion.button
                onClick={() => goTo(1)}
                animate={{
                  boxShadow: [
                    '0 0 0px rgba(107,79,187,0)',
                    '0 0 18px rgba(107,79,187,0.55)',
                    '0 0 0px rgba(107,79,187,0)',
                  ],
                }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.8rem 2rem',
                  borderRadius: '9999px',
                  background: 'var(--color-violet)',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '1rem',
                  border: 'none',
                  cursor: 'pointer',
                  letterSpacing: '0.01em',
                }}
              >
                Começar
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                  aria-hidden="true"
                  style={{ fontSize: '1.1rem' }}
                >
                  →
                </motion.span>
              </motion.button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-muted)' }}>← →</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-muted)', letterSpacing: '0.04em' }}>ou deslize</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: HeroCard ── */}
          <div className="hero-card-col">
            <HeroCard />
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
