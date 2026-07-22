import { Routes, Route } from 'react-router-dom'

import AmadeoHero from './components/com1'


function App() {
  return (
    <Routes>
      {/* Quando a URL for '/' (página inicial), mostra o AmadeoHero */}
      <Route path="/" element={<AmadeoHero />} />
      
      {/* Dica: Rota para caso o usuário digite uma URL que não existe */}
      <Route path="*" element={<h1>Página não encontrada 404</h1>} />
    </Routes>
  )
}

export default App