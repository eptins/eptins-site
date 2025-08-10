
export default function Services(){
  const items = [
    { title:'Websites (WordPress / Next.js)', text:'Conversion-first sites—fast, secure, easy to manage.' },
    { title:'eCommerce (WooCommerce)', text:'Stores built to convert and scale.' },
    { title:'Performance SEO', text:'Technical + content + local maps—baked into the build.' },
    { title:'Growth Ads (Google & Meta)', text:'Efficient acquisition for leads & sales.' },
  ]
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">Everything you need, nothing you don’t.</h2>
        <div className="grid grid-3">
          {items.map((it,i)=>(
            <div className="card" key={i} style={{padding:24}}>
              <div style={{width:48,height:48,borderRadius:12,background:'var(--electric)',marginBottom:16}}/>
              <div style={{fontWeight:700,marginBottom:8}}>{it.title}</div>
              <div className="p">{it.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
