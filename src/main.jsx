import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Routes from './Routing/Routes'



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>
)
