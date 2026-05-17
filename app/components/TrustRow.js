export default function TrustRow(){
  const items = ['Matching, never cheesy','Premium natural fabrics','Gift-ready packaging','Inclusive couple sizing','Limited monthly drops']
  return (
    <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
      {items.map(item=><span className="badge" key={item} style={{background:'rgba(255,248,237,.1)',color:'var(--cream)',border:'1px solid rgba(255,248,237,.14)'}}>{item}</span>)}
    </div>
  )
}
