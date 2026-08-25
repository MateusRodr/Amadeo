import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import i18nReady from './i18n'
import '../app/styles/index.css' 

await i18nReady

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
