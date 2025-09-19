import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  const [msg, setMsg] = React.useState('carregando...')

  React.useEffect(() => {
    fetch('/api/hello')
      .then(r => r.text())
      .then(setMsg)
      .catch(() => setMsg('Falhou a chamada ao backend'))
  }, [])

  return (
    <div style={{padding: 24, fontFamily: 'system-ui, sans-serif'}}>
      <h1>React + Vite (HMR ativo)</h1>
      <p>Backend via Nginx em <code>/api/hello</code> → <strong>{msg}</strong></p>
      <p>Edite este texto e salve para ver o hot-reload 🔥</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)