import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import { App } from "./App.jsx";
import { MarketProvider } from "./context/context.jsx"

createRoot(document.getElementById("root")).render(
  <MarketProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MarketProvider>
)