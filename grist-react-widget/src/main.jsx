import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { startReactDsfr } from "@codegouvfr/react-dsfr/spa";
import { GristWidgetProvider } from "grist-widget-sdk"

const GRIST_OPTIONS = {
  requiredAccess: "read table"
}

startReactDsfr({
    defaultColorScheme: "system"
});

console.log("window.grist =", window.grist);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GristWidgetProvider options={GRIST_OPTIONS}>
      <App />
    </GristWidgetProvider>
  </StrictMode>,
)
