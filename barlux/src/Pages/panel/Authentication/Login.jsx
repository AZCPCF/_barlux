import React from "react";
import LoginComponent from "../../../Components/panel/Authentication/Login";
import { useNavigate } from "react-router-dom";
import useApi from "../../../hook/use-api";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const { request, data, status } = useApi();

  const onSubmit = async (d) => {
    await request("post", "/user/login", d);
  };
  const handleRequest = () => {
    if (status?.status === 404 && data?.code === 84) {
      toast.error("ایمیل مورد نظر وجود ندارد");
    } else if (status?.status === 403) {
      toast.error("رمز عبور نادرست میباشد");
    } else if (status?.status === 200) {
      toast.success("با موفقیت وارد شدید");
      navigate("/authentication/signup");
    }
  };
  return (
    <LoginComponent
      handleRequest={handleRequest}
      useEffectDep={[data, status]}
      onSubmit={onSubmit}
    />
  );
};

export default Login;
