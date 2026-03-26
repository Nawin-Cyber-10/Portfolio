'use client'
import { useEffect, useRef, useState } from 'react'

export default function CursorCanvas() {
  const canvasRef = useRef(null)
  const dotRef    = useRef(null)
  const ringRef   = useRef(null)
  const mouse     = useRef({ x: -999, y: -999 })
  const ring      = useRef({ x: -999, y: -999 })
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    // Cursor tracking
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top  = e.clientY + 'px'
      }
    }
    document.addEventListener('mousemove', onMove)

    // Ring follows with lag
    let rafId
    function animRing() {
      ring.current.x += (mouse.current.x - ring.current.x) * .13
      ring.current.y += (mouse.current.y - ring.current.y) * .13
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top  = ring.current.y + 'px'
      }
      rafId = requestAnimationFrame(animRing)
    }
    animRing()

    // Hover detection
    const onEnter = () => setHovered(true)
    const onLeave = () => setHovered(false)
    document.querySelectorAll('a, button, .skill-card, .case-file, .cert-card, .ctf-win').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  // Dot grid canvas
  useEffect(() => {
    const cv = canvasRef.current
    if (!cv) return
    const ctx = cv.getContext('2d')
    const GS = 54
    let animId

    function resize() {
      cv.width  = window.innerWidth
      cv.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    function draw() {
      ctx.clearRect(0, 0, cv.width, cv.height)
      const cols = Math.ceil(cv.width  / GS) + 1
      const rows = Math.ceil(cv.height / GS) + 1
      const mx = mouse.current.x
      const my = mouse.current.y
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * GS, y = r * GS
          const d = Math.hypot(x - mx, y - my)
          const g = Math.max(0, 1 - d / 220)
          ctx.beginPath()
          ctx.arc(x, y, .9 + g * .9, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(0,200,240,${.04 + g * .28})`
          ctx.fill()
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} id="dot-grid" />
      <div className="scanline" />
      <div ref={dotRef}  className="cursor-dot" />
      <div ref={ringRef} className={`cursor-ring${hovered ? ' hovered' : ''}`} />
    </>
  )
}
