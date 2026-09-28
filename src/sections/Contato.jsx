import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { QRCodeSVG } from 'qrcode.react'

// ─── JSON tokenizado com EXATAMENTE a mesma estrutura do Hero ────────
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
  { text: '"pronta ✓"',            type: 'status_str' },
  { text: ',',                     type: 'punct'   },
  { text: '\n  ',                  type: 'space'   },
  { text: '"próximo_passo"',       type: 'key'     },
  { text: ': ',                    type: 'punct'   },
  { text: '"Acelera AI"',          type: 'str'     },
  { text: '\n',                    type: 'space'   },
  { text: '}',                     type: 'bracket' },
]

const ALL_CHARS = JSON_TOKENS.flatMap(t =>
  t.text.split('').map(ch => ({ ch, type: t.type }))
)

const TOKEN_COLOR = {
  bracket:    'var(--color-muted)',
  space:      'inherit',
  punct:      'var(--color-muted)',
  key:        'var(--color-violet)',
  str:        'var(--color-teal)',
  status_str: 'var(--color-teal)',
}

const contactItems = [
  {
    id: 'email',
    label: 'E-mail',
    value: 'brunalefle@gmail.com',
    href: 'mailto:brunalefle@gmail.com',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    accent: 'var(--color-violet)',
    borderColor: 'rgba(107, 79, 187, 0.22)',
  },
  {
    id: 'phone',
    label: 'Telefone / WhatsApp',
    value: '+55 51 99953-8381',
    href: 'https://wa.me/5551999538381',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    accent: 'var(--color-teal)',
    borderColor: 'rgba(42, 157, 143, 0.22)',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/bruna-lefle',
    href: 'https://linkedin.com/in/bruna-lefle',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    accent: '#2563EB',
    borderColor: 'rgba(37, 99, 235, 0.22)',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/brunalefle',
    href: 'https://github.com/brunalefle',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    accent: 'var(--color-ink-soft)',
    borderColor: 'rgba(28, 25, 23, 0.18)',
  },
]

