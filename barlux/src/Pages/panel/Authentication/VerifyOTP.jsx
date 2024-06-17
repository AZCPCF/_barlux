import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useApi from "../../../hook/use-api";
import { toast } from "react-toastify";
import VerifyOTPComponent from "../../../Components/panel/Authentication/VerifyOTP";

const VerifyOTP = () => {
  const navigate = useNavigate();
  const { request, data, status } = useApi();
  const location = useLocation();
  const onSubmit = async (d) => {
    await request("post", "/user/forgot_password/verify", {
      ...d,
      email: location.state?.email,
    });
  };
  const handleRequest = () => {
    console.log(data);
    console.log(location); 
    console.log(status);
    if (status?.status === 404 && data?.code === 84) {
      toast.error("کد بازیابی رمز عبور نادرست میباشد");
    } else if (status?.status === 200) {
      toast.success("کد بازیابی با موفقت تایید شد");
      navigate("/authentication/changepassword");
      localStorage.setItem('token',data.data)
    }
  };
  return (
    <VerifyOTPComponent
      useEffectDep={[data, status]}
      onSubmit={onSubmit}
      handleRequest={handleRequest}
    />
  );
};

export default VerifyOTP;
