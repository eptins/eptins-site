"use client"

import { useEffect, useMemo, useState } from "react"

const defaultClients = [
  { id: "aurum", name: "Aurum Fitness" },
  { id: "lumina", name: "Lumina Clinics" },
]

const defaultEntries = [
  { id: "jan-aurum", clientId: "aurum", month: "2024-01", spend: 2400, impressions: 180000, clicks: 4200, conversions: 180, conversionValue: 12600 },
  { id: "feb-aurum", clientId: "aurum", month: "2024-02", spend: 2800, impressions: 210000, clicks: 4700, conversions: 210, conversionValue: 14200 },
  { id: "jan-lumina", clientId: "lumina", month: "2024-01", spend: 3200, impressions: 260000, clicks: 5600, conversions: 240, conversionValue: 18800 },
]

const storageKey = "ads-tracker"

function formatNumber(value){
  return value?.toLocaleString(undefined,{maximumFractionDigits:0}) ?? "0"
}

function formatCurrency(value){
  return value?.toLocaleString(undefined,{style:"currency",currency:"USD",maximumFractionDigits:0}) ?? "$0"
}

function monthLabel(value){
  if(!value) return ""
  const [year, month] = value.split("-")
  const date = new Date(Number(year), Number(month)-1)
  return date.toLocaleDateString(undefined,{month:"long", year:"numeric"})
}