export default function Contato({ current, slideIndex = 7 }) {
  const [phase, setPhase] = useState('splash')
  const [charCount, setCharCount] = useState(0)
  const [isGlow, setIsGlow] = useState(false)
  const [qrMode, setQrMode] = useState('site') // 'site' | 'linkedin'

  const isActive = current === slideIndex

  // Dispara a animação SEMPRE que o usuário entra no slide de Contato
  useEffect(() => {
    if (!isActive) {
      setPhase('splash')
      setCharCount(0)
      setIsGlow(false)
      return
    }

    setPhase('splash')
    setCharCount(0)
    setIsGlow(false)

    let typingInterval = null
    let glowTimer = null

    const startTimer = setTimeout(() => {
      let i = 0
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
      const stepTime = isMobile ? 11 : 14

      typingInterval = setInterval(() => {
        i++
        setCharCount(i)

        if (i >= ALL_CHARS.length) {
          clearInterval(typingInterval)
          setIsGlow(true)

          glowTimer = setTimeout(() => {
            setPhase('revealed')
          }, 750)
        }
      }, stepTime)
    }, 220)

    return () => {
      clearTimeout(startTimer)
      if (typingInterval) clearInterval(typingInterval)
      if (glowTimer) clearTimeout(glowTimer)
    }
  }, [isActive])

  const visibleChars = ALL_CHARS.slice(0, charCount)

  return (
    <section
      id="contato"
      className="contato-section"
      style={{
        height: '100svh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4.2rem 1.75rem 1.5rem 1.75rem',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      <AnimatePresence mode="wait">
        {/* ─── ETAPA 1: SPLASH CENTRALIZADO (DIGITAÇÃO DO PROFILE.JSON) ─── */}
        {phase === 'splash' && (
          <motion.div
            key="splash-card"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.35 }}
            style={{
              width: '100%',
              maxWidth: '460px',
              margin: 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <motion.div
              animate={
                isGlow
                  ? {
                      scale: [1, 1.025, 1],
                      boxShadow: [
                        '0 4px 32px rgba(28,25,23,0.06)',
                        '0 0 45px rgba(42,157,143,0.5), 0 0 65px rgba(107,79,187,0.35)',
                        '0 4px 32px rgba(28,25,23,0.06)',
                      ],
                      borderColor: [
                        'var(--color-stone)',
                        'rgba(42,157,143,0.85)',
                        'var(--color-stone)',
                      ],
                    }
                  : {}
              }
              transition={{ duration: 0.75, ease: 'easeInOut' }}
              style={{
                width: '100%',
                background: 'rgba(255, 255, 255, 0.88)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: '1px solid var(--color-stone)',
                borderRadius: '1rem',
                padding: '1.4rem 1.6rem',
                boxShadow: '0 6px 32px rgba(28,25,23,0.06)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.9rem',
              }}
            >
              {/* Header com profile.json e window dots */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.66rem',
                    color: 'var(--color-muted)',
                    letterSpacing: '0.08em',
                  }}
                >
                  profile.json
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.58rem',
                    padding: '0.12rem 0.45rem',
                    borderRadius: '999px',
                    background: 'rgba(42,157,143,0.12)',
                    color: 'var(--color-teal)',
                    fontWeight: 700,
                  }}
                >
                  CONCLUÍDO
                </span>
                {['#FF5F57', '#FFBD2E', '#28C840'].map(c => (
                  <span
                    key={c}
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: c,
                      opacity: 0.7,
                      marginLeft: c === '#FF5F57' ? 'auto' : 0,
                    }}
                  />
                ))}
              </div>

              {/* Code block */}
              <div
                style={{
                  position: 'relative',
                  background: 'var(--color-cream-dark)',
                  borderRadius: '0.625rem',
                  padding: '1.05rem 1.25rem',
                  border: isGlow ? '1px solid rgba(42,157,143,0.6)' : '1px solid var(--color-stone)',
                  minHeight: '10rem',
                  transition: 'border 0.3s ease',
                  overflow: 'hidden',
                }}
              >
                <pre
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    lineHeight: 1.8,
                    margin: 0,
                    whiteSpace: 'pre',
                  }}
                >
                  {visibleChars.map((c, i) => {
                    const isStatus = c.type === 'status_str'
                    return (
                      <span
                        key={i}
                        style={{
                          color: TOKEN_COLOR[c.type] ?? 'var(--color-ink)',
                          fontWeight: isStatus && c.ch === '✓' ? 700 : undefined,
                          textShadow: isGlow && isStatus ? '0 0 10px rgba(42,157,143,0.7)' : 'none',
                        }}
                      >
                        {c.ch === '\n' ? '\n' : c.ch}
                      </span>
                    )
                  })}

                  {charCount < ALL_CHARS.length && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.65, repeat: Infinity, ease: 'linear' }}
                      style={{
                        display: 'inline-block',
                        width: '2px',
                        height: '0.88em',
                        background: 'var(--color-violet)',
                        verticalAlign: 'text-bottom',
                        marginLeft: '1px',
                      }}
                    />
                  )}
                </pre>

                {isGlow && (
                  <motion.div
                    initial={{ opacity: 0, x: '-100%' }}
                    animate={{ opacity: [0, 0.75, 0], x: '200%' }}
                    transition={{ duration: 0.65, ease: 'easeInOut' }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      width: '40%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.85), transparent)',
                      pointerEvents: 'none',
                    }}
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── ETAPA 2: REVELAÇÃO DO CONTEÚDO (FOTO + QR CODE OCUPANDO TODA A ESQUERDA) ─── */}
      {phase === 'revealed' && (
        <motion.div
          key="contact-revealed"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            maxWidth: '72rem',
            margin: '0 auto',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* Grid Principal: Lado Esquerdo (Foto + QR Code ocupando toda a altura) vs Lado Direito */}
          <div
            className="contato-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(280px, 340px) 1fr',
              gap: '2rem',
              alignItems: 'stretch',
            }}
          >
            {/* ─── LADO ESQUERDO: Foto + Identificação + QR Code Ocupando Toda a Esquerda ─── */}
            <div
              style={{
                height: '100%',
                background: 'rgba(255, 255, 255, 0.88)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: '1px solid var(--color-stone)',
                borderRadius: '1.25rem',
                padding: '1.75rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                textAlign: 'center',
                boxShadow: 'var(--shadow-card)',
                gap: '1.25rem',
              }}
            >
              {/* Topo do Lado Esquerdo: Foto da Bruna + Nome + Identificação */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div
                  style={{
                    width: '100%',
                    maxWidth: '220px',
                    height: '190px',
                    borderRadius: '0.875rem',
                    overflow: 'hidden',
                    border: '3px solid #FFFFFF',
                    boxShadow: '0 6px 20px rgba(107, 79, 187, 0.16)',
                    marginBottom: '0.75rem',
                    background: 'var(--color-stone)',
                  }}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}photos/foto1.jpg`}
                    alt="Bruna Caroline Sirtuli Lefle"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 15%',
                    }}
                    onError={(e) => {
                      e.currentTarget.src = `${import.meta.env.BASE_URL}photos/foto2.jpg`
                    }}
                  />
                </div>

                <h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: 'var(--color-ink)',
                    marginBottom: '0.2rem',
                    lineHeight: 1.2,
                  }}
                >
                  Bruna Caroline Sirtuli Lefle
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--color-violet)',
                    letterSpacing: '0.04em',
                    fontWeight: 600,
                  }}
                >
                  Informática Biomédica · UFCSPA | Dev &amp; Dados
                </p>
              </div>

              {/* Base do Lado Esquerdo: QR Code interativo (Site da Apresentação / LinkedIn) */}
              <div
                style={{
                  width: '100%',
                  background: '#FFFFFF',
                  padding: '0.85rem 0.95rem',
                  borderRadius: '1rem',
                  border: '1px solid rgba(107, 79, 187, 0.2)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                {/* Abas para alternar o QR Code */}
                <div style={{ display: 'flex', gap: '0.35rem', width: '100%' }}>
                  <button
                    type="button"
                    onClick={() => setQrMode('site')}
                    style={{
                      flex: 1,
                      padding: '0.22rem 0.35rem',
                      borderRadius: '999px',
                      border: qrMode === 'site' ? '1.5px solid var(--color-teal)' : '1px solid var(--color-stone)',
                      background: qrMode === 'site' ? 'rgba(42,157,143,0.12)' : 'transparent',
                      color: qrMode === 'site' ? 'var(--color-teal)' : 'var(--color-muted)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      fontWeight: qrMode === 'site' ? 700 : 500,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    🌐 Apresentação
                  </button>
                  <button
                    type="button"
                    onClick={() => setQrMode('linkedin')}
                    style={{
                      flex: 1,
                      padding: '0.22rem 0.35rem',
                      borderRadius: '999px',
                      border: qrMode === 'linkedin' ? '1.5px solid #2563EB' : '1px solid var(--color-stone)',
                      background: qrMode === 'linkedin' ? 'rgba(37,99,235,0.1)' : 'transparent',
                      color: qrMode === 'linkedin' ? '#2563EB' : 'var(--color-muted)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      fontWeight: qrMode === 'linkedin' ? 700 : 500,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    💼 LinkedIn
                  </button>
                </div>

                <QRCodeSVG
                  value={qrMode === 'site' ? 'https://brunalefle.github.io' : 'https://www.linkedin.com/in/bruna-lefle'}
                  size={104}
                  level="M"
                  includeMargin={false}
                  fgColor="#1C1917"
                />

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.15rem' }}>
                  <a
                    href={qrMode === 'site' ? 'https://brunalefle.github.io' : 'https://www.linkedin.com/in/bruna-lefle'}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      color: qrMode === 'site' ? 'var(--color-teal)' : '#2563EB',
                      fontWeight: 700,
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.2rem',
                    }}
                  >
                    {qrMode === 'site' ? 'brunalefle.github.io ↗' : 'in/bruna-lefle ↗'}
                  </a>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6rem',
                      color: 'var(--color-muted)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {qrMode === 'site' ? '📱 aponte para abrir os slides' : '📱 aponte para conectar'}
                  </span>
                </div>
              </div>
            </div>

            {/* ─── LADO DIREITO: profile.json + "Obrigada!" + Contatos + CTA ─── */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                gap: '0.9rem',
              }}
            >
              {/* Card profile.json atualizado no topo da coluna direita */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.85)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid var(--color-stone)',
                  borderRadius: '0.875rem',
                  padding: '0.75rem 1.15rem',
                  boxShadow: '0 3px 16px rgba(28,25,23,0.04)',
                }}
              >
                {/* Header do profile.json */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.35rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      color: 'var(--color-muted)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    profile.json
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.55rem',
                      padding: '0.1rem 0.42rem',
                      borderRadius: '999px',
                      background: 'rgba(42,157,143,0.12)',
                      color: 'var(--color-teal)',
                      fontWeight: 700,
                    }}
                  >
                    ✓ ATUALIZADO
                  </span>
                  {['#FF5F57', '#FFBD2E', '#28C840'].map(c => (
                    <span
                      key={c}
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: c,
                        opacity: 0.7,
                        marginLeft: c === '#FF5F57' ? 'auto' : 0,
                      }}
                    />
                  ))}
                </div>

                {/* Código com as mesmas chaves e syntax do Hero */}
                <pre
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    lineHeight: 1.6,
                    margin: 0,
                    whiteSpace: 'pre',
                    background: 'var(--color-cream-dark)',
                    borderRadius: '0.55rem',
                    padding: '0.65rem 0.95rem',
                    border: '1px solid var(--color-stone)',
                    overflowX: 'auto',
                  }}
                >
                  <span style={{ color: 'var(--color-muted)' }}>{'{'}</span>{'\n'}
                  {'  '}<span style={{ color: 'var(--color-violet)' }}>"nome"</span>: <span style={{ color: 'var(--color-teal)' }}>"Bruna Sirtuli Lefle"</span>,{'\n'}
                  {'  '}<span style={{ color: 'var(--color-violet)' }}>"foco"</span>: <span style={{ color: 'var(--color-teal)' }}>"saúde + dados"</span>,{'\n'}
                  {'  '}<span style={{ color: 'var(--color-violet)' }}>"status"</span>: <span style={{ color: 'var(--color-teal)', fontWeight: 600 }}>"pronta ✓"</span>,{'\n'}
                  {'  '}<span style={{ color: 'var(--color-violet)' }}>"próximo_passo"</span>: <span style={{ color: 'var(--color-teal)', fontWeight: 600 }}>"Acelera AI"</span>{'\n'}
                  <span style={{ color: 'var(--color-muted)' }}>{'}'}</span>
                </pre>
              </div>

              {/* Destaque "Obrigada!" */}
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.66rem',
                    color: 'var(--color-violet)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    display: 'block',
                    marginBottom: '0.15rem',
                  }}
                >
                  contato &amp; encerramento
                </span>
                <h2
                  style={{
                    fontSize: 'clamp(1.7rem, 2.8vw, 2.2rem)',
                    fontWeight: 800,
                    color: 'var(--color-ink)',
                    lineHeight: 1.1,
                    marginBottom: '0.25rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Obrigada!
                </h2>
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--color-ink-soft)',
                    lineHeight: 1.5,
                    maxWidth: '48ch',
                    margin: 0,
                  }}
                >
                  Obrigada por chegar até aqui. Construí, analisei, aprendi — e agora quero ir mais fundo. Acho que esse próximo passo é com vocês.
                </p>
              </div>

              {/* Grid de Ícones Outline de Contato (2x2) */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.55rem',
                }}
              >
                {contactItems.map((item) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    target={item.href.startsWith('mailto') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -1.5 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.65rem 0.9rem',
                      borderRadius: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.85)',
                      backdropFilter: 'blur(8px)',
                      border: `1px solid ${item.borderColor}`,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '0.45rem',
                        background: 'var(--color-cream-dark)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: item.accent,
                        flexShrink: 0,
                        border: '1px solid var(--color-stone)',
                      }}
                    >
                      {item.icon}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.56rem',
                          color: 'var(--color-muted)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                        }}
                      >
                        {item.label}
                      </span>
                      <span
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          color: 'var(--color-ink)',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {item.value}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Card de Acesso à Apresentação Online */}
              <motion.a
                href="https://brunalefle.github.io"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.012, y: -1 }}
                whileTap={{ scale: 0.988 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.55rem 0.95rem',
                  borderRadius: '0.75rem',
                  background: 'linear-gradient(135deg, rgba(42, 157, 143, 0.08) 0%, rgba(107, 79, 187, 0.08) 100%)',
                  border: '1.2px solid rgba(42, 157, 143, 0.35)',
                  textDecoration: 'none',
                  boxShadow: '0 2px 8px rgba(42, 157, 143, 0.06)',
                  gap: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '0.45rem',
                      background: 'var(--color-teal)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.9rem',
                      flexShrink: 0,
                    }}
                  >
                    🌐
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.58rem',
                        color: 'var(--color-teal)',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                      }}
                    >
                      Acesse esta apresentação online
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.85rem',
                        fontWeight: 800,
                        color: 'var(--color-ink)',
                      }}
                    >
                      brunalefle.github.io
                    </div>
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--color-teal)',
                    fontWeight: 700,
                    background: '#FFFFFF',
                    padding: '0.22rem 0.6rem',
                    borderRadius: '999px',
                    border: '1px solid rgba(42, 157, 143, 0.3)',
                    flexShrink: 0,
                    whiteSpace: 'nowrap',
                  }}
                >
                  abrir site ↗
                </span>
              </motion.a>

              {/* Call-to-action final: Acelera AI / Grupo Panvel */}
              <motion.div
                whileHover={{ y: -1.5 }}
                style={{
                  padding: '0.75rem 1.05rem',
                  borderRadius: '0.875rem',
                  background: 'linear-gradient(135deg, rgba(107,79,187,0.07) 0%, rgba(42,157,143,0.09) 100%)',
                  border: '1.2px solid rgba(107,79,187,0.22)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  boxShadow: '0 3px 14px rgba(107,79,187,0.04)',
                }}
              >
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--color-violet), var(--color-teal))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    fontSize: '1rem',
                    flexShrink: 0,
                    boxShadow: '0 2px 8px rgba(107,79,187,0.25)',
                  }}
                >
                  ✦
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: '0.86rem',
                      fontWeight: 700,
                      color: 'var(--color-ink)',
                      marginBottom: '0.12rem',
                    }}
                  >
                    Acelera AI 2026 · Grupo Panvel
                  </h4>
                  <p
                    style={{
                      fontSize: '0.74rem',
                      color: 'var(--color-ink-soft)',
                      lineHeight: 1.4,
                      margin: 0,
                    }}
                  >
                    Pronta para somar no time de Dados &amp; IA com bagagem prática em sistemas de saúde, dados populacionais e foco em resolver problemas reais.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Footer discreto com link para a apresentação online */}
          <div
            style={{
              marginTop: '1.1rem',
              paddingTop: '0.55rem',
              borderTop: '1px solid var(--color-stone)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
          >
            <a
              href="https://brunalefle.github.io"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--color-teal)',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <span>🌐</span> Apresentação online: <strong>brunalefle.github.io</strong> ↗
            </a>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.66rem',
                color: 'var(--color-muted)',
              }}
            >
              Acelera AI · Grupo Panvel · 2026
            </span>
          </div>
        </motion.div>
      )}

      <style>{`
        @media (max-height: 720px), (max-width: 899px) {
          .contato-section {
            height: auto !important;
            min-height: 100svh !important;
            overflow-y: auto !important;
            padding-top: 4.5rem !important;
            padding-bottom: 2.5rem !important;
          }
          .contato-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
