import ScrollReveal, { StaggerReveal } from '../components/ScrollReveal'
import { motion } from 'framer-motion'
import { fadeUp } from '../utils/motion'

const skillGroups = [
  {
    category: 'Back-end',
    icon: '☕',
    skills: [
      { name: 'Java', level: 4 },
      { name: 'Spring Boot', level: 3 },
      { name: 'JPA / Hibernate', level: 3 },
      { name: 'JUnit', level: 2 },
      { name: 'C', level: 3 },
    ],
  },
  {
    category: 'Front-end',
    icon: '🔷',
    skills: [
      { name: 'Angular / AngularJS', level: 3 },
      { name: 'TypeScript', level: 3 },
      { name: 'HTML / CSS', level: 4 },
    ],
  },
  {
    category: 'Dados & Automação',
    icon: '📊',
    skills: [
      { name: 'PostgreSQL', level: 3 },
      { name: 'Power Automate', level: 3 },
      { name: 'Office Scripts', level: 3 },
      { name: 'SQL', level: 3 },
    ],
  },
  {
    category: 'Ferramentas',
    icon: '🛠️',
    skills: [
      { name: 'Git / GitHub', level: 4 },
      { name: 'Figma', level: 3 },
      { name: 'Jira', level: 3 },
      { name: 'Scrum / Agile', level: 3 },
    ],
  },
]

// Level: 1–4 dots
function SkillBar({ level }) {
  return (
    <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
      {[1, 2, 3, 4].map(i => (
        <div
          key={i}
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: i <= level ? 'var(--color-violet)' : 'var(--color-stone)',
            transition: 'background 0.2s',
          }}
        />
      ))}
    </div>
  )
}

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        paddingTop: '5rem',
        paddingBottom: '5rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
      }}
    >
      <div style={{ maxWidth: '86rem', margin: '0 auto' }}>
        <ScrollReveal>
          <p className="section-label">stack técnica</p>
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
            Skills
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: 'var(--color-ink-soft)',
              maxWidth: '48ch',
              lineHeight: 1.65,
              marginBottom: '3rem',
            }}
          >
            Tecnologias que uso no dia a dia — com honestidade sobre o nível de cada uma.
          </p>
        </ScrollReveal>

        <StaggerReveal
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {skillGroups.map((group, gi) => (
            <motion.div
              key={gi}
              variants={fadeUp}
              style={{
                background: 'white',
                borderRadius: '1rem',
                padding: '1.5rem',
                border: '1px solid var(--color-stone)',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ fontSize: '1.1rem' }}>{group.icon}</span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: 'var(--color-violet)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  {group.category}
                </span>
              </div>

              {/* Skills list */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {group.skills.map((skill, si) => (
                  <li
                    key={si}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '0.9rem',
                      color: 'var(--color-ink-soft)',
                    }}
                  >
                    <span>{skill.name}</span>
                    <SkillBar level={skill.level} />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </StaggerReveal>

        {/* Level legend */}
        <ScrollReveal delay={0.2}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              marginTop: '2rem',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--color-muted)',
                letterSpacing: '0.06em',
              }}
            >
              NÍVEL:
            </span>
            {[
              { dots: 1, label: 'Básico' },
              { dots: 2, label: 'Intermediário' },
              { dots: 3, label: 'Proficiente' },
              { dots: 4, label: 'Avançado' },
            ].map(l => (
              <div
                key={l.label}
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
              >
                <SkillBar level={l.dots} />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.67rem',
                    color: 'var(--color-muted)',
                  }}
                >
                  {l.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
