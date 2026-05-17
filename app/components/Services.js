export default function Services(){
  const items = [
    { title:'Date Night', text:'Satin, twill, and sharply tailored silhouettes for reservations, anniversaries, and first-class entrances.' },
    { title:'Weekend Soft', text:'Cashmere-touch knits and lounge co-ords for the couple that treats off-duty style as a ritual.' },
    { title:'Resort Edit', text:'Linen sets, vacation prints, and breathable pairings designed to look effortless in every photo.' },
    { title:'Monogram Atelier', text:'Limited evening capsules with complimentary initials, custom notes, and premium gift packaging.' },
  ]
  return (
    <section className="section" id="collections">
      <div className="container">
        <div className="eyebrow">Collections</div>
        <h2 className="h2" style={{maxWidth:820}}>Premium clothing for two wardrobes, one story.</h2>
        <div className="grid grid-4" style={{marginTop:30}}>
          {items.map((it,i)=>(
            <div className="card" key={it.title} style={{padding:26}}>
              <div style={{fontFamily:'var(--font-display)',fontSize:46,fontWeight:700,color:'var(--rose)',marginBottom:36}}>0{i+1}</div>
              <h3 style={{fontSize:22,margin:'0 0 10px'}}>{it.title}</h3>
              <p className="p" style={{margin:0,fontSize:16}}>{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
