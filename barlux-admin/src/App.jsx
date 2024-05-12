import { ThemeProvider } from "@mui/material";
import React from "react";
import Theme from "./Style/Theme";
import "./App.css";
import AppRoutes from "./Routes/Routes";
import { TokenProvider } from "./Hooks/ToastContext";
import ToastifyCM from "./Components/ToastifyCM";
export default function App() {
  return (
    <TokenProvider>
      <ThemeProvider theme={Theme}>
        <div dir="rtl" style={{ fontFamily: "IranSans" }}>
          <AppRoutes />
          <ToastifyCM />
        </div>
      </ThemeProvider>
    </TokenProvider>
  );
}
