import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

// ─── JSON tokenizado para syntax highlight ────────────────────────
const JSON_TOKENS = [
  { text: '{',                     type: 'bracket' },
  { text: '\n  ',                  type: 'space'   },
  { text: '"nome"',                type: 'key'     },
  { text: ': ',                    type: 'punct'   },
  { text: '"Bruna Sirtuli Lefle"', type: 'str'     },
  { text: ',',                     type: 'punct'   },
  { text: '\n  ',                  type: 'space'   },
  { text: '"foco"',                type: 'key'     },
  { text: ': ',                    type: 'punct'   },
  { text: '"saúde + dados"',       type: 'str'     },
  { text: ',',                     type: 'punct'   },
  { text: '\n  ',                  type: 'space'   },
  { text: '"status"',              type: 'key'     },
  { text: ': ',                    type: 'punct'   },
  { text: '"aprendendo sempre"',   type: 'str'     },
  { text: ',',                     type: 'punct'   },
  { text: '\n  ',                  type: 'space'   },
  { text: '"próximo_passo"',       type: 'key'     },
  { text: ': ',                    type: 'punct'   },
  { text: '"Dados & IA"',         type: 'str'     },
  { text: '\n',                    type: 'space'   },
  { text: '}',                     type: 'bracket' },
]

// Achata em array de chars com cor
const ALL_CHARS = JSON_TOKENS.flatMap(t =>
  t.text.split('').map(ch => ({ ch, type: t.type }))
)

const TOKEN_COLOR = {
  bracket: 'var(--color-muted)',
  space:   'inherit',
  punct:   'var(--color-muted)',
  key:     'var(--color-violet)',
  str:     'var(--color-teal)',
}

// ─── Sparkline ────────────────────────────────────────────────────
const PTS = [
  [0,52],[18,46],[36,40],[52,31],[68,22],[86,14],[106,7],[130,2],
]

function cubicPath(pts) {
  let d = `M${pts[0][0]},${pts[0][1]}`
  for (let i = 1; i < pts.length; i++) {
    const [px, py] = pts[i - 1]
    const [cx, cy] = pts[i]
    const mx = (px + cx) / 2
    d += ` C${mx},${py} ${mx},${cy} ${cx},${cy}`
  }
  return d
}

const SPARK_LINE  = cubicPath(PTS)
const SPARK_AREA  = SPARK_LINE + ` L${PTS.at(-1)[0]},56 L0,56 Z`
const DOT_X       = PTS.at(-1)[0]
const DOT_Y       = PTS.at(-1)[1]

// ─── Componente ───────────────────────────────────────────────────
export default function HeroCard() {
  const [charCount, setCharCount]   = useState(0)
  const [typingDone, setTypingDone] = useState(false)
  const [sparkGo, setSparkGo]       = useState(false)

  // Typing: inicia após 0.6s (hero já apareceu)
  useEffect(() => {
    const delay = setTimeout(() => {
      let i = 0
      const id = setInterval(() => {
        i++
        setCharCount(i)
        if (i >= ALL_CHARS.length) {
          clearInterval(id)
          setTypingDone(true)
        }
      }, 20)
      return () => clearInterval(id)
    }, 600)
    return () => clearTimeout(delay)
  }, [])

  // Sparkline: inicia um pouco depois do typing
  useEffect(() => {
    const id = setTimeout(() => setSparkGo(true), 900)
    return () => clearTimeout(id)
  }, [])

  const visible = ALL_CHARS.slice(0, charCount)

  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: 'rgba(255,255,255,0.75)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        border: '1px solid var(--color-stone)',
        borderRadius: '1rem',
        padding: '1.5rem',
        boxShadow: '0 4px 32px rgba(28,25,23,0.06)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
      }}
    >
      {/* ── JSON block ── */}
      <div>
        {/* File label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '0.6rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              color: 'var(--color-muted)',
              letterSpacing: '0.08em',
            }}
          >
            profile.json
          </span>
          {/* Dot indicators */}
          {['#FF5F57','#FFBD2E','#28C840'].map(c => (
            <span
              key={c}
              style={{
                width: '6px', height: '6px',
                borderRadius: '50%',
                background: c,
                opacity: 0.7,
                marginLeft: c === '#FF5F57' ? 'auto' : 0,
              }}
            />
          ))}
        </div>

        {/* Code block */}
        <pre
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            lineHeight: 1.8,
            margin: 0,
            whiteSpace: 'pre',
            background: 'var(--color-cream-dark)',
            borderRadius: '0.625rem',
            padding: '1rem 1.1rem',
            border: '1px solid var(--color-stone)',
            minHeight: '9.5rem',
            overflowX: 'auto',
          }}
        >
          {visible.map((c, i) => (
            <span key={i} style={{ color: TOKEN_COLOR[c.type] ?? 'var(--color-ink)' }}>
              {c.ch === '\n' ? '\n' : c.ch}
            </span>
          ))}
          {/* Cursor piscante */}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.85, repeat: Infinity, ease: 'linear' }}
            style={{
              display: 'inline-block',
              width: '2px',
              height: '0.88em',
              background: 'var(--color-violet)',
              verticalAlign: 'text-bottom',
              marginLeft: '1px',
            }}
          />
        </pre>
      </div>

      {/* ── Sparkline ── */}
      <div>
        {/* Rótulo */}
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            color: 'var(--color-muted)',
            letterSpacing: '0.06em',
            marginBottom: '0.4rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
          }}
        >
          <span style={{ color: 'var(--color-teal)' }}>proximidade_com_dados</span>
          <span>.trend</span>
          <motion.span
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ color: 'var(--color-teal)', fontWeight: 700 }}
          >
            ↗
          </motion.span>
        </p>

        {/* SVG */}
        <svg
          viewBox="0 0 132 56"
          style={{ width: '100%', height: '44px', overflow: 'visible' }}
          fill="none"
        >
          <defs>
            <linearGradient id="hc-line" x1="0" y1="0" x2="132" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%"   stopColor="var(--color-teal)"   />
              <stop offset="100%" stopColor="var(--color-violet)"  />
            </linearGradient>
            <linearGradient id="hc-area" x1="0" y1="0" x2="0" y2="56" gradientUnits="userSpaceOnUse">
              <stop offset="0%"   stopColor="rgba(107,79,187,0.14)" />
              <stop offset="100%" stopColor="rgba(107,79,187,0)"    />
            </linearGradient>
          </defs>

          {/* Area fill */}
          <motion.path
            d={SPARK_AREA}
            fill="url(#hc-area)"
            initial={{ opacity: 0 }}
            animate={sparkGo ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
          />

          {/* Line */}
          <motion.path
            d={SPARK_LINE}
            stroke="url(#hc-line)"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={sparkGo ? { pathLength: 1 } : {}}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Dot end */}
          <motion.circle
            cx={DOT_X} cy={DOT_Y} r="3.5"
            fill="var(--color-violet)"
            style={{ filter: 'drop-shadow(0 0 5px rgba(107,79,187,0.75))' }}
            initial={{ scale: 0, opacity: 0 }}
            animate={sparkGo ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 1.35 }}
          />

          {/* Pulse ring */}
          <motion.circle
            cx={DOT_X} cy={DOT_Y} r={3.5}
            stroke="var(--color-violet)"
            strokeWidth="1"
            fill="none"
            animate={sparkGo ? { r: [3.5, 10], opacity: [0.7, 0] } : {}}
            transition={{ duration: 1.4, delay: 1.5, repeat: Infinity, ease: 'easeOut' }}
          />
        </svg>
      </div>
    </motion.div>
  )
}
