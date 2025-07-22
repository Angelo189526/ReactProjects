import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

// Crear el root una sola vez y luego renderizar
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <button>Hola Mundo</button>
    <button>Hola Mundo</button>
  </StrictMode>
)
