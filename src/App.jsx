import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'

function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary transition-colors duration-300">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App