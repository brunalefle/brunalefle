import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

// Ícones SVG minimalistas
const FlagIcon = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
    <line x1="4" y1="22" x2="4" y2="15"/>
  </svg>
)

const SparkleRocketIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <line x1="9" y1="9" x2="9.01" y2="9"/>
  </svg>
)

const TargetIcon = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
)

export default function ParaOndeVou() {
  return (
    <section
      id="paravou"
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '4.8rem',
        paddingBottom: '4.2rem',
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
          height: '36rem',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(13,148,136,0.08) 0%, rgba(107,79,187,0.06) 50%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '84rem', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>

        {/* CABEÇALHO */}
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3.2rem' }}>
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
                06 · Visão de Futuro
              </span>
            </div>

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
              Olhando para o{' '}
              <span style={{ color: 'var(--color-violet)' }}>futuro</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* ── FLUXO HORIZONTAL EM 3 CARTÕES GRANDES ── */}
        <div className="futuro-flow-row">

          {/* ETAPA 1: Hoje (tom neutro) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="futuro-card futuro-card-hoje"
            style={{
              background: '#FFFFFF',
              border: '1.5px solid rgba(120,113,108,0.22)',
              borderRadius: '1.35rem',
              padding: '2rem 1.6rem',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.4rem',
              position: 'relative',
            }}
          >
            {/* Topo: Ícone + Título */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '0.8rem',
                  background: 'rgba(120,113,108,0.08)',
                  color: 'var(--color-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <FlagIcon size={22} />
              </div>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    color: 'var(--color-muted)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  Ponto de partida
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    color: 'var(--color-ink)',
                    letterSpacing: '-0.02em',
                    margin: 0,
                  }}
                >
                  Hoje
                </h3>
              </div>
            </div>

            {/* Chips da Etapa 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', flex: 1, justifyContent: 'center' }}>
              {['CEVS', 'ViewVerde', 'PROCEMPA'].map((proj) => (
                <div
                  key={proj}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    background: 'rgba(120,113,108,0.05)',
                    border: '1px solid rgba(120,113,108,0.18)',
                    borderRadius: '0.75rem',
                    padding: '0.65rem 0.95rem',
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-muted)', opacity: 0.6 }} />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: 'var(--color-ink)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {proj}
                  </span>
                </div>
              ))}

              {/* Chip longo: Estudando NoSQL, Spark e Hadoop */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  background: 'rgba(120,113,108,0.05)',
                  border: '1px solid rgba(120,113,108,0.18)',
                  borderRadius: '0.75rem',
                  padding: '0.65rem 0.95rem',
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-muted)', opacity: 0.6, flexShrink: 0 }} />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: 'var(--color-ink-soft)',
                    lineHeight: 1.35,
                  }}
                >
                  Estudando NoSQL, Spark e Hadoop
                </span>
              </div>
            </div>
          </motion.div>

          {/* Seta 1 -> 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.22 }}
            className="futuro-arrow-box"
            aria-hidden="true"
          >
            <svg width="28" height="14" viewBox="0 0 28 14" fill="none">
              <line x1="0" y1="7" x2="22" y2="7" stroke="var(--color-stone)" strokeWidth="1.8" strokeLinecap="round"/>
              <polyline points="16,2 22,7 16,12" stroke="var(--color-stone)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </motion.div>

          {/* ETAPA 2: Acelera AI · Trainee de Dados e IA (tom teal, centro da seção, ligeiramente maior) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.32, ease: 'easeOut' }}
            className="futuro-card futuro-card-destaque"
            style={{
              background: '#FFFFFF',
              border: '2px solid rgba(13,148,136,0.38)',
              borderRadius: '1.45rem',
              padding: '2.2rem 1.8rem',
              boxShadow: '0 14px 44px rgba(13,148,136,0.14)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.4rem',
              position: 'relative',
            }}
          >
            {/* Brilho suave no topo do card de destaque */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '1.45rem',
                background: 'radial-gradient(ellipse at 50% -10%, rgba(13,148,136,0.12) 0%, transparent 68%)',
                pointerEvents: 'none',
              }}
            />

            {/* Topo: Ícone + Título + Subtítulo 1 ano */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '0.85rem',
                      background: 'rgba(13,148,136,0.12)',
                      color: '#0D9488',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <SparkleRocketIcon size={24} />
                  </div>
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.62rem',
                        fontWeight: 700,
                        color: '#0D9488',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Programa
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1.35rem',
                        fontWeight: 800,
                        color: '#0D9488',
                        letterSpacing: '-0.02em',
                        margin: 0,
                      }}
                    >
                      Acelera AI
                    </h3>
                  </div>
                </div>

                {/* Subtítulo: 1 ano */}
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    color: '#0D9488',
                    background: 'rgba(13,148,136,0.14)',
                    border: '1px solid rgba(13,148,136,0.3)',
                    padding: '0.2rem 0.75rem',
                    borderRadius: '999px',
                    letterSpacing: '0.04em',
                  }}
                >
                  1 ano
                </span>
              </div>

              {/* Cargo Trainee */}
              <div style={{ marginTop: '0.35rem', paddingLeft: '0.2rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.98rem',
                    fontWeight: 700,
                    color: 'var(--color-ink)',
                    letterSpacing: '0.01em',
                  }}
                >
                  Trainee de Dados e IA
                </span>
              </div>
            </div>

            {/* Chips da Etapa 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', flex: 1, justifyContent: 'center' }}>
              {[
                { title: 'Trilha técnica', desc: 'imersão intensiva e prática' },
                { title: 'Mentorias', desc: 'acompanhamento contínuo' },
                { title: 'Especialistas do Grupo Panvel', desc: 'aprendizado com quem vive o negócio' },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: 'rgba(13,148,136,0.06)',
                    border: '1px solid rgba(13,148,136,0.22)',
                    borderRadius: '0.85rem',
                    padding: '0.75rem 1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.15rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      color: '#0D9488',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {item.title}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      color: 'var(--color-muted)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Seta 2 -> 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.44 }}
            className="futuro-arrow-box"
            aria-hidden="true"
          >
            <svg width="28" height="14" viewBox="0 0 28 14" fill="none">
              <line x1="0" y1="7" x2="22" y2="7" stroke="var(--color-violet)" strokeWidth="1.8" strokeLinecap="round"/>
              <polyline points="16,2 22,7 16,12" stroke="var(--color-violet)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </motion.div>

          {/* ETAPA 3: Analista de Dados e IA II ou III (tom roxo com brilho) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.54, ease: 'easeOut' }}
            className="futuro-card futuro-card-futuro"
            style={{
              background: '#FFFFFF',
              border: '1.5px solid rgba(107,79,187,0.28)',
              borderRadius: '1.35rem',
              padding: '2rem 1.6rem',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.4rem',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Brilho sutil da etapa 3 ao chegar */}
            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '1.35rem',
                background: 'radial-gradient(ellipse at 50% 0%, rgba(107,79,187,0.16) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            {/* Topo: Ícone + Título */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '0.8rem',
                    background: 'rgba(107,79,187,0.1)',
                    color: 'var(--color-violet)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <TargetIcon size={22} />
                </div>
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      fontWeight: 700,
                      color: 'var(--color-violet)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Próximo Passo
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: 'var(--color-violet)',
                      letterSpacing: '-0.02em',
                      margin: 0,
                    }}
                  >
                    Analista de Dados e IA
                  </h3>
                </div>
              </div>

              {/* Nível II ou III */}
              <div style={{ marginTop: '0.35rem', paddingLeft: '0.2rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: 'var(--color-ink)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  II ou III
                </span>
              </div>

              {/* Subtítulo pequeno: "de acordo com a trajetória" */}
              <div style={{ marginTop: '0.25rem', paddingLeft: '0.2rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--color-muted)',
                    letterSpacing: '0.02em',
                  }}
                >
                  de acordo com a trajetória
                </span>
              </div>
            </div>

            {/* Bloco de consolidação e valor */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', flex: 1, justifyContent: 'center' }}>
              <div
                style={{
                  background: 'rgba(107,79,187,0.05)',
                  border: '1px solid rgba(107,79,187,0.2)',
                  borderRadius: '0.85rem',
                  padding: '0.85rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                }}
              >
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--color-violet)' }} />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: 'var(--color-violet)',
                  }}
                >
                  Autonomia técnica
                </span>
              </div>

              <div
                style={{
                  background: 'rgba(107,79,187,0.05)',
                  border: '1px solid rgba(107,79,187,0.2)',
                  borderRadius: '0.85rem',
                  padding: '0.85rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                }}
              >
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--color-violet)' }} />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: 'var(--color-violet)',
                  }}
                >
                  Modelos e análises em produção
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ── LINHA DE FECHAMENTO COM O FIO CONDUTOR ── */}
        <ScrollReveal delay={0.75}>
          <p
            style={{
              textAlign: 'center',
              marginTop: '3.2rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.86rem',
              color: 'var(--color-muted)',
              letterSpacing: '0.03em',
              lineHeight: 1.5,
              margin: '3.2rem 0 0',
            }}
          >
            Usar dados para melhorar processos e reduzir trabalho manual
          </p>
        </ScrollReveal>

      </div>

      <style>{`
        .futuro-flow-row {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 1rem;
        }
        .futuro-card {
          flex: 1;
          min-width: 0;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .futuro-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-hover);
        }
        .futuro-arrow-box {
          display: flex;
          align-items: center;
          justifyContent: center;
          transform: rotate(90deg);
          flex-shrink: 0;
        }

        @media (min-width: 860px) {
          .futuro-flow-row {
            flex-direction: row;
            align-items: stretch;
            gap: 0;
          }
          .futuro-card-destaque {
            flex: 1.18;
          }
          .futuro-arrow-box {
            transform: rotate(0deg);
            margin: 0 0.65rem;
          }
        }
      `}</style>
    </section>
  )
}
