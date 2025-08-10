
'use client'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'

export const metadata = { title:'Start a Project' }

export default function Contact(){
  const [ok, setOk] = useState(false)
  const onSubmit = async (e)=>{
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    if (fd.get('hp')) { setOk(true); return }
    const res = await fetch('/api/contact', { method:'POST', body: fd })
    setOk(res.ok)
  }
  return (<>
    <Header/>
    <section className="section">
      <div className="container">
        <h1 className="h2">Tell us the outcome you want</h1>
        {!ok ? (
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
        ) : (
          <div className="card" style={{padding:24,maxWidth:480}}>
            <div style={{fontWeight:700,marginBottom:8}}>Thanks!</div>
            <div className="p" style={{margin:0}}>We’ll reply within one business day.</div>
          </div>
        )}
      </div>
    </section>
    <Footer/>
    <style jsx>{`input, select, textarea { color:#0B0E14 }`}</style>
  </>)
}

const field = { padding:'12px 14px', borderRadius:10, border:'1px solid #E8EBF0', background:'#F7F8FA' }
const area  = { padding:'12px 14px', borderRadius:12, border:'1px solid #E8EBF0', background:'#F7F8FA' }
