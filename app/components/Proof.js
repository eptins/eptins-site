
export default function Proof(){
  const kpis = [
    { label:'Core Web Vitals (LCP)', val:'< 2.5s' },
    { label:'Inbound enquiries', val:'Stable, monthly' },
    { label:'High-ticket CPL', val:'Disciplined' }
  ]
  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-3">
          {kpis.map((k,i)=>(
            <div key={i} className="kpi">
              <div className="label">{k.label}</div>
              <div className="val">{k.val}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
