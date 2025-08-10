
export default function Approach(){
  const steps = ['Discover','Design','Build','Grow']
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">How we work</h2>
        <div className="grid grid-4" style={{display:'grid',gridTemplateColumns:'repeat(4,minmax(0,1fr))',gap:24}}>
          {steps.map((s,i)=>(
            <div key={i} className="kpi">
              <div className="label">Step {i+1}</div>
              <div className="val">{s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
