export default function Proof(){
  const kpis = [
    { label:'premium capsules released each month', val:'04' },
    { label:'sizes across both partner profiles', val:'XXS–4XL' },
    { label:'complimentary tailoring credit on signature sets', val:'$30' }
  ]
  return (
    <section className="section">
      <div className="container">
        <div className="marquee" aria-hidden="true"><span>Bae & Boo • couples only • premium matching sets • Bae & Boo • couples only • premium matching sets • </span></div>
        <div className="grid grid-3" style={{marginTop:34}}>
          {kpis.map(k=>(
            <div key={k.label} className="kpi">
              <div className="val">{k.val}</div>
              <div className="label">{k.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
