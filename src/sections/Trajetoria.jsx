import { motion } from 'framer-motion'
import ScrollReveal, { StaggerReveal } from '../components/ScrollReveal'
import { fadeUp } from '../utils/motion'

const timeline = [
  {
    id: 'cedup',
    railDate: '2022',
    fullDate: 'conclusão: agosto de 2022',
    title: 'CEDUP — Desenvolvimento de Sistemas',
    subtitle: 'Ensino Técnico',
    type: 'compact',
    description:
      'Formação técnica onde tive o primeiro contato sólido com lógica de programação, algoritmos e modelagem de banco de dados relacional.',
    tags: ['Lógica de programação', 'SQL', 'C'],
    color: '#FFFFFF',
    dot: 'var(--color-muted)',
  },
  {
    id: 'ufcspa',
    railDate: '2024',
    fullDate: 'início: março de 2024 · cursando até dez/2028',
    title: 'Informática Biomédica — UFCSPA',
    subtitle: 'Graduação · Marco de Virada',
    type: 'featured',
    badge: 'virada de carreira',
    badgeColor: 'var(--color-violet)',
    description:
      'A grande virada: transição para a intersecção entre tecnologia e saúde. Formação focada em sistemas de informação em saúde, processamento de dados clínicos, interoperabilidade e fundamentos de IA aplicada à medicina.',
    tags: ['Informática Biomédica', 'HL7 / FHIR', 'Sistemas de Saúde'],
    color: '#FFFFFF',
    dot: 'var(--color-violet)',
    borderColor: 'rgba(107, 79, 187, 0.35)',
  },
  {
    id: 'cevs',
    railDate: '2024',
    fullDate: 'início: novembro de 2024',
    title: 'CEVS — Automação de Dados de Saúde',
    subtitle: 'Centro Estadual de Vigilância em Saúde (SES/RS)',
    type: 'featured',
    badge: 'dados em escala',
    badgeColor: 'var(--color-teal)',
    description:
      'Primeiro contato real com dados de saúde pública em escala. Automação de processos de análise epidemiológica, qualificação de bases do SINAN e fluxos com Power Automate e Office Scripts em TypeScript.',
    tags: ['Vigilância Epidemiológica', 'SINAN', 'Power Automate', 'Office Scripts'],
    color: '#FFFFFF',
    dot: 'var(--color-teal)',
    borderColor: 'rgba(42, 157, 143, 0.35)',
  },
  {
    id: 'monitoria',
    railDate: '2025',
    fullDate: 'março a julho de 2025',
    title: 'Monitoria — Algoritmos e Programação',
    subtitle: 'UFCSPA',
    type: 'compact',
    description:
      'Apoio a colegas na disciplina de Algoritmos, reforçando fundamentos em C e aprendendo a traduzir conceitos complexos com clareza.',
    tags: ['Algoritmos', 'Didática Técnica', 'C'],
    color: '#FFFFFF',
    dot: 'var(--color-muted)',
  },
  {
    id: 'pet',
    railDate: '2025',
    fullDate: 'início: outubro de 2025',
    title: 'PET-Saúde — Sustentabilidade Digital',
    subtitle: 'Bolsista · UFCSPA & Ministério da Saúde',
    type: 'compact',
    description:
      'Pesquisa aplicada e produção de conhecimento sobre sustentabilidade digital em serviços de saúde no contexto do SUS.',
    tags: ['Sustentabilidade Digital', 'SUS', 'Pesquisa Aplicada'],
    color: '#FFFFFF',
    dot: 'var(--color-muted)',
  },
  {
    id: 'brisa',
    railDate: '2026',
    fullDate: 'início: janeiro de 2026',
    title: 'Residência ICT — Programa BRISA TIC 55',
    subtitle: 'Residência Tecnológica',
    type: 'intermediate',
    badge: 'residência ICT',
    badgeColor: '#2563EB',
    description:
      'Imersão profissional acelerada em desenvolvimento de software com metodologia ágil (Scrum), atuando em squad com sprints, Jira e Git/GitHub.',
    tags: ['Residência ICT', 'Scrum & Jira', 'Git / GitHub', 'Metodologias Ágeis'],
    color: 'rgba(239, 246, 255, 0.75)',
    dot: '#2563EB',
    borderColor: 'rgba(37, 99, 235, 0.3)',
  },
  {
    id: 'procempa',
    railDate: '2026',
    fullDate: 'início: junho de 2026 · atual',
    title: 'PROCEMPA — Desenvolvimento de Software (GERCON)',
    subtitle: 'Estágio Dev · Sistema de Regulação do SUS',
    type: 'featured',
    badge: 'experiência principal',
    badgeColor: 'var(--color-teal)',
    description:
      'Desenvolvimento de software no GERCON — sistema de regulação de consultas e leitos hospitalares de Porto Alegre. Atuação com Java, AngularJS e PostgreSQL em arquitetura de missão crítica, regras de negócio complexas e alto volume de dados.',
    tags: ['GERCON', 'Java', 'AngularJS', 'PostgreSQL', 'Regulação em Saúde'],
    color: '#FFFFFF',
    dot: 'var(--color-teal)',
    borderColor: 'rgba(42, 157, 143, 0.45)',
    highlight: true,
  },
  {
    id: 'futuro',
    railDate: '→',
    fullDate: 'próximo passo · objetivo de carreira',
    title: '→ Dados & IA — o próximo passo',
    subtitle: 'Objetivo de Carreira',
    type: 'future',
    description:
      'Depois de passar pelos dois lados — construindo sistemas e analisando os dados que eles geram — é hora de focar de vez em Dados & IA.',
    tags: ['Machine Learning', 'Pipelines de Dados', 'IA em Saúde'],
    color: 'linear-gradient(135deg, rgba(243, 232, 255, 0.8) 0%, rgba(228, 245, 243, 0.8) 100%)',
    dot: 'var(--color-violet)',
    borderColor: 'var(--color-violet)',
  },
]

