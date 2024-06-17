import React from "react";
import ChangePasswordComponent from "../../../Components/panel/Authentication/ChangePassword";
import { useNavigate } from "react-router-dom";
import useApi from "../../../hook/use-api";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const navigate = useNavigate();
  const { request, data, status ,sentData} = useApi();
  const onSubmit = async (d) => {
    await request("post", "/user/change_password",{new_password:'sdasoidasdijasdij'});
  };
  const handleRequest = () => {
    console.log(data);
    console.log(status);
    if (status?.status === 401) {
      toast.error("لطفا کد بازیابی ایمیل را تایید نمایید");
    } else if (status?.status === 200) {
      toast.success("رمز عبور با موفقیت تغییر کرد");
      navigate("/panel",{state:sentData});
    }
  };
  return (
    <ChangePasswordComponent
      handleRequest={handleRequest}
      onSubmit={onSubmit}
      useEffectDep={[data, status]}
    />
  );
};

export default ChangePassword;
