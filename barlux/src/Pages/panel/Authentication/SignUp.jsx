import React from "react";
import SignUpComponent from "../../../Components/panel/Authentication/SignUp";
import { useNavigate } from "react-router-dom";
import useApi from "../../../hook/use-api";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const { request, data, status } = useApi();

  const onSubmit = async (d) => {
    await request("post", "/user/signup", d);
  };
  const handleRequest = () => {
    if (status?.status === 422) {
      toast.error("حساب کاربری با این ایمیل وجود دارد");
    } else if (status?.status === 200) {
      toast.success("حساب کاربری با موفقیت ساخته شد");
      navigate("/authentication/login");
    }
  };
  return (
    <SignUpComponent
      useEffectDep={[data, status]}
      onSubmit={onSubmit}
      handleRequest={handleRequest}
    />
  );
};

export default SignUp;
