import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './components/Context/ThemeProvider.jsx'

// Set initial theme based on stored preference
const storedTheme = sessionStorage.getItem("isDarkMode") === "true"
if (storedTheme) {
  document.documentElement.setAttribute("data-theme", "dark")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
