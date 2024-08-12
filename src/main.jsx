import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GaleriaImagens from './components/GaleriaImagens'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GaleriaImagens />
  </StrictMode>,
)