export default function AdsReporting(){
  const [clients, setClients] = useState(defaultClients)
  const [entries, setEntries] = useState(defaultEntries)
  const [clientName, setClientName] = useState("")
  const [selectedClient, setSelectedClient] = useState(defaultClients[0]?.id ?? "")
  const [input, setInput] = useState({
    month: new Date().toISOString().slice(0,7),
    spend: "",
    impressions: "",
    clicks: "",
    conversions: "",
    conversionValue: "",
  })
  const [copied, setCopied] = useState(false)

  useEffect(()=>{
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(storageKey) : null
    if(stored){
      const parsed = JSON.parse(stored)
      if(parsed.clients?.length) setClients(parsed.clients)
      if(parsed.entries?.length) setEntries(parsed.entries)
      if(parsed.clients?.length) setSelectedClient(parsed.clients[0].id)
    }
  },[])

  useEffect(()=>{
    if(typeof window === "undefined") return
    window.localStorage.setItem(storageKey, JSON.stringify({clients, entries}))
  },[clients, entries])

  const clientEntries = useMemo(()=> entries.filter(entry => entry.clientId === selectedClient).sort((a,b)=> a.month.localeCompare(b.month)), [entries, selectedClient])
  const totals = useMemo(()=>{
    const base = { spend:0, impressions:0, clicks:0, conversions:0, conversionValue:0 }
    return clientEntries.reduce((acc, entry)=>({
      spend: acc.spend + Number(entry.spend || 0),
      impressions: acc.impressions + Number(entry.impressions || 0),
      clicks: acc.clicks + Number(entry.clicks || 0),
      conversions: acc.conversions + Number(entry.conversions || 0),
      conversionValue: acc.conversionValue + Number(entry.conversionValue || 0),
    }), base)
  },[clientEntries])

  const engagement = {
    ctr: totals.impressions ? (totals.clicks / totals.impressions) * 100 : 0,
    cpc: totals.clicks ? totals.spend / totals.clicks : 0,
    cpa: totals.conversions ? totals.spend / totals.conversions : 0,
    roas: totals.spend ? (totals.conversionValue / totals.spend) : 0,
  }

  const handleAddClient = (e)=>{
    e.preventDefault()
    if(!clientName.trim()) return
    const id = clientName.trim().toLowerCase().replace(/\s+/g,"-")
    if(clients.some(client => client.id === id)) return
    const updated = [...clients, { id, name: clientName.trim() }]
    setClients(updated)
    setSelectedClient(id)
    setClientName("")
  }

  const handleInputChange = (field, value)=>{
    setInput(prev => ({...prev, [field]: value}))
  }

  const handleAddEntry = (e)=>{
    e.preventDefault()
    if(!selectedClient || !input.month) return
    const id = `${input.month}-${selectedClient}`
    const payload = {
      id,
      clientId: selectedClient,
      month: input.month,
      spend: Number(input.spend || 0),
      impressions: Number(input.impressions || 0),
      clicks: Number(input.clicks || 0),
      conversions: Number(input.conversions || 0),
      conversionValue: Number(input.conversionValue || 0),
    }
    setEntries(prev => {
      const filtered = prev.filter(entry => entry.id !== id)
      return [...filtered, payload]
    })
    setInput(prev => ({...prev, spend:"", impressions:"", clicks:"", conversions:"", conversionValue:""}))
  }

  const reportText = useMemo(()=>{
    const client = clients.find(item => item.id === selectedClient)
    const heading = client ? `${client.name} — Google Ads performance summary` : "Google Ads performance summary"
    const lines = clientEntries.map(entry => {
      const ctr = entry.impressions ? ((entry.clicks/entry.impressions)*100).toFixed(2) : "0.00"
      const cpc = entry.clicks ? (entry.spend/entry.clicks).toFixed(2) : "0.00"
      const cpa = entry.conversions ? (entry.spend/entry.conversions).toFixed(2) : "0.00"
      const roas = entry.spend ? (entry.conversionValue/entry.spend).toFixed(2) : "0.00"
      return `${monthLabel(entry.month)} — Spend ${formatCurrency(entry.spend)}, Clicks ${entry.clicks.toLocaleString()}, Conv ${entry.conversions.toLocaleString()}, CPA $${cpa}, ROAS ${roas}x`
    })
    const totalLine = `Totals — Spend ${formatCurrency(totals.spend)}, Impr. ${formatNumber(totals.impressions)}, Clicks ${formatNumber(totals.clicks)}, Conversions ${formatNumber(totals.conversions)}, Revenue ${formatCurrency(totals.conversionValue)}, ROAS ${engagement.roas.toFixed(2)}x`
    return [heading, totalLine, ...lines].join("\n")
  },[clients, clientEntries, selectedClient, totals, engagement.roas])

  const copyReport = async ()=>{
    if(!navigator?.clipboard) return
    await navigator.clipboard.writeText(reportText)
    setCopied(true)
    setTimeout(()=> setCopied(false), 2000)
  }

  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="hero-card card">
            <div>
              <p className="token">Google Ads</p>
              <h1 className="h1" style={{marginBottom:12}}>Client reporting workspace</h1>
              <p className="p" style={{maxWidth:680}}>Track clients, capture month-on-month Google Ads performance, and generate shareable summaries in minutes.</p>
              <div style={{display:"flex",gap:12,flexWrap:"wrap",marginTop:16}}>
                <div className="badge">Local-only storage</div>
                <div className="badge">Drop-in sharing copy</div>
                <div className="badge">CTR / CPA / ROAS insights</div>
              </div>
            </div>
          </div>

          <div className="grid reporting-grid">
            <div className="card panel">
              <div className="panel-head">
                <div>
                  <p className="label">Client directory</p>
                  <h2 className="h2" style={{margin:0}}>Add and select clients</h2>
                </div>
              </div>
              <form className="form-grid" onSubmit={handleAddClient}>
                <label className="input-group">
                  <span>New client name</span>
                  <input value={clientName} onChange={e=> setClientName(e.target.value)} placeholder="e.g. Horizon Motors" />
                </label>
                <button type="submit" className="btn" style={{alignSelf:"end"}}>Add client</button>
              </form>
              <div className="pill-list">
                {clients.map(client=> (
                  <button key={client.id} className={`pill ${client.id===selectedClient?"active":""}`} onClick={()=> setSelectedClient(client.id)}>
                    {client.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="card panel">
              <div className="panel-head">
                <div>
                  <p className="label">Monthly Google Ads input</p>
                  <h2 className="h2" style={{margin:0}}>Add month-wise performance</h2>
                </div>
              </div>
              <form className="form-grid" onSubmit={handleAddEntry}>
                <label className="input-group">
                  <span>Client</span>
                  <select value={selectedClient} onChange={e=> setSelectedClient(e.target.value)}>
                    {clients.map(client=> <option key={client.id} value={client.id}>{client.name}</option>)}
                  </select>
                </label>
                <label className="input-group">
                  <span>Month</span>
                  <input type="month" value={input.month} onChange={e=> handleInputChange("month", e.target.value)} />
                </label>
                <label className="input-group">
                  <span>Spend (USD)</span>
                  <input type="number" min="0" value={input.spend} onChange={e=> handleInputChange("spend", e.target.value)} placeholder="2500" />
                </label>
                <label className="input-group">
                  <span>Impressions</span>
                  <input type="number" min="0" value={input.impressions} onChange={e=> handleInputChange("impressions", e.target.value)} placeholder="180000" />
                </label>
                <label className="input-group">
                  <span>Clicks</span>
                  <input type="number" min="0" value={input.clicks} onChange={e=> handleInputChange("clicks", e.target.value)} placeholder="4200" />
                </label>
                <label className="input-group">
                  <span>Conversions</span>
                  <input type="number" min="0" value={input.conversions} onChange={e=> handleInputChange("conversions", e.target.value)} placeholder="180" />
                </label>
                <label className="input-group">
                  <span>Conversion value (USD)</span>
                  <input type="number" min="0" value={input.conversionValue} onChange={e=> handleInputChange("conversionValue", e.target.value)} placeholder="12600" />
                </label>
                <button type="submit" className="btn" style={{alignSelf:"end"}}>Save month</button>
              </form>
            </div>
          </div>

          <div className="card panel" style={{marginTop:24}}>
            <div className="panel-head">
              <div>
                <p className="label">Reporting</p>
                <h2 className="h2" style={{margin:0}}>Share ready-made summaries</h2>
              </div>
              <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
                <div className="kpi">
                  <div className="label">Total spend</div>
                  <div className="val">{formatCurrency(totals.spend)}</div>
                </div>
                <div className="kpi">
                  <div className="label">ROAS</div>
                  <div className="val">{engagement.roas.toFixed(2)}x</div>
                </div>
                <div className="kpi">
                  <div className="label">CTR</div>
                  <div className="val">{engagement.ctr.toFixed(2)}%</div>
                </div>
                <div className="kpi">
                  <div className="label">CPA</div>
                  <div className="val">${engagement.cpa.toFixed(2)}</div>
                </div>
              </div>
            </div>

            <div className="report-grid">
              <div className="report-table">
                <div className="table-head">
                  <div>Month</div>
                  <div>Spend</div>
                  <div>Clicks</div>
                  <div>Conv</div>
                  <div>CTR</div>
                  <div>CPA</div>
                  <div>ROAS</div>
                </div>
                {clientEntries.length === 0 && (
                  <div className="table-row muted">No months captured yet. Add data to see the report.</div>
                )}
                {clientEntries.map(entry=>{
                  const ctr = entry.impressions ? (entry.clicks/entry.impressions)*100 : 0
                  const cpa = entry.conversions ? entry.spend/entry.conversions : 0
                  const roas = entry.spend ? entry.conversionValue/entry.spend : 0
                  return (
                    <div className="table-row" key={entry.id}>
                      <div>
                        <div className="label">{monthLabel(entry.month)}</div>
                        <div className="sub">Revenue {formatCurrency(entry.conversionValue)}</div>
                      </div>
                      <div>{formatCurrency(entry.spend)}</div>
                      <div>{formatNumber(entry.clicks)}</div>
                      <div>{formatNumber(entry.conversions)}</div>
                      <div>{ctr.toFixed(2)}%</div>
                      <div>${cpa.toFixed(2)}</div>
                      <div>{roas.toFixed(2)}x</div>
                    </div>
                  )
                })}
              </div>

              <div className="share-card">
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12}}>
                  <div>
                    <p className="label">Share text</p>
                    <h3 style={{margin:"4px 0 0",fontSize:18}}>Copy + paste ready</h3>
                  </div>
                  <button className="btn" type="button" onClick={copyReport}>{copied?"Copied!":"Copy"}</button>
                </div>
                <textarea readOnly value={reportText} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
