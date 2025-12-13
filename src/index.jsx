import { StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div className="w-full h-screen bg-primary flex items-center justify-center text-cyan-400">Loading...</div>}>
      <App />
    </Suspense>
  </StrictMode>,
)
