'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: .7, ease: [0, .55, .45, 1] } }
}
export const fadeRight = {
  hidden: { opacity: 0, x: -28 },
  show:   { opacity: 1, x: 0,  transition: { duration: .65, ease: [0, .55, .45, 1] } }
}
export const fadeLeft = {
  hidden: { opacity: 0, x: 28 },
  show:   { opacity: 1, x: 0,  transition: { duration: .65, ease: [0, .55, .45, 1] } }
}
export const scaleIn = {
  hidden: { opacity: 0, scale: .95 },
  show:   { opacity: 1, scale: 1,   transition: { duration: .6, ease: [0, .55, .45, 1] } }
}
export const stagger = (delay = 0.08) => ({
  hidden: {},
  show:   { transition: { staggerChildren: delay } }
})

export function FadeUp({ children, delay = 0, className = '', once = true }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

export function FadeRight({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={fadeRight}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

export function FadeLeft({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={fadeLeft}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerGrid({ children, className = '', delay = 0.08 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={stagger(delay)}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  )
}

export function ScaleIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={scaleIn}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
