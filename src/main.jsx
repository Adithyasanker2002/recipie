import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import recipieStore from './redux/recipieStore.js'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
    
    <Provider store={recipieStore}><App /></Provider>
    
    </BrowserRouter>
  </StrictMode>,
)
