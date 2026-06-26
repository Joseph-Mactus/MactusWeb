import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import favicon from "./assets/images/Mactus_sm.png";
let link = document.querySelector("link[rel='icon']");
if (!link) {
  link = document.createElement("link");
  link.rel = "icon";
  document.head.appendChild(link);
}

link.type = "image/png";
link.href = favicon;
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
