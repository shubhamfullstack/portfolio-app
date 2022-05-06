import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LandingPage from './pages/LandingPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LandingPage />
    <section></section>
    <section style={{ backgroundColor: '#676767' }}></section>
  </React.StrictMode>
)
