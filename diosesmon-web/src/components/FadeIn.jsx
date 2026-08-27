import { motion } from 'framer-motion'

export default function FadeIn({ children, delay = 0, y = 26, className = '', ...rest }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -48px 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 0.61, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function SectionHead({ eyebrow, title, children }) {
  return (
    <FadeIn className="mb-12">
      <p className="eyebrow mb-2.5">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {children && <p className="mt-2.5 max-w-xl text-mist">{children}</p>}
    </FadeIn>
  )
}
