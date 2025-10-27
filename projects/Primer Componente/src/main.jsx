import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'

// Crear el root una sola vez y luego renderizar
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <App />
)
