import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { DarkModeProvider } from "./context/DarkModeContext";
import { ProjectContextProvider } from "./context/ProjectContext";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <ProjectContextProvider>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </ProjectContextProvider>
      </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
