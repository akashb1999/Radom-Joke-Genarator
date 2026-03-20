import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { RandomJoke } from './components/random'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <RandomJoke />
  </StrictMode>,
)
