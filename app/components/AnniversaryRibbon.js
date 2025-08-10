
'use client'
import { useEffect, useState } from 'react'

export default function AnniversaryRibbon() {
  const [show, setShow] = useState(false)
  useEffect(()=>{
    const now = new Date()
    const y = now.getUTCFullYear()
    const start = new Date(Date.UTC(2025,7,18)) // Aug is 7 (0-indexed), week of Aug 24, 2025
    const end = new Date(Date.UTC(2025,7,26))
    setShow(now >= start && now <= end)
  },[])
  if(!show) return null
  return <div className="ribbon">Celebrating 15 Years of Eptins 🎉</div>
}
