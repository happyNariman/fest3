import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { Auth0Provider } from '@auth0/auth0-react';
import { store } from "./app/store"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain="https:// {dev-gqizmgyktir5vnuy.jp.auth0.com} /login/callback"
    clientId="wXZ7BC4DujLLN9t9GQ3dUKSYCf80lyoF"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

    <Provider store={store}>
      <App />
    </Provider>
    </Auth0Provider>,

)
