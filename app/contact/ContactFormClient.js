'use client'
import { useState } from 'react'

const field = { padding:'12px 14px', borderRadius:10, border:'1px solid #E8EBF0', background:'#F7F8FA', color:'#0B0E14' }
const area  = { padding:'12px 14px', borderRadius:12, border:'1px solid #E8EBF0', background:'#F7F8FA', color:'#0B0E14' }

export default function ContactFormClient(){
  const [ok, setOk] = useState(false)

  const onSubmit = async (e)=>{
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    if (fd.get('hp')) { setOk(true); return } // honeypot
    const res = await fetch('/api/contact', { method:'POST', body: fd })
    setOk(res.ok)
  }

  if (ok) {
    return (
      <div className="card" style={{padding:24,maxWidth:480}}>
        <div style={{fontWeight:700,marginBottom:8}}>Thanks!</div>
        <div className="p" style={{margin:0}}>We’ll reply within one business day.</div>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} style={{display:'grid',gap:16,maxWidth:640}}>
      <input name="name" required placeholder="Full name" style={field}/>
      <input name="email" required type="email" placeholder="Email" style={field}/>
      <input name="phone" placeholder="Phone / WhatsApp" style={field}/>
      <select name="service" style={field}>
        <option value="">What do you need?</option>
        <option>Websites</option><option>eCommerce</option><option>Performance SEO</option><option>Growth Ads</option>
      </select>
      <textarea name="notes" placeholder="Anything we should know?" rows={5} style={area}/>
      <input type="text" name="hp" style={{display:'none'}} tabIndex={-1} autoComplete="off" />
      <button className="btn" type="submit">Send</button>
    </form>
  )
}
