
export default function Footer(){
  return (
    <footer className="section">
      <div className="container" style={{display:'grid',gap:24}}>
        <div style={{fontWeight:700}}>Eptins</div>
        <div style={{display:'flex',gap:24,flexWrap:'wrap',opacity:.8}}>
          <a href="/work">Work</a><a href="/services">Services</a><a href="/contact">Contact</a>
        </div>
        <div style={{opacity:.6,fontSize:14}}>© 2025 Eptins Enterprises LLP</div>
      </div>
    </footer>
  )
}
