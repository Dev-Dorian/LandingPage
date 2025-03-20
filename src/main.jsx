import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Home } from './components/Home.jsx'
import { About } from './components/About.jsx'
import { Reference } from './components/Reference.jsx'
import { Contact } from './components/Contact.jsx'
import { Footer } from './components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Home />
    <About />
    <Reference />
    <Contact />
    <Footer />
  </React.StrictMode>,
)
