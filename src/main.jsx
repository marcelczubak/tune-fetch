import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="bg-rose-50/50 w-full min-h-screen flex flex-col items-center justify-center p-6">
        <App />
        <div className='sticky bottom-0 mt-2'>
            <Footer />
        </div>
    </div>
  </StrictMode>,
)
