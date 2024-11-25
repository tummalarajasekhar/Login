import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GoogleLogin from './components/GoogleLogin.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientId = "920018623700-01v7sbokmdmglcde5qq3238cd05sfarg.apps.googleusercontent.com";
createRoot(document.getElementById('root')).render(
  <StrictMode>

    
<GoogleOAuthProvider clientId={clientId}>
    {/* <App /> */}
    <GoogleLogin/>
  </GoogleOAuthProvider>,
  </StrictMode>,
)
