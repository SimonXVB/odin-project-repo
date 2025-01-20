import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Form } from './components/form.jsx'
import './styles/style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form />
  </StrictMode>
);