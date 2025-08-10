
'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header(){
  const [solid, setSolid] = useState(false)
  useEffect(()=>{
    const onScroll = ()=> setSolid(window.scrollY>40)
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])
  return (
    <header style={{position:'sticky',top:0,zIndex:50, backdropFilter:'blur(8px)'}} className={solid?'solid':''}>
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:72}}>
        <Link href="/">Eptins</Link>
        <nav style={{display:'flex',gap:24,alignItems:'center'}}>
          <Link href="/work">Work</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/contact" className="btn">Start a project</Link>
        </nav>
      </div>
      <style jsx>{`header{border-bottom:1px solid rgba(255,255,255,.06)} header.solid{background:rgba(11,14,20,.7)}`}</style>
    </header>
  )
}