export default function Trajetoria() {
  return (
    <section
      id="trajetoria"
      style={{
        paddingTop: '5rem',
        paddingBottom: '5rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
      }}
    >
      <div style={{ maxWidth: '86rem', margin: '0 auto' }}>
        <ScrollReveal>
          <p className="section-label">trajetória</p>
          <div className="divider" />
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 700,
              color: 'var(--color-ink)',
              lineHeight: 1.2,
              marginBottom: '3rem',
            }}
          >
            Do técnico à residência ICT
          </h2>
        </ScrollReveal>

        {/* Timeline com 3 colunas: Ano à esquerda | Trilho com Dot no centro | Card à direita */}
        <div style={{ position: 'relative' }}>
          {/* Linha vertical conectora centralizada no trilho do dot (coluna 2: 3.5rem + 0.75rem = 4.25rem) */}
          <div
            aria-hidden="true"
            className="timeline-vertical-line"
            style={{
              position: 'absolute',
              left: '4.25rem',
              top: '1rem',
              bottom: '2.5rem',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--color-stone) 0%, var(--color-violet) 25%, var(--color-teal) 75%, var(--color-violet) 100%)',
              borderRadius: '9999px',
            }}
          />

          <StaggerReveal style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {timeline.map((item) => {
              const isCompact = item.type === 'compact'
              const isFeatured = item.type === 'featured'
              const isIntermediate = item.type === 'intermediate'
              const isFuture = item.type === 'future'

              return (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  className="timeline-row"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '3.5rem 1.5rem 1fr',
                    gap: '0.75rem',
                    alignItems: 'flex-start',
                  }}
                >
                  {/* Coluna 1: Ano à esquerda da linha (sem sobreposição com a linha vertical) */}
                  <div
                    style={{
                      textAlign: 'right',
                      paddingTop: isCompact ? '0.4rem' : '0.6rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        fontWeight: isFeatured || isFuture ? 700 : 600,
                        color: isFeatured
                          ? 'var(--color-violet)'
                          : isFuture
                          ? 'var(--color-teal)'
                          : 'var(--color-muted)',
                        whiteSpace: 'nowrap',
                        display: 'block',
                      }}
                    >
                      {item.railDate}
                    </span>
                  </div>

                  {/* Coluna 2: Trilho com Dot centralizado sobre a linha vertical */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingTop: isCompact ? '0.45rem' : '0.65rem',
                      zIndex: 2,
                    }}
                  >
                    <div
                      style={{
                        width: isFeatured ? '1.05rem' : isFuture ? '1.15rem' : '0.8rem',
                        height: isFeatured ? '1.05rem' : isFuture ? '1.15rem' : '0.8rem',
                        borderRadius: '50%',
                        background: isFuture
                          ? 'linear-gradient(135deg, var(--color-violet), var(--color-teal))'
                          : item.dot,
                        border: '2.5px solid #FFFFFF',
                        boxShadow: isFeatured || isFuture
                          ? `0 0 0 3px ${isFuture ? 'rgba(107, 79, 187, 0.35)' : item.dot + '35'}`
                          : `0 0 0 2px ${item.dot}25`,
                        flexShrink: 0,
                      }}
                    />
                  </div>

                  {/* Coluna 3: Card de conteúdo */}
                  <div
                    style={{
                      background: item.color,
                      borderRadius: isFeatured ? '1.15rem' : isFuture ? '1.25rem' : '0.9rem',
                      padding: isCompact
                        ? '0.85rem 1.25rem'
                        : isIntermediate
                        ? '1.1rem 1.45rem'
                        : isFeatured
                        ? '1.4rem 1.7rem'
                        : '1.35rem 1.65rem',
                      border: isFuture
                        ? '2px dashed var(--color-violet)'
                        : isFeatured
                        ? `1.5px solid ${item.borderColor || 'rgba(107, 79, 187, 0.3)'}`
                        : isIntermediate
                        ? `1.5px solid ${item.borderColor || 'rgba(37, 99, 235, 0.25)'}`
                        : '1px solid var(--color-stone)',
                      boxShadow: isFeatured
                        ? '0 6px 24px rgba(28, 25, 23, 0.06)'
                        : isFuture
                        ? '0 8px 30px rgba(107, 79, 187, 0.12)'
                        : '0 2px 8px rgba(28, 25, 23, 0.03)',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = isFuture
                        ? '0 12px 36px rgba(107, 79, 187, 0.18)'
                        : 'var(--shadow-hover)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = isFeatured
                        ? '0 6px 24px rgba(28, 25, 23, 0.06)'
                        : isFuture
                        ? '0 8px 30px rgba(107, 79, 187, 0.12)'
                        : '0 2px 8px rgba(28, 25, 23, 0.03)'
                    }}
                  >
                    {/* Header do Card */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.25rem',
                        marginBottom: isCompact ? '0.45rem' : '0.65rem',
                      }}
                    >
                      {/* Linha com data detalhada formal dentro do card */}
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          marginBottom: '0.15rem',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.68rem',
                            fontWeight: 600,
                            color: isFeatured
                              ? 'var(--color-violet)'
                              : isIntermediate
                              ? '#1E40AF'
                              : isFuture
                              ? 'var(--color-teal)'
                              : 'var(--color-muted)',
                            letterSpacing: '0.03em',
                            textTransform: 'lowercase',
                          }}
                        >
                          📅 {item.fullDate}
                        </span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                        <h3
                          style={{
                            fontSize: isFeatured ? '1.15rem' : isFuture ? '1.18rem' : '0.98rem',
                            fontWeight: 700,
                            color: isFuture ? 'var(--color-violet)' : 'var(--color-ink)',
                            lineHeight: 1.3,
                          }}
                        >
                          {item.title}
                        </h3>

                        {/* Badge de Destaque */}
                        {item.badge && (
                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.62rem',
                              fontWeight: 600,
                              background: item.badgeColor ? `${item.badgeColor}18` : 'var(--color-violet-pale)',
                              color: item.badgeColor || 'var(--color-violet)',
                              border: `1px solid ${item.badgeColor ? `${item.badgeColor}35` : 'transparent'}`,
                              borderRadius: '9999px',
                              padding: '0.12rem 0.55rem',
                              letterSpacing: '0.04em',
                              textTransform: 'lowercase',
                            }}
                          >
                            {item.badge}
                          </span>
                        )}

                        {/* Badge de "atual" */}
                        {item.highlight && (
                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.62rem',
                              fontWeight: 700,
                              background: 'var(--color-teal)',
                              color: 'white',
                              borderRadius: '9999px',
                              padding: '0.12rem 0.55rem',
                            }}
                          >
                            atual
                          </span>
                        )}
                      </div>

                      <p
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: isCompact ? '0.7rem' : '0.74rem',
                          color: isFuture ? 'var(--color-teal)' : 'var(--color-muted)',
                          fontWeight: 500,
                        }}
                      >
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Descrição */}
                    <p
                      style={{
                        fontSize: isCompact ? '0.86rem' : '0.92rem',
                        color: isFuture ? '#2E1065' : 'var(--color-ink-soft)',
                        lineHeight: 1.6,
                        fontWeight: isFuture ? 500 : 400,
                        marginBottom: isCompact ? '0.6rem' : '0.85rem',
                      }}
                    >
                      {item.description}
                    </p>

                    {/* Tags específicas sem repetições redundantes */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="tag"
                          style={{
                            fontSize: '0.65rem',
                            padding: '0.2rem 0.6rem',
                            background: isFuture
                              ? 'rgba(107, 79, 187, 0.12)'
                              : isIntermediate
                              ? 'rgba(37, 99, 235, 0.1)'
                              : isFeatured
                              ? 'var(--color-violet-pale)'
                              : 'var(--color-cream-dark)',
                            color: isFuture
                              ? 'var(--color-violet)'
                              : isIntermediate
                              ? '#1E40AF'
                              : isFeatured
                              ? 'var(--color-violet)'
                              : 'var(--color-ink-soft)',
                            border: '1px solid rgba(0,0,0,0.04)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </StaggerReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .timeline-vertical-line {
            left: 3.375rem !important;
          }
          .timeline-row {
            grid-template-columns: 2.75rem 1.25rem 1fr !important;
            gap: 0.5rem !important;
          }
        }
      `}</style>
    </section>
  )
}
