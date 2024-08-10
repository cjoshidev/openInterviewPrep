import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './Pages/Dashboard.tsx'
import Practice from './Pages/Practice.tsx'
import { Toaster } from "@/components/ui/toaster"
import Header from './components/Header/Header.tsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/practice/:id",
    element: <Practice />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <App />,
  }
]);



ReactDOM.createRoot(document.getElementById('root')!).render(

  <Auth0Provider
    domain="dev-4inlai0x7l7qqrfq.us.auth0.com"
    clientId="cuPDhKGNviiA6X0l7biwF24L7cb1cIHw"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <React.StrictMode>
      <div>
        <Header />
        <div className="flex-1 overflow-y-auto">
          <RouterProvider router={router} />
        </div>

      </div>

      <Toaster />
    </React.StrictMode>,
  </Auth0Provider>,

)
