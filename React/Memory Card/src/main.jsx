import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from './components/header'
import { Wrapper } from './components/wrapper'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Wrapper />
  </StrictMode>,
);