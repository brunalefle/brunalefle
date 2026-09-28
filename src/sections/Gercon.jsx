import ScrollReveal, { StaggerReveal } from '../components/ScrollReveal'
import { motion } from 'framer-motion'
import { fadeUp } from '../utils/motion'

const impacts = [
  { value: 'Regulação', label: 'de saúde pública', icon: '🏥' },
  { value: 'Java +', label: 'Spring Boot / JPA', icon: '☕' },
  { value: 'AngularJS', label: 'front-end legado', icon: '🔷' },
  { value: 'PG', label: 'PostgreSQL', icon: '🐘' },
]

export default function Gercon() {
  return (
    <section
      id="gercon"
      style={{
        background: 'var(--color-ink)',
        color: 'white',
        paddingTop: '5rem',
        paddingBottom: '5rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-6rem',
          right: '-6rem',
          width: '30rem',
          height: '30rem',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(107,79,187,0.2) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-4rem',
          left: '-4rem',
          width: '20rem',
          height: '20rem',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(42,157,143,0.15) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '68rem', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <ScrollReveal>
          <p className="section-label" style={{ color: 'var(--color-violet-light)' }}>
            um projeto que me orgulha
          </p>
          <div className="divider" />
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: '0.75rem',
              color: 'white',
            }}
          >
            GERCON
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--color-muted)',
              marginBottom: '3rem',
            }}
          >
            Sistema de Regulação de Saúde · PROCEMPA
          </p>
        </ScrollReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
          }}
          className="gercon-grid"
        >
          {/* Left: narrative */}
          <StaggerReveal style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              {
                label: 'O problema',
                text: 'A regulação de saúde pública envolve gerenciar filas de espera, encaminhamentos e vagas entre unidades de saúde — um processo crítico que impacta diretamente o acesso da população à atenção especializada.',
              },
              {
                label: 'Minha participação',
                text: 'Atuo no desenvolvimento e manutenção do GERCON, sistema legado em Java (Spring Boot, JPA), AngularJS e PostgreSQL. Trabalho em correção de bugs, novas funcionalidades e melhorias no modelo de dados — sempre em contato direto com regras de negócio complexas da área da saúde.',
              },
              {
                label: 'O que aprendo aqui',
                text: 'O GERCON me ensina que software de saúde exige rigor. Cada linha de código pode afetar um processo real de regulação. Isso moldou minha forma de pensar: código não é só técnico, é responsabilidade.',
              },
            ].map((block, i) => (
              <motion.div key={i} variants={fadeUp}>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--color-violet-light)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '0.4rem',
                  }}
                >
                  {block.label}
                </p>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'rgba(255,255,255,0.78)',
                    lineHeight: 1.7,
                  }}
                >
                  {block.text}
                </p>
              </motion.div>
            ))}
          </StaggerReveal>

          {/* Right: impact cards */}
          <ScrollReveal>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
              }}
            >
              {impacts.map(item => (
                <div
                  key={item.value}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '0.875rem',
                    padding: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    transition: 'background 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(107,79,187,0.15)'
                    e.currentTarget.style.borderColor = 'rgba(107,79,187,0.4)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  }}
                >
                  <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'white',
                    }}
                  >
                    {item.value}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)' }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Stack tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.25rem' }}>
              {['Java', 'Spring Boot', 'JPA', 'AngularJS', 'TypeScript', 'PostgreSQL', 'JUnit'].map(
                tag => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '9999px',
                      background: 'rgba(107,79,187,0.2)',
                      color: 'var(--color-violet-light)',
                      border: '1px solid rgba(107,79,187,0.3)',
                    }}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .gercon-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  )
}
