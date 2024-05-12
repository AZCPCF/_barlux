import React from "react";
import "./App.css";
import AppRoutes from "./Routes/Routes";
import Header from "./Components/Header";
export default function App() {
  return (
    <div dir="rtl"  style={{ fontFamily: "IranSans" }}>
      
      <AppRoutes />
    </div>
  );
}
