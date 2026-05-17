'use client'
import { useState } from 'react'

export default function ContactFormClient(){
  const [ok, setOk] = useState(false)

  const onSubmit = async (e)=>{
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    if (fd.get('hp')) { setOk(true); return }
    const res = await fetch('/api/contact', { method:'POST', body: fd })
    setOk(res.ok)
  }

  if (ok) {
    return (
      <div className="form-card" style={{maxWidth:560}}>
        <div className="product-title">You’re on the list.</div>
        <p className="light p" style={{margin:0}}>Our concierge will send private drop access and couple sizing notes soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="form-card" style={{display:'grid',gap:16,maxWidth:720}}>
      <input className="field" name="name" required placeholder="Your names" />
      <input className="field" name="email" required type="email" placeholder="Email" />
      <input className="field" name="phone" placeholder="Phone / WhatsApp" />
      <select className="field" name="service">
        <option value="">Which couple style are you shopping for?</option>
        <option>Date Night</option><option>Weekend Soft</option>
        <option>Resort Edit</option><option>Monogram Atelier</option>
      </select>
      <textarea className="field" name="notes" placeholder="Tell us sizes, occasion date, or styling notes for both partners." rows={5}/>
      <input type="text" name="hp" style={{display:'none'}} tabIndex={-1} autoComplete="off" />
      <button className="btn dark" type="submit">Request private access</button>
    </form>
  )
}
