'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero(){
  return (
    <section className="hero section">
      <div className="container hero-wrap">
        <div className="hero-copy">
          <motion.div className="eyebrow" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}}>Premium couplewear</motion.div>
          <motion.h1 className="h1" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.65}}>
            Dress like the moment belongs to both of you.
          </motion.h1>
          <motion.p className="p" initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{delay:.12,duration:.55}}>
            Bae & Boo creates elevated matching sets, intimate wardrobe capsules, and gift-ready outfits designed exclusively for couples.
          </motion.p>
          <motion.div style={{display:'flex',gap:12,marginTop:24,flexWrap:'wrap'}} initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{delay:.2,duration:.55}}>
            <Link href="/#shop" className="btn">Shop couple sets</Link>
            <Link href="/services" className="btn ghost">Explore collections</Link>
          </motion.div>
          <div className="stats">
            <div className="kpi"><div className="val">2</div><div className="label">coordinated looks in every purchase</div></div>
            <div className="kpi"><div className="val">48h</div><div className="label">atelier monogram preview</div></div>
            <div className="kpi"><div className="val">100%</div><div className="label">couples-only styling system</div></div>
          </div>
        </div>
        <motion.div className="hero-art" initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{delay:.18,duration:.7}} aria-label="Premium coordinated couple outfits illustration">
          <div className="orb one"/><div className="orb two"/>
          <div className="couple-card her"/><div className="couple-card him"/>
          <div className="fit-label">His fit + Her fit, perfectly paired</div>
        </motion.div>
      </div>
    </section>
  )
}
