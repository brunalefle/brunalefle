import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

// Ícones SVG minimalistas
const CodeIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
)

const DatabaseIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
)

const AcademicIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5"/>
  </svg>
)

export default function TransicaoDadosIA() {
  return (
    <section
      id="transicao"
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '4.5rem',
        paddingBottom: '4rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Luz ambiente de fundo suave */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-8rem',
          right: '-6rem',
          width: '40rem',
          height: '40rem',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(107,79,187,0.06) 0%, rgba(13,148,136,0.05) 50%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '82rem', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>

        {/* CABEÇALHO */}
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '2.8rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.65rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  color: 'var(--color-violet)',
                  letterSpacing: '0.08em',
                  background: 'rgba(107,79,187,0.1)',
                  border: '1px solid rgba(107,79,187,0.22)',
                  padding: '0.18rem 0.65rem',
                  borderRadius: '999px',
                  textTransform: 'uppercase',
                }}
              >
                05 · Transição
              </span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 4.2vw, 3rem)',
                fontWeight: 800,
                color: 'var(--color-ink)',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                margin: 0,
              }}
            >
              O que venho fazendo para essa{' '}
              <span style={{ color: 'var(--color-violet)' }}>transição</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* ── 3 COLUNAS DE ALTURA IGUAL ── */}
        <div className="transicao-three-cols">

          {/* COLUNA 1: Estudando agora (por conta própria) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.48, delay: 0.1, ease: 'easeOut' }}
            className="transicao-column-card"
            style={{
              background: '#FFFFFF',
              border: '1.5px solid rgba(107,79,187,0.22)',
              borderRadius: '1.25rem',
              padding: '1.5rem 1.4rem',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem',
            }}
          >
            {/* Header da Coluna 1 */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.25rem' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '0.6rem',
                    background: 'rgba(107,79,187,0.1)',
                    color: 'var(--color-violet)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <CodeIcon size={18} />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    color: 'var(--color-ink)',
                    letterSpacing: '-0.01em',
                    margin: 0,
                  }}
                >
                  Estudando agora
                </h3>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'var(--color-muted)',
                  letterSpacing: '0.04em',
                }}
              >
                por conta própria
              </span>
            </div>

            {/* Sub-rótulo discreto */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.58rem',
                  fontWeight: 700,
                  color: 'var(--color-violet)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  background: 'rgba(107,79,187,0.08)',
                  padding: '0.12rem 0.45rem',
                  borderRadius: '4px',
                }}
              >
                em estudo
              </span>
            </div>

            {/* Lista de Chips de Tecnologias */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', flex: 1 }}>
              {[
                'NoSQL (Cassandra, MongoDB)',
                'Cosmos DB',
                'Apache Spark',
                'Hadoop',
                'CI/CD',
              ].map((tech) => (
                <div
                  key={tech}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    background: 'rgba(107,79,187,0.04)',
                    border: '1px solid rgba(107,79,187,0.16)',
                    borderRadius: '0.65rem',
                    padding: '0.55rem 0.85rem',
                    transition: 'border-color 0.2s, background 0.2s',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--color-violet)',
                      opacity: 0.7,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: 'var(--color-ink)',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* COLUNA 2: Já pratiquei com dados */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.48, delay: 0.22, ease: 'easeOut' }}
            className="transicao-column-card"
            style={{
              background: '#FFFFFF',
              border: '1.5px solid rgba(13,148,136,0.25)',
              borderRadius: '1.25rem',
              padding: '1.5rem 1.4rem',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {/* Header da Coluna 2 */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.25rem' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '0.6rem',
                    background: 'rgba(13,148,136,0.1)',
                    color: '#0D9488',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <DatabaseIcon size={18} />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    color: 'var(--color-ink)',
                    letterSpacing: '-0.01em',
                    margin: 0,
                  }}
                >
                  Já pratiquei com dados
                </h3>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'var(--color-muted)',
                  letterSpacing: '0.04em',
                }}
              >
                projetos e impacto concreto
              </span>
            </div>

            {/* Conteúdo com os 3 projetos */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', flex: 1, justifyContent: 'space-between' }}>

              {/* CEVS */}
              <div
                style={{
                  background: 'rgba(13,148,136,0.04)',
                  border: '1px solid rgba(13,148,136,0.18)',
                  borderRadius: '0.85rem',
                  padding: '0.75rem 0.95rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.3rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      fontWeight: 700,
                      color: '#0D9488',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    CEVS
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      color: '#0D9488',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    3 dias → 1h
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--color-muted)',
                    letterSpacing: '0.02em',
                  }}
                >
                  automação de indicadores
                </span>
              </div>

              {/* ViewVerde */}
              <div
                style={{
                  background: 'rgba(13,148,136,0.04)',
                  border: '1px solid rgba(13,148,136,0.18)',
                  borderRadius: '0.85rem',
                  padding: '0.75rem 0.95rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.45rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      fontWeight: 700,
                      color: '#0D9488',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    ViewVerde
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      color: '#0D9488',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    17 mil
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--color-muted)',
                    letterSpacing: '0.02em',
                  }}
                >
                  árvores importadas em lote
                </span>
                <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginTop: '0.1rem' }}>
                  {['Dashboards automáticos', 'Dicionário de dados'].map((chip) => (
                    <span
                      key={chip}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6rem',
                        fontWeight: 600,
                        color: '#0D9488',
                        background: 'rgba(13,148,136,0.1)',
                        border: '1px solid rgba(13,148,136,0.22)',
                        padding: '0.12rem 0.45rem',
                        borderRadius: '999px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              {/* GERCON */}
              <div
                style={{
                  background: 'rgba(250,249,246,0.9)',
                  border: '1px solid var(--color-stone)',
                  borderRadius: '0.85rem',
                  padding: '0.75rem 0.95rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    color: 'var(--color-ink)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  GERCON
                </span>
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 500,
                    color: 'var(--color-ink-soft)',
                    lineHeight: 1.35,
                  }}
                >
                  Evolução do sistema de regulação de consultas e exames
                </span>
              </div>

            </div>
          </motion.div>

          {/* COLUNA 3: Formação */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.48, delay: 0.34, ease: 'easeOut' }}
            className="transicao-column-card"
            style={{
              background: '#FFFFFF',
              border: '1.5px solid rgba(2,132,199,0.24)',
              borderRadius: '1.25rem',
              padding: '1.5rem 1.4rem',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem',
            }}
          >
            {/* Header da Coluna 3 */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.25rem' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '0.6rem',
                    background: 'rgba(2,132,199,0.1)',
                    color: '#0284C7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <AcademicIcon size={18} />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    color: 'var(--color-ink)',
                    letterSpacing: '-0.01em',
                    margin: 0,
                  }}
                >
                  Formação
                </h3>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'var(--color-muted)',
                  letterSpacing: '0.04em',
                }}
              >
                base acadêmica & pesquisa
              </span>
            </div>

            {/* Conteúdo com os dois itens */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', flex: 1, justifyContent: 'flex-start' }}>

              {/* Informática Biomédica */}
              <div
                style={{
                  background: 'rgba(2,132,199,0.04)',
                  border: '1px solid rgba(2,132,199,0.2)',
                  borderRadius: '0.85rem',
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.35rem',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.58rem',
                    fontWeight: 700,
                    color: '#0284C7',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  Graduação · Marco de Virada
                </span>
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: 'var(--color-ink)',
                    lineHeight: 1.3,
                  }}
                >
                  Informática Biomédica
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--color-muted)',
                    letterSpacing: '0.03em',
                  }}
                >
                  UFCSPA
                </span>
              </div>

              {/* PET-Saúde */}
              <div
                style={{
                  background: 'rgba(2,132,199,0.04)',
                  border: '1px solid rgba(2,132,199,0.2)',
                  borderRadius: '0.85rem',
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.35rem',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.58rem',
                    fontWeight: 700,
                    color: '#0284C7',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  Pesquisa Aplicada · SUS
                </span>
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: 'var(--color-ink)',
                    lineHeight: 1.3,
                  }}
                >
                  PET-Saúde
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--color-muted)',
                    letterSpacing: '0.03em',
                  }}
                >
                  Sustentabilidade Digital
                </span>
              </div>

            </div>
          </motion.div>

        </div>


      </div>

      <style>{`
        .transicao-three-cols {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          align-items: stretch;
        }
        .transicao-column-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .transicao-column-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-hover);
        }
        @media (min-width: 860px) {
          .transicao-three-cols {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }
      `}</style>
    </section>
  )
}
