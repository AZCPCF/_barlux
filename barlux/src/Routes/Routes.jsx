import React, { useEffect, useState } from "react";
import { TokenContext } from "../Store/TokenContext";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../Pages/panel/Authentication/Login";
import SignUp from "../Pages/panel/Authentication/SignUp";
import Navbar from "../Components/panel/Navbar/Navbar";
import NotFound from "../Pages/Global/NotFound";
import VerifyOTP from "../Pages/panel/Authentication/VerifyOTP";
import ForgotPassword from "../Pages/panel/Authentication/ForgotPassword";
import Test from "../Components/panel/Authentication/Test";
import ChangePassword from "../Pages/panel/Authentication/ChangePassword";
export default function AppRoutes() {
  const { token } = React.useContext(TokenContext);
  const [tokenn, setTokenn] = useState(token);
  console.log(tokenn);
  useEffect(() => {
    setTokenn(token);
  }, [token]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test/>} />
        <Route path="/authentication/login" element={<Login />} />
        <Route path="/authentication/signup" element={<SignUp />} />
        <Route path="/authentication/changepassword" element={<ChangePassword />} />
        <Route path="/authentication/forgotpassword" element={<ForgotPassword />} />
        <Route path="/authentication/verifypassword" element={<VerifyOTP />} />
        <Route path="/panel" element={<Navbar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
