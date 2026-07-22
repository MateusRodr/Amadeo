import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // 👇 1. Importe o BrowserRouter aqui
import App from './App.tsx'

// A sua importação do Tailwind deve continuar aqui
import './index.css' 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/* 👇 2. Envolva o componente App */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)