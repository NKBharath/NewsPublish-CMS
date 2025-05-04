import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'sonner'
import { Provider } from 'react-redux'
import Store from './components/store/store'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={Store}>
      <App />
      <Toaster richColors />
    </Provider>
      
  </BrowserRouter>
)
