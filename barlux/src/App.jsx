import React, { useEffect } from "react";
import "./App.css";
import AppRoutes from "./Routes/Routes";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function App() {
  return (
    <div dir="rtl" style={{ fontFamily: "IranSans" }}>
      <AppRoutes />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
