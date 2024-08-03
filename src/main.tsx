import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <Auth0Provider
    domain="dev-4inlai0x7l7qqrfq.us.auth0.com"
    clientId="cuPDhKGNviiA6X0l7biwF24L7cb1cIHw"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Auth0Provider>,

)
