import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { captureLeadToken } from "./lib/leadToken";

// Capture lead token from URL on initial load
captureLeadToken();

createRoot(document.getElementById("root")!).render(<App />);
