import React from "react";
import ForgotPasswordComponent from "../../../Components/panel/Authentication/ForgotPassword";
import { useNavigate } from "react-router-dom";
import useApi from "../../../hook/use-api";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { request, data, status, sentData } = useApi();
  const onSubmit = async (d) => {
    await request("post", "/user/forgot_password", d);
  };
  const handleRequest = () => {
    if (status?.status === 404) {
      toast.error("ایمیل وارد شده ثبت نام نشده است");
    } else if (status?.status === 200) {
      toast.success("ایمیل بازیابی پسورد ارسال شد");
      console.log(sentData);
      navigate("/authentication/verifypassword", { state: sentData });
    }
  };
  return (
    <ForgotPasswordComponent
      handleRequest={handleRequest}
      onSubmit={onSubmit}
      useEffectDep={[data, status, sentData]}
    />
  );
};

export default ForgotPassword;
