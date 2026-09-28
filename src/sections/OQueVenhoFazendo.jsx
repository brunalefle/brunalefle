import ScrollReveal, { StaggerReveal } from '../components/ScrollReveal'
import { motion } from 'framer-motion'
import { fadeUp } from '../utils/motion'

const projects = [
  {
    title: 'Automação Epidemiológica · CEVS',
    description:
      'Fluxos automatizados de qualificação, tratamento e análise de dados no Excel Online via TypeScript (Office Scripts) e Power Automate, cruzando notificações do SINAN.',
    tags: ['TypeScript', 'Power Automate', 'SINAN', 'Vigilância em Saúde'],
    color: 'var(--color-teal-pale)',
    accent: 'var(--color-teal)',
    icon: '🔬',
    status: 'Estágio · 2024',
  },
  {
    title: 'GERCON — Regulação de Saúde · PROCEMPA',
    description:
      'Desenvolvimento de software no sistema oficial de regulação de leitos e consultas de Porto Alegre. Atuação no backend Java com Spring Boot e evolução do banco PostgreSQL.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Saúde Pública'],
    color: 'var(--color-violet-pale)',
    accent: 'var(--color-violet)',
    icon: '🏥',
    status: 'Estágio · 2026',
  },
  {
    title: 'ViewVerde · Residência BRISA TIC 55',
    description:
      'Liderança técnica e desenvolvimento full-stack no painel ambiental de Esteio/RS: modelagem relacional, mapas interativos e monitoramento em tempo real.',
    tags: ['Full-Stack', 'PostgreSQL', 'Metodologias Ágeis', 'Esteio/RS'],
    color: 'rgba(13, 148, 136, 0.1)',
    accent: '#0D9488',
    icon: '🌳',
    status: 'Residência · 2026',
  },
  {
    title: 'Transição & Aplicação em Dados & IA',
    description:
      'Estudo e aplicação contínua de Python, Pandas, SQL e Machine Learning, conectando a vivência em bancos de saúde à resolução de problemas preditivos e analíticos.',
    tags: ['Python', 'SQL', 'Pandas', 'Dados & IA'],
    color: 'var(--color-cream-dark)',
    accent: 'var(--color-ink-soft)',
    icon: '📊',
    status: 'Foco Atual',
  },
]

export default function OQueVenhoFazendo() {
  return (
    <section
      id="projetos"
      style={{
        background: 'transparent',
        paddingTop: '5rem',
        paddingBottom: '5rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
      }}
    >
      <div style={{ maxWidth: '86rem', margin: '0 auto' }}>
        <ScrollReveal>
          <p className="section-label">projetos &amp; vivência prática</p>
          <div className="divider" />
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 700,
              color: 'var(--color-ink)',
              lineHeight: 1.2,
              marginBottom: '0.75rem',
            }}
          >
            O que venho construindo nessa trajetória
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: 'var(--color-ink-soft)',
              maxWidth: '54ch',
              lineHeight: 1.65,
              marginBottom: '3rem',
            }}
          >
            Experiências reais que unem desenvolvimento de software, dados populacionais e impacto social concreto.
          </p>
        </ScrollReveal>

        <StaggerReveal
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              style={{
                background: project.color,
                borderRadius: '1rem',
                padding: '1.5rem',
                border: '1px solid var(--color-stone)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.875rem',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              whileHover={{ y: -4, boxShadow: 'var(--shadow-hover)' }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>{project.icon}</span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: project.accent,
                    background: `${project.accent}15`,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '9999px',
                    fontWeight: 600,
                  }}
                >
                  {project.status}
                </span>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: 'var(--color-ink)',
                    marginBottom: '0.4rem',
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.86rem',
                    color: 'var(--color-ink-soft)',
                    lineHeight: 1.6,
                  }}
                >
                  {project.description}
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto' }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag tag-stone"
                    style={{ fontSize: '0.67rem' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
