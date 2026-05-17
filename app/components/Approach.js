export default function Approach(){
  const features = [
    ['Pair-first design','Every capsule starts as a conversation between two silhouettes, so the outfits coordinate without becoming costumes.'],
    ['Shared sizing concierge','Select both profiles once and receive drop recommendations tuned to both partners.'],
    ['Occasion-ready bundles','From proposal weekends to honeymoon airports, sets arrive styled with accessories and care cards.'],
    ['Private gift energy','Luxe packaging, hidden notes, and optional monograms make every delivery feel personal.']
  ]
  return (
    <section className="section light" id="couples-only">
      <div className="container split-panel">
        <div className="editorial" aria-hidden="true" />
        <div>
          <div className="eyebrow" style={{color:'var(--rose-deep)'}}>Couples only</div>
          <h2 className="h2">Not matching outfits. Matching energy.</h2>
          <p className="light p" style={{marginTop:20}}>Bae & Boo is intentionally built for couples: two coordinated pieces, two fit profiles, one premium checkout, and an experience that celebrates the relationship behind the wardrobe.</p>
          <div className="feature-list" style={{marginTop:26}}>
            {features.map(([title,text])=>(
              <div className="feature" key={title}>
                <b>{title}</b><span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
