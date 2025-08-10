
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero(){
  return (
    <section className="section">
      <div className="container">
        <motion.h1 className="h1" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.6}}>
          Premium websites that perform.
        </motion.h1>
        <motion.p className="p" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:.1,duration:.5}}>
          Design-led WordPress/Next.js builds, revenue-focused SEO, and ads that scale.
        </motion.p>
        <div style={{display:'flex',gap:12,marginTop:20}}>
          <Link href="/contact" className="btn">Start a project</Link>
          <Link href="/work" className="btn ghost">See our work</Link>
        </div>
      </div>
    </section>
  )
}
